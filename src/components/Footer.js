'use client';

import React from 'react';
import { Icon } from './Icons';

export const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 text-slate-600 dark:text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <a href="#hero" className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1">
              <span className="text-indigo-600 dark:text-indigo-500">&lt;</span>
              <span>NoiseCode</span>
              <span className="text-indigo-600 dark:text-indigo-500">/&gt;</span>
            </a>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">{personal.tagline}</p>
          </div>

          <div className="flex items-center gap-3">
            {personal.socials.github && (
              <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-xs" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
            )}
            {personal.socials.linkedin && (
              <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-xs" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
            )}
            {personal.socials.instagram && (
              <a href={personal.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-xs" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {currentYear} {personal.name} — {personal.fullName}. Built with Next.js & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer shadow-xs"
          >
            <span>Ke Atas</span>
            <Icon name="arrowUp" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};


