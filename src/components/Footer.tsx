'use client';

import Link from 'next/link';
import { Link as LinkIcon, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="#home" className="text-2xl font-bold tracking-tight text-slate-900 mb-6 block">
              Magarete<span className="text-blue-600">.</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              A Fullstack Developer and Finance professional focused on building digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/margaret-njira-a17312327" 
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkIcon size={18} />
              </a>
              <a 
                href="https://wa.me/qr/DUXY422MY6SED1" 
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-500">
              <li>Nairobi, Kenya</li>
              <li>njiramargaret01@gmail.com</li>
              <li>+254 708 784 001</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Magarete Njira. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-slate-400 hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
