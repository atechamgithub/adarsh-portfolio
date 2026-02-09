import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, ChevronRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">

                    {/* Main Content */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] md:text-xs font-bold tracking-widest uppercase"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            <span>Innovating Software Experiences</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl sm:text-6xl md:text-8xl font-display font-black leading-[1] md:leading-[0.9] tracking-tighter"
                            >
                                DEVELOPING<br />
                                <span className="text-gradient">FUTURE-READY</span> <br />
                                SOFTWARE SOLUTIONS.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-base md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                I am a full-stack software developer focused on building high-performance, scalable web applications with an emphasis on usability, performance, and maintainable code, leveraging modern  technologies.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative group px-8 md:px-10 py-4 md:py-5 bg-brand-primary rounded-2xl font-black text-[12px] md:text-sm tracking-widest uppercase flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Launch Project <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 md:px-10 py-4 md:py-5 glass rounded-2xl font-black text-[12px] md:text-sm tracking-widest uppercase flex items-center gap-3 border-white/10 hover:border-white/20 transition-all"
                            >
                                LET'S WORK TOGETHER <Play size={16} fill="currentColor" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Interactive Visual */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            style={{
                                rotateX: mousePos.y,
                                rotateY: mousePos.x,
                                transformStyle: 'preserve-3d'
                            }}
                            initial={{ opacity: 0, x: 100, rotate: 5 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="relative w-full aspect-[4/5] glass-dark rounded-[3rem] p-1 border-white/10 shadow-2xl"
                        >
                            <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden bg-[#0A0F1E]">
                                {/* Code UI Mockup */}
                                <div className="p-10 font-mono text-sm space-y-4">
                                    <div className="flex gap-2 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-brand-accent/50" />
                                        <div className="w-3 h-3 rounded-full bg-brand-secondary/50" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                    </div>

                                    <div className="space-y-2 opacity-80">
                                        <div className="text-brand-secondary">class <span className="text-brand-primary">Innovator</span> {"{"}</div>
                                        <div className="pl-6 text-slate-500">constructor() {"{"}</div>
                                        <div className="pl-12 text-blue-400">this.problemSolvingSkills = <span className="text-emerald-400">'Advanced'</span>;</div>
                                        <div className="pl-12 text-blue-400">this.learningApproach = <span className="text-emerald-400">'Continuous '</span>;</div>
                                        <div className="pl-6 text-slate-500">{"}"}</div>

                                        <div className="pl-6 text-brand-secondary mt-8">async buildApplication() {"{"}</div>
                                        <div className="pl-12 text-slate-500">await <span className="text-brand-primary">Code</span>.optimize();</div>
                                        <div className="pl-12 text-slate-500">return <span className="text-pink-400">Deployment</span>.productionReady ();</div>
                                        <div className="pl-6 text-brand-secondary">{"}"}</div>
                                        <div className="text-brand-secondary">{"}"}</div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10 aspect-video rounded-2xl glass-dark border-white/5 p-6 overflow-hidden">
                                        <div className="w-full h-full space-y-3">
                                            <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                                            <div className="w-full h-2 bg-white/10 rounded-full" />
                                            <div className="w-1/2 h-2 bg-brand-primary/40 rounded-full" />
                                            <div className="pt-4 flex justify-between items-center">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary animate-spin-slow" />
                                                <div className="text-[10px] font-bold text-brand-primary tracking-widest uppercase">System Active</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-24 h-24 glass rounded-3xl flex items-center justify-center text-4xl shadow-2xl border-white/10 pointer-events-none"
                            >
                                🚀
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-10 w-32 h-32 glass-dark rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl border-white/10 pointer-events-none"
                            >
                                ⚡
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hero Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none opacity-20">
                <svg className="w-full h-full text-brand-primary/10" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 group cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore</span>
                <ArrowDownCircle size={20} className="group-hover:text-brand-primary transition-colors" />
            </motion.div>
        </section>
    );
};

export default Hero;
