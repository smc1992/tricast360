
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import EnvironmentalImpactSection from '../components/EnvironmentalImpactSection';
import OpportunitySection from '../components/OpportunitySection';
import CTAFooter from '../components/CTAFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#2b3138] font-inter">
      <Header />
      <main>
        <HeroSection />
        <section id="problem">
          <ProblemSolutionSection />
        </section>
        <section id="funktionsweise">
          <HowItWorksSection />
        </section>
        <section id="vorteile">
          <BenefitsSection />
        </section>
        <EnvironmentalImpactSection />
        <section id="markt">
          <OpportunitySection />
        </section>
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
}
