import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorkFormatSection } from './components/WorkFormatSection';
import { RevenueSection } from './components/RevenueSection';
import { BenefitsSection } from './components/BenefitsSection';
import { LeadFormSection } from './components/LeadFormSection';
import { ContactLaunchSection } from './components/ContactLaunchSection';
import { FaqSection } from './components/FaqSection';
import { StickyCtaBar } from './components/StickyCtaBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: Work Model & Criteria */}
        <WorkFormatSection />

        {/* Section 2: Revenue Sharing & Earnings Calculator */}
        <RevenueSection />

        {/* Section 3: Founding Agent Benefits */}
        <BenefitsSection />

        {/* Section 4: Lead Registration Form (Firebase Cloud Storage) */}
        <LeadFormSection />

        {/* Section 5: Launch Date & Contact Info */}
        <ContactLaunchSection />

        {/* Section 6: FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Bottom CTA Bar */}
      <StickyCtaBar />
    </div>
  );
}
