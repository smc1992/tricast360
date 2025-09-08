
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SystemOverview from './SystemOverview';
import ComponentDetails from './ComponentDetails';

export default function SystemPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Systemübersicht', icon: 'ri-layout-grid-line' },
    { id: 'components', label: 'Komponenten', icon: 'ri-settings-3-line' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="heading-1 mb-6">
              Das Tricast360
              <span className="block text-[#baf742]">System im Detail</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Modularer 360°-Baumschutz mit innovativer Klick-Technologie. 
              Schnell installiert, wiederverwendbar und normkonform.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-[#baf742] text-white'
                      : 'text-gray-600 hover:text-[#baf742] hover:bg-[#baf742]/10'
                  }`}
                >
                  <i className={`${tab.icon} text-lg`}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[600px]">
            {activeTab === 'overview' && <SystemOverview />}
            {activeTab === 'components' && <ComponentDetails />}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
