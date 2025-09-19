'use client';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedCard({ 
  children, 
  className = ''
}: AnimatedCardProps) {
  // Simplified component - just render children without any wrappers
  return (
    <>
      {children}
    </>
  );
}