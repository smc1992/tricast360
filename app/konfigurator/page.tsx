'use client';


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductConfigurator from '@/components/ProductConfigurator';

export default function KonfiguratorPage() {
  return (
    <div className="min-h-screen bg-white text-[#2b3138]">
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2b3138] mb-4">
              TriCast360 <span className="text-[#baf742]">Konfigurator</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stellen Sie Ihr individuelles Baumschutzsystem zusammen und erhalten Sie sofort ein Angebot.
            </p>
          </div>
          <ProductConfigurator />
        </div>
      </main>
      <Footer />
    </div>
  );
}