'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web App', 'Dashboard', 'Landing Page', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-sky-400">Karya & Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">Proyek Terbaru</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 mx-auto rounded-full mt-3" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700/60 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col backdrop-blur-md hover:border-indigo-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg dark:shadow-xl cursor-pointer"
              >
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-sky-300 border border-slate-200/60 dark:border-transparent">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg border border-slate-300/60 dark:border-slate-700/60 transition-all"
                  >
                    <Icon name="github" size={14} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-xs"
                  >
                    <Icon name="externalLink" size={14} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

