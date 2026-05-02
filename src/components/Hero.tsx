'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6"
          >
            Available for new opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Building digital <br />
            <span className="text-gradient">experiences</span> with <br />
            precision.
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Hi, I&apos;m <span className="font-semibold text-slate-900">Magarete Njira</span>, a Fullstack Developer dedicated to crafting efficient backend systems and seamless user interfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn-primary group">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/Megsy CV.pdf" className="btn-secondary group" download>
              Download CV
              <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl -rotate-6 z-0" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="/maggie.jpeg" 
                alt="Magarete Njira" 
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority={true} 
              />
            </div>

            {/* Floating Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3+
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Years of</p>
                  <p className="text-lg font-bold text-slate-900">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
