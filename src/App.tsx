/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { IndustriesSection } from './components/IndustriesSection';
import { ApproachSection } from './components/ApproachSection';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import type { ShowcaseProject } from './data/portfolio';

export default function App() {
  const [inspectedProject, setInspectedProject] = useState<ShowcaseProject | null>(null);
  const [briefModalOpen, setBriefModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const handleOpenBrief = (industry = '') => {
    setSelectedIndustry(industry);
    setBriefModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#05060b] text-slate-100">
      <Navbar onStartProject={() => handleOpenBrief()} />

      <main>
        <Hero onStartProject={() => handleOpenBrief()} />
        <SelectedWork onInspectProject={setInspectedProject} />
        <IndustriesSection onSelectIndustry={(industry) => handleOpenBrief(industry)} />
        <ApproachSection />
        <ConversionSection onStartProject={() => handleOpenBrief()} />
      </main>

      <Footer />

      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
        onRequestSimilar={(category) => handleOpenBrief(category)}
      />

      <ProjectBriefModal
        isOpen={briefModalOpen}
        initialIndustry={selectedIndustry}
        onClose={() => setBriefModalOpen(false)}
      />
    </div>
  );
}
