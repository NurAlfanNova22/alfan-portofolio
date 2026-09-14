'use client';

import React from 'react';
import { Icon } from './Icons';

export const Experience = ({ experiences, education }) => {
  return (
    <section id="education" className="py-24 bg-slate-100/60 dark:bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">Rekam Jejak</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Pendidikan Formal</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-10">
          {/* Education */}
          <div className="space-y-6">

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 backdrop-blur-md relative shadow-sm dark:shadow-none">
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-sky-50 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-sky-200/50 dark:border-transparent mb-2">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-3">{edu.institution}</span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

