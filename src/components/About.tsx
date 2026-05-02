'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const details = [
    { icon: <User size={20} />, label: 'Name', value: 'Magarete Njira' },
    { icon: <Mail size={20} />, label: 'Email', value: 'njiramargaret01@gmail.com' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Nairobi, Kenya' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'BS in Commerce (Finance)' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'Computer Science Degree' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Expertise in Development & Finance</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I am a detail-oriented professional with a unique blend of technical and financial expertise. My coding journey focuses on building robust backend systems with Python and Flask, ensuring data integrity and workflow automation.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With a background in Commerce and Finance, I bring a structured analytical approach to every project, whether I&apos;m reconciling complex accounts or optimizing a database schema.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {details.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-100 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-900 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/Megsy CV.pdf" className="btn-primary" download>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
