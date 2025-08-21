'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  text, 
  color = 'primary',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };
  
  const colorClasses = {
    primary: 'border-emerald-500',
    white: 'border-white',
    gray: 'border-gray-400'
  };
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className={`
        animate-spin rounded-full border-2 border-transparent border-t-2
        ${sizeClasses[size]} 
        ${colorClasses[color]}
      `}></div>
      {text && (
        <span className={`${textSizeClasses[size]} ${color === 'white' ? 'text-white' : 'text-gray-600'}`}>
          {text}
        </span>
      )}
    </div>
  );
}

// Skeleton Loader Component
export function SkeletonLoader({ 
  lines = 3, 
  className = '' 
}: { 
  lines?: number; 
  className?: string; 
}) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`h-4 bg-gray-200 rounded ${
            index === 0 ? 'w-3/4' : 
            index === lines - 1 ? 'w-1/2' : 
            'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
}

// Progress Bar Component
export function ProgressBar({ 
  progress, 
  className = '',
  showPercentage = false
}: { 
  progress: number; 
  className?: string;
  showPercentage?: boolean;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
        ></div>
      </div>
      {showPercentage && (
        <div className="text-xs text-gray-500 mt-1 text-center">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
}