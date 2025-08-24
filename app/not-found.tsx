import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/70 via-teal-50/50 to-cyan-50/60 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
            {/* Tree with protection system illustration */}
            <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-lg">
              <defs>
                <linearGradient id="trunkGradient404" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B4513" />
                  <stop offset="100%" stopColor="#654321" />
                </linearGradient>
                <linearGradient id="leavesGradient404" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#228B22" />
                  <stop offset="100%" stopColor="#006400" />
                </linearGradient>
                <linearGradient id="protectionGradient404" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8f9fa" />
                  <stop offset="100%" stopColor="#e9ecef" />
                </linearGradient>
              </defs>
              
              {/* Ground */}
              <ellipse cx="160" cy="280" rx="60" ry="12" fill="#8B7355" opacity="0.3" />
              
              {/* Tree Leaves */}
              <circle cx="160" cy="140" r="40" fill="url(#leavesGradient404)" opacity="0.9" />
              <circle cx="140" cy="135" r="28" fill="url(#leavesGradient404)" opacity="0.7" />
              <circle cx="180" cy="145" r="25" fill="url(#leavesGradient404)" opacity="0.7" />
              
              {/* Tree Trunk */}
              <rect x="150" y="180" width="20" height="100" rx="10" fill="url(#trunkGradient404)" />
              
              {/* Protection System */}
              <rect x="138" y="210" width="44" height="50" fill="url(#protectionGradient404)" stroke="#dee2e6" strokeWidth="2" opacity="0.9" />
              <line x1="160" y1="210" x2="160" y2="260" stroke="#adb5bd" strokeWidth="1.5" opacity="0.8" strokeDasharray="2 2" />
              
              {/* 404 Text integrated */}
              <text x="160" y="200" textAnchor="middle" fill="#39F2AE" fontSize="24" fontWeight="bold" className="font-mono">404</text>
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2b3138] leading-tight">
              Seite nicht gefunden
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
              Die gesuchte Seite konnte leider nicht gefunden werden. 
              Aber keine Sorge – unser Baumschutzsystem ist immer da!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link 
              href="/" 
              className="bg-[#39F2AE] text-[#2b3138] px-8 py-4 rounded-xl font-medium hover:bg-[#2dd89a] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <i className="ri-home-line text-lg group-hover:scale-110 transition-transform duration-200"></i>
              Zur Startseite
            </Link>
            
            <Link 
              href="/system" 
              className="border border-[#39F2AE] text-[#39F2AE] px-8 py-4 rounded-xl font-medium hover:bg-[#39F2AE]/10 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <i className="ri-shield-check-line text-lg group-hover:scale-110 transition-transform duration-200"></i>
              Unser System
            </Link>
          </div>

          {/* Additional Help */}
          <div className="pt-8 border-t border-gray-200 mt-12">
            <p className="text-gray-500 text-sm mb-4">Suchen Sie etwas Bestimmtes?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/kontakt" className="text-[#39F2AE] hover:underline flex items-center gap-1">
                <i className="ri-mail-line"></i>
                Kontakt
              </Link>
              <Link href="/ueber-uns" className="text-[#39F2AE] hover:underline flex items-center gap-1">
                <i className="ri-team-line"></i>
                Über uns
              </Link>
              <Link href="/impressum" className="text-[#39F2AE] hover:underline flex items-center gap-1">
                <i className="ri-information-line"></i>
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}