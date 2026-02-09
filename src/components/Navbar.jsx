import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'
        }`}
    >
      <div className={`container mx-auto px-6 transition-all duration-500`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass-dark py-3 px-8 rounded-2xl border-white/10' : ''
          }`}>
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black tracking-tighter"
          >
            ADARSH SRIVASTAVA<span className="text-brand-primary">.</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}

            <div className="flex items-center space-x-4 ml-6 border-l border-white/10 pl-6">
              <motion.a
                whileHover={{ y: -2, color: '#6366f1' }}
                href="https://github.com/atechamgithub"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, color: '#6366f1' }}
                href="https://www.linkedin.com/in/beuniqueadarsh/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-colors hover:text-brand-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass-dark rounded-3xl overflow-hidden shadow-2xl border-white/10"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-6 border-t border-white/10 text-gray-400">
                <Github size={24} className="hover:text-white cursor-pointer" />
                <Linkedin size={24} className="hover:text-white cursor-pointer" />
                <Twitter size={24} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;