'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Link as LinkIcon, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Let&apos;s talk about your next project</h3>
            <p className="text-slate-600 mb-10 leading-relaxed max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m always open to discussing new opportunities.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-blue-600" />, text: 'njiramargaret01@gmail.com', label: 'Email Me' },
                { icon: <Phone className="text-blue-600" />, text: '+254 (708)-784-001', label: 'Call Me' },
                { icon: <MapPin className="text-blue-600" />, text: 'Nairobi, Kenya', label: 'Visit Me' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-slate-900">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.linkedin.com/in/margaret-njira-a17312327" 
                className="p-3 bg-slate-900 text-white rounded-xl hover:bg-blue-600 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkIcon size={20} />
              </a>
              <a 
                href="https://wa.me/qr/DUXY422MY6SED1" 
                className="p-3 bg-slate-900 text-white rounded-xl hover:bg-green-600 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100"
          >
            <form action="https://formsubmit.co/njiramargaret01@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 group">
                Send Message
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
