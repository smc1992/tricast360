'use client';

interface GradientBackgroundProps {
  variant?: 'hero' | 'section' | 'card' | 'subtle' | 'warm';
  direction?: 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-l' | 'to-tl' | 'to-t' | 'to-tr';
  className?: string;
  children?: React.ReactNode;
}

export default function GradientBackground({ 
  variant = 'subtle', 
  direction = 'to-br',
  className = '',
  children
}: GradientBackgroundProps) {
  const gradientClasses = {
    // Hero-Section: Dramatischer Gradient mit Tricast360-Farben
    hero: `bg-gradient-${direction} from-[#baf742]/80 via-[#90CFC4]/60 to-[#baf742]/40`,
    
    // Section: Subtiler Gradient für Sektionen
    section: `bg-gradient-${direction} from-[#baf742]/30 via-white to-[#90CFC4]/20`,
    
    // Card: Sanfter Gradient für Cards
    card: `bg-gradient-${direction} from-white via-[#baf742]/10 to-white`,
    
    // Subtle: Sehr dezenter Gradient
    subtle: `bg-gradient-${direction} from-[#baf742]/20 to-[#90CFC4]/10`,
    
    // Warm: Wärmerer Gradient mit mehr Sättigung
    warm: `bg-gradient-${direction} from-[#baf742]/40 via-[#90CFC4]/30 to-[#baf742]/20`
  };
  
  return (
    <div className={`${gradientClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

// Spezialisierte Gradient-Komponenten
export function HeroGradient({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-[#baf742]/70 via-[#90CFC4]/50 to-[#baf742]/30 ${className}`}>
      {children}
    </div>
  );
}

export function SectionGradient({ 
  children, 
  className = '',
  reverse = false 
}: { 
  children?: React.ReactNode; 
  className?: string;
  reverse?: boolean;
}) {
  const gradientClass = reverse 
    ? 'bg-gradient-to-l from-[#baf742]/25 via-white to-[#90CFC4]/15'
    : 'bg-gradient-to-r from-[#baf742]/25 via-white to-[#90CFC4]/15';
    
  return (
    <div className={`${gradientClass} ${className}`}>
      {children}
    </div>
  );
}

export function CardGradient({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-white via-[#baf742]/8 to-[#90CFC4]/5 ${className}`}>
      {children}
    </div>
  );
}

// Button-Gradienten (für spezielle CTAs)
export function ButtonGradient({ 
  children, 
  className = '',
  variant = 'primary'
}: { 
  children?: React.ReactNode; 
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}) {
  const gradientClasses = {
    primary: 'bg-gradient-to-r from-[#baf742] to-[#90CFC4] hover:from-[#a8e63a] hover:to-[#7fb8b0]',
    secondary: 'bg-gradient-to-r from-[#baf742] to-[#baf742] hover:from-[#a8e63a] hover:to-[#a8e63a]',
    accent: 'bg-gradient-to-r from-[#90CFC4] to-[#baf742] hover:from-[#7fb8b0] hover:to-[#a8e63a]'
  };
  
  return (
    <div className={`${gradientClasses[variant]} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

// Overlay-Gradienten für bessere Lesbarkeit
export function OverlayGradient({ 
  children, 
  className = '',
  opacity = 'medium'
}: { 
  children?: React.ReactNode; 
  className?: string;
  opacity?: 'light' | 'medium' | 'strong';
}) {
  const opacityClasses = {
    light: 'bg-gradient-to-t from-white/60 via-white/30 to-transparent',
    medium: 'bg-gradient-to-t from-white/80 via-white/50 to-white/20',
    strong: 'bg-gradient-to-t from-white/90 via-white/70 to-white/40'
  };
  
  return (
    <div className={`${opacityClasses[opacity]} ${className}`}>
      {children}
    </div>
  );
}

// Radial Gradienten für Spotlight-Effekte
export function RadialGradient({ 
  children, 
  className = '',
  position = 'center'
}: { 
  children?: React.ReactNode; 
  className?: string;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}) {
  const positionClasses = {
    center: 'bg-radial-gradient from-[#baf742]/30 via-[#90CFC4]/15 to-transparent',
    top: 'bg-gradient-radial from-[#baf742]/25 at-top via-[#90CFC4]/10 to-transparent',
    bottom: 'bg-gradient-radial from-[#baf742]/25 at-bottom via-[#90CFC4]/10 to-transparent',
    left: 'bg-gradient-radial from-[#baf742]/25 at-left via-[#90CFC4]/10 to-transparent',
    right: 'bg-gradient-radial from-[#baf742]/25 at-right via-[#90CFC4]/10 to-transparent'
  };
  
  return (
    <div className={`bg-radial-gradient from-[#baf742]/20 via-[#90CFC4]/10 to-transparent ${className}`}>
      {children}
    </div>
  );
}

// Mesh Gradient für moderne Hintergründe
export function MeshGradient({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#baf742]/40 via-[#90CFC4]/20 to-[#baf742]/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#baf742]/20 via-transparent to-[#90CFC4]/15"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#baf742]/10 to-[#90CFC4]/20"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}