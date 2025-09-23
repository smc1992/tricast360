import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendOrderConfirmationEmails } from '../../../../lib/emailService';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// Helper function to parse order items from metadata
function parseOrderItems(metadata: { [key: string]: string }): Array<{ name: string; quantity: number; price: number }> {
  const items: Array<{ name: string; quantity: number; price: number }> = [];
  
  try {
    // Parse items from metadata (format: item_0_name, item_0_quantity, item_0_price, etc.)
    let index = 0;
    while (metadata[`item_${index}_name`]) {
      const name = metadata[`item_${index}_name`];
      const quantity = parseInt(metadata[`item_${index}_quantity`] || '1');
      const price = parseInt(metadata[`item_${index}_price`] || '0');
      
      if (name) {
        items.push({ name, quantity, price });
      }
      index++;
    }
    
    // Fallback: if no structured items found, create a generic item
    if (items.length === 0) {
      items.push({
        name: 'TriCast360 Baumschutz-System',
        quantity: 1,
        price: parseInt(metadata.amount || '0')
      });
    }
  } catch (error) {
    console.error('Error parsing order items:', error);
    // Fallback item
    items.push({
      name: 'TriCast360 Baumschutz-System',
      quantity: 1,
      price: parseInt(metadata.amount || '0')
    });
  }
  
  return items;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      
      // TODO: Update order status in database
      // TODO: Send confirmation email to customer
      // TODO: Trigger fulfillment process
      
      await handlePaymentSuccess(paymentIntent);
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      console.log('Invoice payment succeeded:', invoice.id);
      await handleInvoicePaymentSuccess(invoice);
      break;

    case 'invoice.created':
      const createdInvoice = event.data.object as Stripe.Invoice;
      console.log('Invoice created:', createdInvoice.id);
      await handleInvoiceCreated(createdInvoice);
      break;

    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent failed:', failedPayment.id);
      
      // TODO: Update order status to failed
      // TODO: Send failure notification
      
      await handlePaymentFailure(failedPayment);
      break;

    case 'payment_intent.canceled':
      const canceledPayment = event.data.object as Stripe.PaymentIntent;
      console.log('PaymentIntent canceled:', canceledPayment.id);
      
      // TODO: Update order status to canceled
      
      await handlePaymentCancellation(canceledPayment);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing successful payment:', {
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      customerEmail: paymentIntent.receipt_email,
      metadata: paymentIntent.metadata
    });

    // Create automatic invoice for the payment
    await createAutomaticInvoice(paymentIntent);

    // Send order confirmation emails
    await sendOrderConfirmationEmails({
      customerName: paymentIntent.metadata.customerName || 'Kunde',
      customerEmail: paymentIntent.metadata.customerEmail || paymentIntent.receipt_email || '',
      customerPhone: paymentIntent.metadata.customerPhone,
      company: paymentIntent.metadata.company,
      address: paymentIntent.metadata.address,
      orderNumber: paymentIntent.metadata.orderNumber || `ORDER-${paymentIntent.id.slice(-8).toUpperCase()}`,
      items: parseOrderItems(paymentIntent.metadata),
      total: paymentIntent.amount,
      vatId: paymentIntent.metadata.vatId,
      paymentIntentId: paymentIntent.id,
    });

    console.log('✅ Order confirmation emails sent successfully');

    // TODO: Implement database update
    // Example:
    // await updateOrderStatus(paymentIntent.id, 'paid');
    
    // TODO: Trigger fulfillment
    // Example:
    // await triggerFulfillment(paymentIntent.metadata.orderNumber);
    
  } catch (error) {
    console.error('Error handling payment success:', error);
    // Don't throw error to prevent webhook retry loops
    // The payment was successful, email failure shouldn't affect that
  }
}

async function handleInvoicePaymentSuccess(invoice: Stripe.Invoice) {
  try {
    console.log('Processing invoice payment success:', {
      invoiceId: invoice.id,
      amount: invoice.amount_paid,
      customerEmail: invoice.customer_email
    });

    // Invoice is automatically finalized and sent by Stripe
    // Additional processing can be done here if needed
    
  } catch (error) {
    console.error('Error handling invoice payment success:', error);
    throw error;
  }
}

async function createAutomaticInvoice(paymentIntent: Stripe.PaymentIntent) {
  try {
    // Only create invoice if customer email is available
    if (!paymentIntent.receipt_email) {
      console.log('No customer email found, skipping invoice creation');
      return;
    }

    // Create or retrieve customer
    let customer;
    try {
      const customers = await stripe.customers.list({
        email: paymentIntent.receipt_email,
        limit: 1
      });
      
      if (customers.data.length > 0) {
        customer = customers.data[0];
      } else {
        customer = await stripe.customers.create({
          email: paymentIntent.receipt_email,
          name: paymentIntent.metadata.customerName || undefined,
          metadata: {
            paymentIntentId: paymentIntent.id,
            vatId: paymentIntent.metadata.vatId || ''
          }
        });
      }
    } catch (error) {
      console.error('Error creating/retrieving customer:', error);
      return;
    }

    // Create invoice item
    await stripe.invoiceItems.create({
      customer: customer.id,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      description: paymentIntent.metadata.productDescription || 'Bestellung',
      metadata: {
        paymentIntentId: paymentIntent.id,
        orderNumber: paymentIntent.metadata.orderNumber || paymentIntent.id
      }
    });

    // Add VAT ID as Tax ID if provided
    if (paymentIntent.metadata.vatId) {
      try {
        await stripe.customers.createTaxId(customer.id, {
          type: 'eu_vat',
          value: paymentIntent.metadata.vatId
        });
      } catch (error) {
        console.log('VAT ID could not be added:', error);
        // Continue with invoice creation even if VAT ID fails
      }
    }

    // Create and finalize invoice
    const invoice = await stripe.invoices.create({
      customer: customer.id,
      auto_advance: true, // Automatically finalize and send
      collection_method: 'send_invoice',
      days_until_due: 30,
      metadata: {
        paymentIntentId: paymentIntent.id,
        orderNumber: paymentIntent.metadata.orderNumber || paymentIntent.id,
        vatId: paymentIntent.metadata.vatId || ''
      }
    });

    // Finalize the invoice (this will send it to the customer)
    if (invoice.id) {
      await stripe.invoices.finalizeInvoice(invoice.id);
      console.log('Invoice created and sent:', invoice.id);
    }
    
  } catch (error) {
    console.error('Error creating automatic invoice:', error);
    // Don't throw error to avoid breaking the webhook
  }
}

async function handleInvoiceCreated(invoice: Stripe.Invoice) {
  try {
    console.log('Processing invoice creation:', {
      invoiceId: invoice.id,
      status: invoice.status,
      customerEmail: invoice.customer_email
    });

    // Invoice created - can be customized here before finalizing
    // For automatic invoices, they are usually auto-finalized
    
  } catch (error) {
    console.error('Error handling invoice creation:', error);
    throw error;
  }
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing failed payment:', {
      paymentIntentId: paymentIntent.id,
      lastPaymentError: paymentIntent.last_payment_error,
      metadata: paymentIntent.metadata
    });

    // TODO: Implement database update
    // await updateOrderStatus(paymentIntent.id, 'failed');
    
    // TODO: Send failure notification
    // await sendPaymentFailureEmail(paymentIntent.receipt_email, paymentIntent.metadata.orderNumber);
    
  } catch (error) {
    console.error('Error handling payment failure:', error);
    throw error;
  }
}

async function handlePaymentCancellation(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing canceled payment:', {
      paymentIntentId: paymentIntent.id,
      metadata: paymentIntent.metadata
    });

    // TODO: Implement database update
    // await updateOrderStatus(paymentIntent.id, 'canceled');
    
  } catch (error) {
    console.error('Error handling payment cancellation:', error);
    throw error;
  }
}

// Helper function to update order status (to be implemented with database)
// async function updateOrderStatus(paymentIntentId: string, status: string) {
//   // Implementation depends on your database choice
//   // Example with Supabase:
//   // const { error } = await supabase
//   //   .from('orders')
//   //   .update({ status, updated_at: new Date().toISOString() })
//   //   .eq('payment_intent_id', paymentIntentId);
//   
//   // if (error) {
//   //   throw new Error(`Failed to update order status: ${error.message}`);
//   // }
// }

// Helper function to send confirmation email (to be implemented)
// async function sendConfirmationEmail(email: string, orderNumber: string) {
//   // Implementation with your email service
//   // Example with nodemailer or email service of choice
// }