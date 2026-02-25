import React from 'react';

const PainPointsSection = () => {
  const points = [
    "Multas pesadas que destroem o caixa",
    "Risco de interdição total da obra ou empresa",
    "Processos trabalhistas milionários",
    "Burocracia sem fim com eSocial",
    "Medo constante da fiscalização bater na porta"
  ];

  return (
    <section className="text-white py-16 lg:py-24" style={{ background: 'linear-gradient(160deg, #374151, #1f2937)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-bs-silver uppercase">Se identificou com algum desses problemas?</h3>
            <p className="mt-4 text-bs-metal-gray">
              A falta de gestão em Segurança do Trabalho é uma bomba relógio. Não espere ela explodir.
            </p>
            <img src="https://iili.io/qKLTETF.jpg" alt="Gestor preocupado" className="mt-8 rounded-lg shadow-2xl" />
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, index) => (
              <div key={index} className="bg-gray-700/50 p-6 rounded-lg border border-bs-metal-gray/20 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-bs-red backdrop-blur-sm">
                <p className="text-bs-silver font-semibold italic">"{point}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
