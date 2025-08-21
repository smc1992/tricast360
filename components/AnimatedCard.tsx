'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up' 
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const getTransformClasses = () => {
    const baseTransform = isVisible ? 'translate-x-0 translate-y-0' : '';
    const hiddenTransform = {
      up: 'translate-y-8',
      down: '-translate-y-8',
      left: 'translate-x-8',
      right: '-translate-x-8'
    }[direction];

    return isVisible ? baseTransform : hiddenTransform;
  };

  const getHoverTransform = () => {
    return isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0';
  };

  return (
    <div
      ref={cardRef}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${getTransformClasses()}
        ${getHoverTransform()}
        ${className}
      `}
      style={{
        transitionDelay: isVisible ? '0ms' : `${delay}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        transition-all duration-300 ease-out
        ${isHovered ? 'shadow-xl shadow-emerald-500/20' : 'shadow-lg'}
        rounded-xl overflow-hidden
      `}>
        {children}
      </div>
    </div>
  );
}