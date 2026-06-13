'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Finance Intern',
    company: 'International Fellowship Kenya, Kisumu',
    period: 'June 2024 - Sept 2024',
    description: 'Conducted rigorous financial reconciliations, managed data entry utilizing Microsoft Excel and QuickBooks, and handled full-cycle accounts payable/receivable. Prepared cash books, trial balances, and financial statements to ensure regulatory compliance.',
  },
  {
    title: 'Teacher',
    company: 'Mwangutwa Junior Secondary School, Mazeras',
    period: 'May 2023 - Aug 2023',
    description: 'Delivered engaging and interactive lessons across diverse subjects, including Mathematics, Business Studies, Visual Arts, and CRE. Administered examinations and supervised student projects.',
  },
  {
    title: 'Shop Attendant',
    company: 'Maryam Retail Shop, Bondo',
    period: 'May 2023 - Sept 2023',
    description: 'Driven daily sales operations and delivered exceptional customer service. Streamlined bookkeeping and financial reconciliation to maintain accurate daily ledgers. Managed procurement and purchasing.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 rounded-full" 
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              {/* Timeline Line */}
              <div className="hidden sm:block absolute left-[120px] top-0 bottom-0 w-px bg-slate-200 group-last:bg-gradient-to-b group-last:from-slate-200 group-last:to-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-[111px] top-8 w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10" />
              
              {/* Timeline Date (Desktop) */}
              <div className="hidden sm:block absolute left-0 top-8 w-[90px] text-right">
                <span className="text-sm font-bold text-blue-600">{exp.period}</span>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 card-hover ml-6 sm:ml-0 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Briefcase size={80} />
                </div>
                <div className="sm:hidden flex items-center gap-2 mb-3 text-blue-600 font-semibold text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                <p className="text-lg font-medium text-slate-600 mb-4">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
