'use client';

import React from 'react';

export const About = ({ data }) => {
  const { personal } = data;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">Mengenal Lebih Dekat</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Tentang Saya</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
                Halo! Saya berdedikasi membangun aplikasi web modern berkinerja tinggi.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm sm:text-base">
                {personal.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Dengan teknologi Next.js, setiap halaman dibangun dengan prinsip SEO teroptimasi, performa muat tinggi, serta pengalaman pengguna yang mulus.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center text-sm">
                <span className="font-semibold text-slate-500 w-24">Lokasi:</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{personal.location}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold text-slate-500 w-24">Email:</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{personal.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold text-slate-500 w-24">Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Tersedia untuk Kerja / Freelance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-sm dark:shadow-none">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

