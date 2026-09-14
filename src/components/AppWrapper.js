'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { CursorGlow } from './CursorGlow';

export const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : true;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Wrap in requestAnimationFrame to avoid synchronous setState inside effect warning
    requestAnimationFrame(() => {
      setDarkMode(isDark);
      setMounted(true);
    });
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    // Avoid rendering mismatch between SSR and Client Hydration
    return (
      <div className="dark">
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <CursorGlow />
          <Navbar darkMode={true} toggleDarkMode={() => {}} />
          <main>
            <Hero data={portfolioData} />
            <Projects projects={portfolioData.projects} />
            <Experience
              experiences={portfolioData.experiences}
              education={portfolioData.education}
            />
            <Contact personal={portfolioData.personal} />
          </main>
          <Footer personal={portfolioData.personal} />
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <CursorGlow />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero data={portfolioData} />
          <Projects projects={portfolioData.projects} />
          <Experience
            experiences={portfolioData.experiences}
            education={portfolioData.education}
          />
          <Contact personal={portfolioData.personal} />
        </main>
        <Footer personal={portfolioData.personal} />
      </div>
    </div>
  );
};

