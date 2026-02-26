import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Sobre', href: '/#sobre-nos' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contato', href: '/#contato' },
  ];

  return (
    <header
      id="masthead"
      className={`bg-bs-green text-bs-silver sticky top-0 z-50 shadow-lg transition-all duration-300 w-full overflow-hidden ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center flex-shrink-0">
          <div className="h-12 w-12 md:h-20 md:w-20 mr-3 rounded-full overflow-hidden flex items-center justify-center">
            <img src="https://iili.io/qKZ0vJn.png" alt="BS Segurança Logo" className="h-full w-full object-cover scale-125" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-bs-silver hover:text-white font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
            className="bg-bs-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            📞 Contato Rápido
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-bs-silver focus:outline-none p-2"
          aria-label="Alternar menu de navegação"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bs-green border-t border-white/10 w-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-bs-silver hover:text-white hover:bg-gray-700/30 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-bs-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mt-2"
            >
              📞 Contato Rápido
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
