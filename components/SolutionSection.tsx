import React from 'react';

const SolutionSection = () => {
  return (
    <section id="sobre-nos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-bs-green uppercase">Quem Somos</h2>
            <p className="mt-6 text-lg text-gray-600">
              A <strong>BS Segurança do Trabalho</strong> não vende apenas papel. Entregamos tranquilidade. Somos especialistas em blindar empresas contra riscos trabalhistas e acidentes, com uma gestão técnica, ágil e descomplicada.
            </p>
            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-bs-green rounded-r-lg">
                <p className="text-gray-700 font-semibold">
                    "Nosso foco é garantir que você cumpra a lei gastando o mínimo necessário, mas com a máxima segurança jurídica e operacional."
                </p>
                <p className="mt-4 text-gray-600">
                     — Equipe BS
                </p>
            </div>
          </div>
          <div>
            <img src="https://iili.io/qKLB8fS.jpg" alt="Profissional da BS em campo" className="rounded-lg shadow-2xl object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
