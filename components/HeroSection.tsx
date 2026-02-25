import React from 'react';
import { SITE_CONFIG } from '../data/config';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-bs-metal-gray bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://iili.io/qKsme3l.jpg')" }}>
      <div className="container mx-auto px-6 py-24 lg:py-32 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          Segurança do Trabalho em Dia, <br className="hidden md:block" /> <span className="text-bs-silver">Empresa Protegida e Zero Dor de Cabeça</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-bs-silver">
          Você não precisa viver com medo de multa, fiscalização ou acidentes. A BS cuida de tudo para você focar no lucro.
        </p>
        <div className="mt-10">
          <a href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-bs-red text-bs-silver font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-bs-green focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> </svg>
            Quero Minha Empresa Segura Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
