'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface CartItem {
  id: string;
  productModel: string; // Flexibler für Einstiegspaket und Add-ons
  diameter: number;
  height: number;
  modules: number;
  color?: string; // Optional für Kompatibilität
  material?: string; // Optional für Kompatibilität
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
}

export interface CouponCode {
  code: string;
  discount: number; // Prozent
  isValid: boolean;
  appliedAt: Date;
}

interface CartState {
  items: CartItem[];
  couponCode: CouponCode | null;
  totalPrice: number; // Netto-Preis
  discountedPrice: number; // Netto-Preis nach Rabatt
  vatAmount: number; // Umsatzsteuer-Betrag
  totalWithVat: number; // Brutto-Preis (inkl. Umsatzsteuer)
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_COUPON'; payload: CouponCode }
  | { type: 'REMOVE_COUPON' }
  | { type: 'CALCULATE_TOTALS' };

const initialState: CartState = {
  items: [],
  couponCode: null,
  totalPrice: 0,
  discountedPrice: 0,
  vatAmount: 0,
  totalWithVat: 0,
};

// Verfügbare Gutscheincodes
const AVAILABLE_COUPONS: Record<string, { discount: number; description: string }> = {
  'SAVE10': { discount: 10, description: '10% Rabatt auf Ihre Bestellung' },
  'WELCOME15': { discount: 15, description: '15% Willkommensrabatt' },
  'ECO20': { discount: 20, description: '20% Umweltrabatt' },
  'BULK25': { discount: 25, description: '25% Mengenrabatt ab 5 Systemen' },
};

function cartReducer(state: CartState, action: CartAction): CartState {
  console.log('cartReducer called with action:', action.type, 'payload' in action ? action.payload : 'no payload');
  console.log('Current state:', state);
  
  switch (action.type) {
    case 'ADD_ITEM': {
      console.log('Processing ADD_ITEM');
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      console.log('Existing item index:', existingItemIndex);
      let newItems;
      
      if (existingItemIndex >= 0) {
        console.log('Updating existing item');
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        console.log('Adding new item');
        newItems = [...state.items, action.payload];
      }
      
      console.log('New items array:', newItems);
      const newState = { ...state, items: newItems };
      console.log('New state:', newState);
      return newState;
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      // Wichtig: Wenn der Warenkorb leer wird, Gutscheincode entfernen
      const newState = { 
        ...state, 
        items: newItems,
        couponCode: newItems.length === 0 ? null : state.couponCode
      };
      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      // Wichtig: Wenn der Warenkorb leer wird, Gutscheincode entfernen
      const newState = { 
        ...state, 
        items: newItems,
        couponCode: newItems.length === 0 ? null : state.couponCode
      };
      return newState;
    }
    
    case 'CLEAR_CART': {
      // Wichtig: Beim Leeren des Warenkorbs wird auch der Gutscheincode entfernt
      return { ...initialState };
    }
    
    case 'APPLY_COUPON': {
      return { ...state, couponCode: action.payload };
    }
    
    case 'REMOVE_COUPON': {
      return { ...state, couponCode: null };
    }
    
    case 'CALCULATE_TOTALS': {
      const totalPrice = state.items.reduce((sum, item) => sum + item.totalPrice, 0);
      let discountedPrice = totalPrice;
      
      if (state.couponCode && state.couponCode.isValid) {
        const discount = (totalPrice * state.couponCode.discount) / 100;
        discountedPrice = totalPrice - discount;
      }
      
      // 19% Umsatzsteuer berechnen
      const vatRate = 0.19;
      const vatAmount = discountedPrice * vatRate;
      const totalWithVat = discountedPrice + vatAmount;
      
      return { ...state, totalPrice, discountedPrice, vatAmount, totalWithVat };
    }
    
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => Promise<{ success: boolean; message: string }>;
  removeCoupon: () => void;
  validateCoupon: (code: string) => { isValid: boolean; discount: number; description: string };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Automatische Neuberechnung der Summen bei Änderungen
  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTALS' });
  }, [state.items, state.couponCode]);

  const addItem = (item: Omit<CartItem, 'id'>) => {
    console.log('CartContext addItem called with:', item);
    const id = `${item.productModel}-${item.diameter}-${item.height}-${item.modules}`;
    const cartItem: CartItem = { ...item, id };
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    console.log('Dispatch called for ADD_ITEM');
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const validateCoupon = (code: string) => {
    const coupon = AVAILABLE_COUPONS[code.toUpperCase()];
    if (!coupon) {
      return { isValid: false, discount: 0, description: '' };
    }
    
    // Zusätzliche Validierung für BULK25 (nur ab 5 Systemen)
    if (code.toUpperCase() === 'BULK25') {
      const totalSystems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      if (totalSystems < 5) {
        return { 
          isValid: false, 
          discount: 0, 
          description: 'Dieser Gutschein ist nur ab 5 Systemen gültig' 
        };
      }
    }
    
    return { isValid: true, ...coupon };
  };

  const applyCoupon = async (code: string): Promise<{ success: boolean; message: string }> => {
    const validation = validateCoupon(code);
    
    if (!validation.isValid) {
      return { 
        success: false, 
        message: validation.description || 'Ungültiger Gutscheincode' 
      };
    }
    
    const couponCode: CouponCode = {
      code: code.toUpperCase(),
      discount: validation.discount,
      isValid: true,
      appliedAt: new Date(),
    };
    
    dispatch({ type: 'APPLY_COUPON', payload: couponCode });
    
    return { 
      success: true, 
      message: `Gutscheincode angewendet: ${validation.discount}% Rabatt` 
    };
  };

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' });
  };

  return (
    <CartContext.Provider value={{
      state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      applyCoupon,
      removeCoupon,
      validateCoupon,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}