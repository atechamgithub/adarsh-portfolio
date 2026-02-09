import React, { useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative bg-[#020617] min-h-screen selection:bg-brand-primary/30 selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[200] origin-left"
        style={{ scaleX }}
      />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <AnimatePresence mode="wait">
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </AnimatePresence>

      <Footer />

      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-secondary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow delay-700" />
        <div className="absolute top-[40%] left-[20%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-brand-accent/5 rounded-full blur-[60px] md:blur-[100px] animate-float" />
      </div>
    </div>
  );
}

export default App;
