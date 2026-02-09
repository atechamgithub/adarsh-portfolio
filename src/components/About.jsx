
import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Zap, Heart, Award, Mic } from 'lucide-react';
import AdarshProfile from '../assets/Professional Photo.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 relative order-2 lg:order-1"
                    >
                        <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden glass-dark border-white/5 p-3 md:p-4">
                            <img
                                src={AdarshProfile}
                                alt="AdarshProfile"
                                className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                            />
                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-brand-primary/30 shadow-[0_20px_50px_rgba(99,102,241,0.3)] z-20"
                            >
                                <p className="text-4xl md:text-5xl font-black font-display tracking-tighter text-gradient">1+</p>
                                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Years Experience</p>
                            </motion.div>
                        </div>

                        {/* Decorative rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-2 text-center lg:text-left"
                    >
                        <div className="space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="px-4 py-1.5 rounded-full glass border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[8px] md:text-[10px] font-black tracking-widest uppercase inline-block"
                            >
                                ABOUT ME
                            </motion.div>
                            <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
                                DRIVEN BY <br /><span className="text-gradient">PURPOSE.</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                I am a full-stack software developer with a strong focus on system design, scalable architectures, and end-to-end application development.
                                I build robust backend services, well-structured APIs, and performant frontends that work together as cohesive systems.
                                Every component—from database schema to UI interaction—is designed with efficiency, maintainability, and scalability in mind.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 md:p-8 glass-dark rounded-[1.5rem] md:rounded-[2rem] border-white/5 group hover:border-brand-primary/20 transition-all"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Target size={24} />
                                </div>
                                <h4 className="text-lg md:text-xl font-display font-black mb-2 md:mb-3">BOLD VISION</h4>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Building robust, maintainable software solutions that enable the development of next-generation applications.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-6 md:p-8 glass-dark rounded-[1.5rem] md:rounded-[2rem] border-white/5 group hover:border-brand-secondary/20 transition-all"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform">
                                    <Zap size={24} />
                                </div>
                                <h4 className="text-lg md:text-xl font-display font-black mb-2 md:mb-3">HIGH IMPACT</h4>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Optimizing software for performance, accessibility compliance, and efficient user interactions across the entire application.</p>
                            </motion.div>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-brand-accent">
                                    <Award size={16} />
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Software Innovator</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center text-emerald-500">
                                    <Mic size={16} />
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Technology Evangelist</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
