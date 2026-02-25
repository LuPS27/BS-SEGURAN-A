import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './BS-SEGURAN-A/components/Header';
import HeroSection from './BS-SEGURAN-A/components/HeroSection';
import PainPointsSection from './BS-SEGURAN-A/components/PainPointsSection';
import SolutionSection from './BS-SEGURAN-A/components/SolutionSection';
import BenefitsSection from './BS-SEGURAN-A/components/BenefitsSection';
import ServicesSection from './BS-SEGURAN-A/components/ServicesSection';
import BlogSection from './BS-SEGURAN-A/components/BlogSection';
import UrgencySection from './BS-SEGURAN-A/components/UrgencySection';
import FinalCTASection from './BS-SEGURAN-A/components/FinalCTASection';
import FAQSection from './BS-SEGURAN-A/components/FAQSection';
import ContactSection from './BS-SEGURAN-A/components/ContactSection';
import Footer from './BS-SEGURAN-A/components/Footer';
import WhatsAppButton from './BS-SEGURAN-A/components/WhatsAppButton';
import BlogPost from './BS-SEGURAN-A/pages/BlogPost';

function Home() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <BenefitsSection />
      <ServicesSection />
      <BlogSection />
      <UrgencySection />
      <FinalCTASection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-slate-100 text-gray-800 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
