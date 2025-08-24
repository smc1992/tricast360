'use client';

import LoadingSpinner from './LoadingSpinner';

interface LoadingButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function LoadingButton({
  isLoading,
  loadingText,
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button'
}: LoadingButtonProps) {
  const baseClasses = 'relative overflow-hidden font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#39F2AE] focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#39F2AE] to-[#2dd89a] text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:-translate-y-0.5',
    outline: 'border-2 border-[#39F2AE] text-[#39F2AE] hover:bg-[#39F2AE]/10 hover:-translate-y-0.5'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const spinnerSizes = {
    sm: 'sm' as const,
    md: 'sm' as const,
    lg: 'md' as const
  };
  
  const isDisabled = disabled || isLoading;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${isDisabled ? 'opacity-75 cursor-not-allowed transform-none' : 'cursor-pointer'}
        ${className}
      `}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <LoadingSpinner 
            size={spinnerSizes[size]} 
            color={variant === 'primary' ? 'white' : 'primary'}
          />
          <span>{loadingText || 'Lädt...'}</span>
        </div>
      ) : (
        children
      )}
      
      {/* Ripple Effect */}
      {!isDisabled && (
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
        </span>
      )}
    </button>
  );
}

// Specialized variants for common use cases
export function PrimaryLoadingButton(props: Omit<LoadingButtonProps, 'variant'>) {
  return <LoadingButton {...props} variant="primary" />;
}

export function SecondaryLoadingButton(props: Omit<LoadingButtonProps, 'variant'>) {
  return <LoadingButton {...props} variant="secondary" />;
}

export function OutlineLoadingButton(props: Omit<LoadingButtonProps, 'variant'>) {
  return <LoadingButton {...props} variant="outline" />;
}