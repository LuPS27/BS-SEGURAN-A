import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import UrgencySection from './components/UrgencySection';
import FinalCTASection from './components/FinalCTASection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BlogPost from './pages/BlogPost';

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
