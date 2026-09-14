'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact = ({ personal }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        form.subject || `Pesan Portofolio dari ${form.name}`
      )}&body=${encodeURIComponent(
        `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">Mari Terhubung</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Hubungi Saya</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Mari Berdiskusi Proyek!</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Punya ide proyek atau pertanyaan seputar pembuatan aplikasi Next.js? Hubungi saya kapan saja.
            </p>

            <a href={`mailto:${personal.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-slate-700 shadow-sm dark:shadow-none">
              <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30"><Mail size={20} /></div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-500 block">Email</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personal.email}</span>
              </div>
            </a>

            <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-slate-700 shadow-sm dark:shadow-none">
              <div className="p-3 rounded-xl bg-sky-500/10 dark:bg-sky-600/20 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-500/30"><Phone size={20} /></div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-500 block">Telepon / WA</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personal.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
              <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"><MapPin size={20} /></div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-500 block">Lokasi</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personal.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 backdrop-blur-md shadow-sm dark:shadow-none">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2"><CheckCircle2 size={48} /></div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Pesan Terkirim!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Terima kasih telah menghubungi. Saya akan membalas secepatnya.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Nama</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Nama Anda" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Email Anda" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Subjek</label>
                  <input type="text" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} placeholder="Subjek" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Pesan</label>
                  <textarea rows="4" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Pesan..." required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer">
                  <Send size={18} /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
