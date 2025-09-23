'use client';

import React from 'react';
import { useCart } from '../contexts/CartContext';

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <i className="ri-shopping-cart-line text-xl text-gray-700"></i>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#baf742] text-[#0E1C3D] text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center font-medium leading-none px-1">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </button>
  );
}