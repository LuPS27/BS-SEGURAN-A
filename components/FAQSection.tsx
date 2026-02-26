import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { q: "Quais empresas precisam de PGR e PCMSO?", a: "Praticamente todas as empresas que possuem funcionários contratados via CLT precisam desses documentos. A dispensa ocorre apenas em casos muito específicos para MEI e ME/EPP com grau de risco 1 e 2 sem riscos físicos, químicos ou biológicos." },
    { q: "O que acontece se eu não enviar o eSocial?", a: "Sua empresa estará sujeita a multas automáticas que podem variar de R$ 400,00 a milhares de reais por funcionário, dependendo da infração e do porte da empresa." },
    { q: "Vocês atendem em quais cidades?", a: "Nossa sede é em Pará de Minas, mas atendemos empresas em toda a região e oferecemos consultoria remota para envio de eSocial em todo o Brasil." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-800 uppercase">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-bs-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="pb-5 px-2 text-gray-600">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
