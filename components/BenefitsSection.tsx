import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    { title: "Empresa 100% Legalizada", desc: "Todos os laudos e programas (PGR, PCMSO, LTCAT) em dia e integrados ao eSocial.", img: "https://iili.io/qKLsewJ.jpg" },
    { title: "Redução de Custos", desc: "Evite adicionais de insalubridade indevidos e multas que podem quebrar seu negócio.", img: "https://iili.io/qKQRxNS.jpg" },
    { title: "Equipe Produtiva", desc: "Ambiente seguro reduz afastamentos e aumenta a motivação do time.", img: "https://iili.io/qKQd3DN.jpg" }
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(to bottom, #F3F4F6, #D1D5DB)' }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-gray-800 uppercase">Por que escolher a BS?</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <img src={benefit.img} alt={benefit.title} className="w-full h-56 object-cover" />
              <div className="p-8 text-left">
                <h3 className="text-xl font-bold text-bs-green">{benefit.title}</h3>
                <p className="mt-4 text-gray-600">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
