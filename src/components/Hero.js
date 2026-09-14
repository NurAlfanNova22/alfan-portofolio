'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

export const Hero = ({ data }) => {
  const { personal } = data;

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-left">
          {personal.availableForHire && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Custom Projects & Consulting</span>
            </motion.div>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight"
          >
            Build Websites With <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">NoiseCode</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-400"
          >
            {personal.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-xl transition-all shadow-md shadow-indigo-600/25"
            >
              <Icon name="code" size={18} />
              Get Started
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/60 rounded-xl transition-all shadow-sm"
            >
              Enterprises
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-6 flex items-center gap-4 border-t border-slate-200 dark:border-slate-800/80"
          >
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sosial Media:</span>
            <div className="flex items-center gap-3">
              {personal.socials.github && (
                <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm" aria-label="GitHub">
                  <Icon name="github" size={18} />
                </a>
              )}
              {personal.socials.linkedin && (
                <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm" aria-label="LinkedIn">
                  <Icon name="linkedin" size={18} />
                </a>
              )}
              {personal.socials.instagram && (
                <a href={personal.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all shadow-sm" aria-label="Instagram">
                  <Icon name="instagram" size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Visual Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/80 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-xs text-slate-400">portfolio-next.config.js</span>
            </div>
            <pre className="p-5 font-mono text-xs text-sky-300 leading-relaxed overflow-x-auto">
              <code>
                {`export const developer = {
  name: "${personal.name}",
  framework: "Next.js 16 (App Router)",
  styling: "Tailwind CSS",
  services: ["Custom Web Apps", "Source Code", "Consulting"],
  SEO_Optimized: true,
  status: "Ready for enterprise solutions"
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
