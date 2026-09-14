'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Icon } from './Icons';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scroll lock removed to fix layout shift issue

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Icon name="x" size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
              {/* Left: Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Details */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
                    {project.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">Tentang Proyek</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {project.challenges && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">Tantangan</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                  )}

                  {project.solutions && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">Solusi</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {project.solutions}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">Teknologi</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-sky-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
                    >
                      <Icon name="github" size={18} />
                      <span>Source Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
                    >
                      <Icon name="externalLink" size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
