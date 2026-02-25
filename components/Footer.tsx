import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bs-green text-bs-metal-gray py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden flex items-center justify-center">
                <img src="https://iili.io/qKZ0vJn.png" alt="BS Segurança Logo" className="h-full w-full object-cover scale-125" />
              </div>
            </div>
            <p>Protegendo seu maior patrimônio: sua equipe e seu negócio.</p>
          </div>
          <div>
            <h4 className="font-bold text-bs-silver mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre-nos" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-bs-silver mb-4">Contato</h4>
            <p>Sede em Pará de Minas. Atendemos em todo o estado de Minas Gerais.</p>
            <p className="mt-2"><strong>Email:</strong> contato@bsseguranca.com.br</p>
            <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-bs-metal-gray/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BS Segurança do Trabalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
