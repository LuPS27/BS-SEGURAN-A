import React from 'react';

const ServicesSection = () => {
  const services = [
    { icon: "📝", text: "Elaboração de PGR, PCMSO e LTCAT" },
    { icon: "🖥️", text: "Envio dos eventos de SST ao eSocial" },
    { icon: "👷", text: "Treinamentos de NRs (NR-35, NR-10, NR-05 CIPA, etc.)" },
    { icon: "🔍", text: "Perícias Técnicas e Assistência em Processos" },
    { icon: "🔥", text: "Projetos de Combate a Incêndio (AVCB)" },
    { icon: "🏥", text: "Exames Ocupacionais (Admissional, Demissional, Periódico)" }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-bs-green uppercase">Nossos Serviços</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Soluções completas para adequar sua empresa às Normas Regulamentadoras.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start p-6 bg-slate-50 rounded-lg border-2 border-transparent hover:border-bs-green hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mr-4">{service.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{service.text}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
            <img src="https://iili.io/qKL1OIR.jpg" alt="Montagem de serviços" className="rounded-lg shadow-lg w-full object-cover h-64" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
