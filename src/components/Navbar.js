'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from './Icons';

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyek', href: '#projects' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md py-3 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1">
          <span className="text-indigo-600 dark:text-indigo-500">&lt;</span>
          <span>NoiseCode</span>
          <span className="text-indigo-600 dark:text-indigo-500">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 dark:border-slate-700/60 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            <Icon name={darkMode ? 'sun' : 'moon'} size={18} />
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
          >
            Hubungi Saya
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-indigo-600 rounded-xl mt-2"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </header>
  );
};


