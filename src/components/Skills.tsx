'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Palette, Code2, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Programming',
      icon: <Code2 className="text-blue-600" size={24} />,
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'C'],
    },
    {
      title: 'Databases',
      icon: <Database className="text-purple-600" size={24} />,
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      title: 'Financial Software',
      icon: <Layout className="text-green-600" size={24} />,
      skills: ['Excel', 'QuickBooks', 'Zoho', 'Xero', 'Wave'],
    },
    {
      title: 'Core Competencies',
      icon: <Terminal className="text-slate-600" size={24} />,
      skills: ['Problem-Solving', 'Leadership', 'Adaptability', 'Communication'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 card-hover"
            >
              <div className="mb-6 inline-flex p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 bg-white text-slate-600 text-sm font-medium rounded-lg border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
