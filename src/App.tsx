/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AmbientSpotlight } from './components/AmbientSpotlight';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { SelectedWork } from './components/SelectedWork';
import { IndustriesSection } from './components/IndustriesSection';
import { MissionSection } from './components/MissionSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { QuoteGeneratorSection } from './components/QuoteGeneratorSection';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { PricingPlan } from './config/zenic';
import type { ShowcaseProject } from './data/portfolio';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function App() {
  const [inspectedProject, setInspectedProject] = useState<ShowcaseProject | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);

  const handleSelectPlan = (plan: PricingPlan) => {
    if (plan.id === 'enterprise') {
      scrollToSection('booking');
      return;
    }
    setPreselectedServiceId(plan.suggestedServiceId ?? 'web-design');
    scrollToSection('quotation');
  };

  const handleRequestQuoteForCategory = (_label: string) => {
    setPreselectedServiceId('web-design');
    scrollToSection('quotation');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#05060b] text-slate-100">
        <AmbientSpotlight />
        <Navbar />

        <main>
          <Hero />
          <EcosystemSection />
          <SelectedWork onInspectProject={setInspectedProject} />
          <IndustriesSection onSelectIndustry={handleRequestQuoteForCategory} />
          <MissionSection />
          <ProcessSection />
          <PricingSection onSelectPlan={handleSelectPlan} />
          <QuoteGeneratorSection preselectedServiceId={preselectedServiceId} />
          <BookingSection />
          <TestimonialsSection />
          <ConversionSection />
        </main>

        <Footer />

        <ProjectModal
          project={inspectedProject}
          onClose={() => setInspectedProject(null)}
          onRequestSimilar={handleRequestQuoteForCategory}
        />
      </div>
    </MotionConfig>
  );
}
