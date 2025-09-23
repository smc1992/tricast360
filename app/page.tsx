
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import BenefitsWithGraphic from '../components/BenefitsWithGraphic';
import EnvironmentalImpactSection from '../components/EnvironmentalImpactSection';
import BrandingSection from '../components/BrandingSection';
import Vision2025Section from '../components/Vision2025Section';
import OpportunitySection from '../components/OpportunitySection';
import CTAFooter from '../components/CTAFooter';
import AnimatedCard from '../components/AnimatedCard';
import SwipeNavigation, { useSectionNavigation } from '../components/SwipeNavigation';
import SectionNavigation, { MobileSectionNavigation } from '../components/SectionNavigation';
import NoSSR from '../components/NoSSR';

export default function Home() {
  const { nextSection, prevSection } = useSectionNavigation();

  return (
    <NoSSR>
      <SwipeNavigation 
        onSwipeLeft={nextSection}
        onSwipeRight={prevSection}
        className="min-h-screen bg-white text-[#2b3138]"
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
              <BenefitsWithGraphic />
            </section>
          </AnimatedCard>
          
          <AnimatedCard delay={200} direction="left">
            <section id="environmental">
              <EnvironmentalImpactSection />
            </section>
          </AnimatedCard>
          
          <AnimatedCard delay={250} direction="up">
            <section id="branding">
              <BrandingSection />
            </section>
          </AnimatedCard>
          
          <AnimatedCard delay={150} direction="left">
            <section id="vision-2025">
              <Vision2025Section />
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
         
         {/* Section Navigation */}
         <SectionNavigation className="hidden lg:block" />
         <MobileSectionNavigation />
       </SwipeNavigation>
    </NoSSR>
  );
}
