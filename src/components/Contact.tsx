'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Link as LinkIcon } from 'lucide-react';

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
                className="p-3 bg-slate-900 text-white rounded-xl hover:bg-[#25D366] transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={20} />
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
