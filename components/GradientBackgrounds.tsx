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
    hero: `bg-gradient-${direction} from-emerald-50/80 via-teal-50/60 to-cyan-50/40`,
    
    // Section: Subtiler Gradient für Sektionen
    section: `bg-gradient-${direction} from-emerald-50/30 via-white to-teal-50/20`,
    
    // Card: Sanfter Gradient für Cards
    card: `bg-gradient-${direction} from-white via-emerald-50/10 to-white`,
    
    // Subtle: Sehr dezenter Gradient
    subtle: `bg-gradient-${direction} from-emerald-50/20 to-teal-50/10`,
    
    // Warm: Wärmerer Gradient mit mehr Sättigung
    warm: `bg-gradient-${direction} from-emerald-100/40 via-teal-100/30 to-cyan-100/20`
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
    <div className={`bg-gradient-to-br from-emerald-50/70 via-teal-50/50 to-cyan-50/30 ${className}`}>
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
    ? 'bg-gradient-to-l from-emerald-50/25 via-white to-teal-50/15'
    : 'bg-gradient-to-r from-emerald-50/25 via-white to-teal-50/15';
    
  return (
    <div className={`${gradientClass} ${className}`}>
      {children}
    </div>
  );
}

export function CardGradient({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-white via-emerald-50/8 to-teal-50/5 ${className}`}>
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
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700',
    secondary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
    accent: 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'
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
    center: 'bg-radial-gradient from-emerald-50/30 via-teal-50/15 to-transparent',
    top: 'bg-gradient-radial from-emerald-50/25 at-top via-teal-50/10 to-transparent',
    bottom: 'bg-gradient-radial from-emerald-50/25 at-bottom via-teal-50/10 to-transparent',
    left: 'bg-gradient-radial from-emerald-50/25 at-left via-teal-50/10 to-transparent',
    right: 'bg-gradient-radial from-emerald-50/25 at-right via-teal-50/10 to-transparent'
  };
  
  return (
    <div className={`bg-radial-gradient from-emerald-50/20 via-teal-50/10 to-transparent ${className}`}>
      {children}
    </div>
  );
}

// Mesh Gradient für moderne Hintergründe
export function MeshGradient({ children, className = '' }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-teal-50/20 to-cyan-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-emerald-100/20 via-transparent to-teal-100/15"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-50/10 to-teal-50/20"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}