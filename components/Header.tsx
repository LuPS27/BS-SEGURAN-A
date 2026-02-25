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
      className={`bg-bs-green text-bs-silver sticky top-0 z-50 shadow-lg transition-all duration-300 ${isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''}`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-16 w-16 md:h-20 md:w-20 mr-3 rounded-full overflow-hidden flex items-center justify-center">
            <img src="https://iili.io/qKZ0vJn.png" alt="BS Segurança Logo" className="h-full w-full object-cover scale-125" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors duration-300 font-semibold cursor-pointer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="bg-bs-red text-bs-silver font-bold py-2 px-4 rounded-xl hover:brightness-110 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 cursor-pointer shadow-md hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Contato Rápido</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-bs-silver focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 bg-bs-green shadow-inner">
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
          <div className="pt-4 px-3">
            <a href={`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="bg-bs-red text-bs-silver font-bold py-2 px-4 rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-md w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contato Rápido</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
