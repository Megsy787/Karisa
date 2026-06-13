'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Adaptive Learning Platform',
      description: 'A comprehensive E-Learning system that adjusts content based on student progress and performance.',
      category: 'fullstack',
      image: '/e-learning.png',
      tech: ['Flask', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      id: 2,
      title: 'AlgoVista Digital Agency',
      description: 'Modern, high-performance website for a digital agency, focusing on conversion and clean aesthetics.',
      category: 'frontend',
      image: '/algovista.png',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-center mb-10">
            A selection of projects that showcase my focus on performance, user experience, and robust backend logic.
          </p>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, index) => (
                      <span key={index} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-50 dark:bg-slate-950 text-slate-500 rounded-md border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="text-slate-600 dark:text-slate-300 group-hover:text-blue-600 transition-colors" />
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-8 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
