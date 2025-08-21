
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
import AnimatedCard from '../components/AnimatedCard';
import SwipeNavigation, { useSectionNavigation } from '../components/SwipeNavigation';

export default function Home() {
  const { nextSection, prevSection } = useSectionNavigation();

  return (
    <SwipeNavigation 
      onSwipeLeft={nextSection}
      onSwipeRight={prevSection}
      className="min-h-screen bg-white text-[#2b3138] font-inter"
    >
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <AnimatedCard delay={100}>
          <section id="problem">
            <ProblemSolutionSection />
          </section>
        </AnimatedCard>
        
        <AnimatedCard delay={200} direction="left">
          <section id="funktionsweise">
            <HowItWorksSection />
          </section>
        </AnimatedCard>
        
        <AnimatedCard delay={300} direction="right">
          <section id="vorteile">
            <BenefitsSection />
          </section>
        </AnimatedCard>
        
        <AnimatedCard delay={100}>
          <section id="umwelt">
            <EnvironmentalImpactSection />
          </section>
        </AnimatedCard>
        
        <AnimatedCard delay={200} direction="up">
          <section id="markt">
            <OpportunitySection />
          </section>
        </AnimatedCard>
        
        <CTAFooter />
      </main>
      <Footer />
    </SwipeNavigation>
  );
}
