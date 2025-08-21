'use client';

interface NaturalBackgroundProps {
  variant?: 'leaves' | 'trees' | 'organic' | 'minimal';
  opacity?: number;
  className?: string;
}

export default function NaturalBackground({ 
  variant = 'leaves', 
  opacity = 0.1,
  className = ''
}: NaturalBackgroundProps) {
  const renderLeaves = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
      {/* Floating leaves in different positions */}
      <g opacity={opacity}>
        {/* Large leaf top-left */}
        <path 
          d="M150 120 Q180 80 220 120 Q180 160 150 120 Q120 100 150 120" 
          fill="url(#leafGradient1)"
          className="animate-pulse"
        />
        
        {/* Medium leaf top-right */}
        <path 
          d="M950 180 Q970 150 1000 180 Q970 210 950 180 Q930 165 950 180" 
          fill="url(#leafGradient2)"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Small leaves scattered */}
        <circle cx="300" cy="250" r="8" fill="url(#leafGradient1)" className="animate-pulse" style={{ animationDelay: '2s' }} />
        <circle cx="800" cy="350" r="6" fill="url(#leafGradient2)" className="animate-pulse" style={{ animationDelay: '3s' }} />
        <circle cx="500" cy="150" r="10" fill="url(#leafGradient1)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Organic branch-like shapes */}
        <path 
          d="M100 600 Q200 580 300 600 Q400 620 500 600" 
          stroke="url(#leafGradient1)" 
          strokeWidth="3" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
        
        <path 
          d="M700 650 Q800 630 900 650 Q1000 670 1100 650" 
          stroke="url(#leafGradient2)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2.5s' }}
        />
      </g>
      
      <defs>
        <linearGradient id="leafGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39F2AE" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#2dd89a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="leafGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#16a34a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#15803d" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
  
  const renderTrees = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
      <g opacity={opacity}>
        {/* Stylized tree silhouettes */}
        <g transform="translate(50, 500)">
          {/* Tree trunk */}
          <rect x="45" y="80" width="10" height="40" fill="url(#trunkGradient)" rx="5" />
          {/* Tree crown - organic shape */}
          <path 
            d="M20 80 Q30 40 50 60 Q70 30 80 60 Q90 40 100 80 Q80 100 50 90 Q20 100 20 80" 
            fill="url(#crownGradient)"
          />
        </g>
        
        <g transform="translate(1000, 450)">
          <rect x="35" y="90" width="8" height="35" fill="url(#trunkGradient)" rx="4" />
          <path 
            d="M15 90 Q25 55 40 70 Q55 45 65 70 Q75 55 85 90 Q70 105 40 100 Q15 105 15 90" 
            fill="url(#crownGradient)"
          />
        </g>
        
        {/* Abstract tree shapes */}
        <circle cx="200" cy="600" r="25" fill="url(#crownGradient)" opacity="0.6" />
        <rect x="195" y="620" width="10" height="20" fill="url(#trunkGradient)" rx="5" />
        
        <circle cx="900" cy="580" r="20" fill="url(#crownGradient)" opacity="0.5" />
        <rect x="896" y="595" width="8" height="15" fill="url(#trunkGradient)" rx="4" />
      </g>
      
      <defs>
        <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#654321" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39F2AE" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
  
  const renderOrganic = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
      <g opacity={opacity}>
        {/* Organic flowing shapes */}
        <path 
          d="M0 400 Q300 350 600 400 Q900 450 1200 400 L1200 800 L0 800 Z" 
          fill="url(#organicGradient1)"
        />
        
        <path 
          d="M0 0 Q200 50 400 0 Q600 -50 800 0 Q1000 50 1200 0 L1200 200 Q1000 150 800 200 Q600 250 400 200 Q200 150 0 200 Z" 
          fill="url(#organicGradient2)"
        />
        
        {/* Floating organic shapes */}
        <ellipse cx="300" cy="300" rx="40" ry="20" fill="url(#organicGradient1)" transform="rotate(45 300 300)" />
        <ellipse cx="800" cy="500" rx="30" ry="15" fill="url(#organicGradient2)" transform="rotate(-30 800 500)" />
        <ellipse cx="150" cy="600" rx="25" ry="12" fill="url(#organicGradient1)" transform="rotate(60 150 600)" />
      </g>
      
      <defs>
        <linearGradient id="organicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39F2AE" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="organicGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#15803d" stopOpacity="0.03" />
        </linearGradient>
      </defs>
    </svg>
  );
  
  const renderMinimal = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
      <g opacity={opacity}>
        {/* Minimal dots pattern */}
        <circle cx="100" cy="100" r="2" fill="#39F2AE" />
        <circle cx="300" cy="150" r="1.5" fill="#22c55e" />
        <circle cx="500" cy="80" r="2.5" fill="#16a34a" />
        <circle cx="700" cy="120" r="1" fill="#39F2AE" />
        <circle cx="900" cy="180" r="2" fill="#22c55e" />
        <circle cx="1100" cy="140" r="1.5" fill="#16a34a" />
        
        <circle cx="150" cy="600" r="1.5" fill="#39F2AE" />
        <circle cx="350" cy="650" r="2" fill="#22c55e" />
        <circle cx="550" cy="620" r="1" fill="#16a34a" />
        <circle cx="750" cy="680" r="2.5" fill="#39F2AE" />
        <circle cx="950" cy="640" r="1.5" fill="#22c55e" />
        <circle cx="1150" cy="700" r="2" fill="#16a34a" />
      </g>
    </svg>
  );
  
  const renderBackground = () => {
    switch (variant) {
      case 'leaves': return renderLeaves();
      case 'trees': return renderTrees();
      case 'organic': return renderOrganic();
      case 'minimal': return renderMinimal();
      default: return renderLeaves();
    }
  };
  
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderBackground()}
    </div>
  );
}

// Specialized components for different sections
export function HeroNaturalBackground() {
  return <NaturalBackground variant="organic" opacity={0.08} />;
}

export function SectionNaturalBackground({ variant = 'leaves' }: { variant?: 'leaves' | 'trees' | 'minimal' }) {
  return <NaturalBackground variant={variant} opacity={0.06} />;
}

export function FooterNaturalBackground() {
  return <NaturalBackground variant="trees" opacity={0.1} />;
}