'use client';

import React from 'react';

export const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-24 bg-slate-100/60 dark:bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">Keahlian & Kemampuan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Teknologi Utama</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-sm dark:shadow-none">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                      <span className="text-indigo-600 dark:text-sky-400 font-mono">{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

