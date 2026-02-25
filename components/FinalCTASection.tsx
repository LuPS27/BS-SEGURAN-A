import React from 'react';
import { SITE_CONFIG } from '../data/config';

const FinalCTASection = () => {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(26, 71, 42, 0.85), rgba(26, 71, 42, 0.85)), url('https://picsum.photos/seed/handshake/1920/1080')" }}>
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-black">
          Pronto para blindar sua empresa?
        </h2>
        <p className="mt-4 text-xl text-bs-silver">
          Fale com um especialista agora e solicite um diagnóstico gratuito.
        </p>
        <div className="mt-10">
          <a href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-bs-red text-bs-silver font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-bs-green focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> </svg>
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
