'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, removeItem, updateQuantity, clearCart, applyCoupon, removeCoupon } = useCart();
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) return;
    
    setIsApplyingCoupon(true);
    const result = await applyCoupon(couponInput.trim());
    setCouponMessage(result.message);
    
    if (result.success) {
      setCouponInput('');
      setTimeout(() => setCouponMessage(''), 3000);
    }
    
    setIsApplyingCoupon(false);
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage('Gutscheincode entfernt');
    setTimeout(() => setCouponMessage(''), 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <i className="ri-shopping-cart-line text-xl text-green-600"></i>
            <h2 className="text-lg font-semibold text-gray-900">
              Warenkorb ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <i className="ri-close-line text-xl text-gray-500"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <i className="ri-shopping-cart-line text-5xl text-gray-300 mx-auto mb-4 block"></i>
              <p className="text-gray-500">Ihr Warenkorb ist leer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        TriCast360 System
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.productModel}
                      </p>
                      <p className="text-sm text-gray-600">
                    Ø {item.diameter}cm × flexible Höhe
                  </p>
                      <p className="text-sm text-gray-600">
                        {item.modules} Module
                      </p>
                      {item.advertisingBoardSize && item.advertisingBoardSize !== 'none' && (
                        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded">
                          <p className="text-sm text-blue-800 font-medium">
                            <i className="ri-advertisement-line mr-1"></i>
                            Werbetafel {item.advertisingBoardSize === 'small' ? '20x80cm (+39€ netto)' : '70x70cm (+49€ netto)'}
                          </p>
                          {item.logo && (
                            <p className="text-xs text-blue-600 mt-1">
                              <i className="ri-image-line mr-1"></i>
                              Logo hochgeladen
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-red-50 rounded text-red-500 transition-colors"
                    >
                      <i className="ri-delete-bin-line text-base"></i>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 hover:bg-gray-100 rounded border border-gray-300"
                      >
                        <i className="ri-subtract-line text-sm"></i>
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded border border-gray-300"
                      >
                        <i className="ri-add-line text-sm"></i>
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {formatPrice(item.pricePerUnit)} × {item.quantity}
                      </p>
                      <p className="font-semibold text-gray-900">
                        {formatPrice(item.totalPrice)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Coupon Section */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gutscheincode
              </label>
              {state.couponCode ? (
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <i className="ri-price-tag-3-line text-base text-green-600"></i>
                    <span className="text-sm font-medium text-green-800">
                      {state.couponCode.code} (-{state.couponCode.discount}%)
                    </span>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    <i className="ri-close-line text-base"></i>
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Gutscheincode eingeben"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleApplyCoupon()}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={isApplyingCoupon || !couponInput.trim()}
                    className="px-4 py-2 bg-[#baf742] text-[#0E1C3D] rounded-lg hover:bg-[#a8e63a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isApplyingCoupon ? 'Prüfe...' : 'Anwenden'}
                  </button>
                </div>
              )}
              {couponMessage && (
                <p className={`text-sm mt-2 ${
                  couponMessage.includes('angewendet') || couponMessage.includes('entfernt') 
                    ? 'text-green-600' 
                    : 'text-red-600'
                }`}>
                  {couponMessage}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Total and Actions */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Zwischensumme (Netto):</span>
                <span className="text-gray-900">{formatPrice(state.totalPrice)}</span>
              </div>
              {state.couponCode && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">
                    Rabatt ({state.couponCode.discount}%):
                  </span>
                  <span className="text-green-600">
                    -{formatPrice(state.totalPrice - state.discountedPrice)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">zzgl. Umsatzsteuer (19%):</span>
                <span className="text-gray-900">{formatPrice(state.vatAmount)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-gray-300 pt-2">
                <span className="text-gray-900">Gesamt (Brutto):</span>
                <span className="text-gray-900">{formatPrice(state.totalWithVat)}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Link 
                href="/checkout"
                className="w-full bg-[#baf742] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#a8e63a] transition-colors text-center block"
              >
                Zur Kasse
              </Link>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Warenkorb leeren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}