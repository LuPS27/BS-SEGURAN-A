import React from 'react';

const UrgencySection = () => {
  return (
    <section className="bg-bs-red text-white py-16 lg:py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-black uppercase">Não espere a fiscalização bater na porta</h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-red-100">
          Regularize sua empresa hoje mesmo e evite dores de cabeça amanhã. O custo da prevenção é muito menor que o custo de uma multa.
        </p>
        <p className="mt-4 text-xl lg:text-2xl font-bold">
          Sua tranquilidade não tem preço.
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;
