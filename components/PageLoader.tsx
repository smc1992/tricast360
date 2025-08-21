'use client';

import { SkeletonLoader } from './LoadingSpinner';

interface PageLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  skeletonLines?: number;
}

export default function PageLoader({ 
  isLoading, 
  children, 
  className = '',
  skeletonLines = 5
}: PageLoaderProps) {
  if (isLoading) {
    return (
      <div className={`animate-pulse space-y-6 p-6 ${className}`}>
        {/* Header Skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* Content Skeleton */}
        <div className="space-y-4">
          {Array.from({ length: skeletonLines }).map((_, index) => (
            <SkeletonLoader key={index} lines={3} className="mb-6" />
          ))}
        </div>
        
        {/* Button Skeleton */}
        <div className="flex gap-4">
          <div className="h-12 bg-gray-200 rounded-xl w-32"></div>
          <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
}

// Specialized loaders for different content types
export function CardLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FormLoader() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Form fields */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded-xl"></div>
        </div>
      ))}
      
      {/* Submit button */}
      <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
    </div>
  );
}

export function ImageLoader({ 
  width = '100%', 
  height = '200px',
  className = ''
}: { 
  width?: string; 
  height?: string;
  className?: string;
}) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <div className="flex items-center justify-center h-full">
        <svg 
          className="w-12 h-12 text-gray-400" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
}