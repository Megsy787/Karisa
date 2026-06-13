'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, GraduationCap, Phone } from 'lucide-react';

const About = () => {
  const details = [
    { icon: <User size={20} />, label: 'Name', value: 'Magarete Njira Karisa' },
    { icon: <Mail size={20} />, label: 'Email', value: 'njiramargaret01@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+254 708 784 001' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Nairobi, Kenya' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'B.Com (Finance), Co-op Univ.' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/maggie.jpeg" 
                alt="About Magarete" 
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative dot grid or similar could go here */}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Professional Summary</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              A results-oriented and commercially astute finance professional with a strong record of collaboration, analytical problem-solving, and dedicated teamwork in fast-paced business environments. Acknowledged for consistently exceeding performance targets and for introducing process improvements that streamline operations, enhance customer satisfaction, and contribute to measurable growth in profitability.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Combines creative problem-solving with a disciplined, detail-focused approach, ensuring innovative solutions and reliable execution. Passionate about driving organizational progress by improving team efficiency, elevating service standards, and fostering a culture of collaboration to enable both individual achievement and collective success.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {details.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/Magarete_Karisa_CV_Final.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
