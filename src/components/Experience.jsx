import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';

const experiences = [
    // {
    //     type: 'work',
    //     role: 'Principal Engineer',
    //     company: 'TECHFLOW LABS',
    //     period: '2022 — PRESENT',
    //     description: 'Leading the architecture of high-availability cloud platforms and driving engineering excellence across cross-functional teams.',
    //     icon: <Briefcase size={20} />
    // },
    // {
    //     type: 'work',
    //     role: 'Senior Product Architect',
    //     company: 'CREATIVE NEXUS',
    //     period: '2020 — 2022',
    //     description: 'Spearheaded the design and development of award-winning digital products with a focus on immersive user experiences.',
    //     icon: <Briefcase size={20} />
    // },
    {
        type: 'education',
        role: 'B.Tech in Computer Science & Engineering',
        company: 'SHRI RAMSWAROOP MEMORIAL UNIVERSITY',
        period: '2021 — 2025',
        description: 'Specialized in software engineering, system design, and distributed systems, with a strong focus on usability and performance.',
        icon: <GraduationCap size={20} />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 md:mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full glass border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-black tracking-widest uppercase inline-block"
                    >
                        Professional Path
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-8xl font-display font-black tracking-tighter"
                    >
                        CAREER <br /><span className="text-gradient">EVOLUTION.</span>
                    </motion.h2>
                </div>

                <div className="max-w-6xl mx-auto relative px-4 lg:px-0">
                    {/* Central Line */}
                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent opacity-20" />

                    <div className="space-y-16 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className={`flex-1 w-full pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-dark p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/5 hover:border-brand-primary/20 transition-all group"
                                    >
                                        <div className={`flex items-center gap-4 mb-4 md:mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                            <span className="text-brand-primary font-black text-[10px] md:text-xs tracking-widest font-mono">{exp.period}</span>
                                            <ArrowUpRight className="text-slate-700 group-hover:text-brand-primary transition-colors" size={16} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-display font-black mb-1 md:mb-2">{exp.role}</h3>
                                        <p className="text-brand-secondary text-[11px] md:text-sm font-black tracking-widest uppercase mb-4 md:mb-6">{exp.company}</p>
                                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 lg:static lg:relative z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-[1rem] lg:rounded-[1.5rem] glass-dark border-brand-primary/50 flex items-center justify-center text-brand-primary shadow-[0_0_20px_rgba(99,102,241,0.2)] bg-[#020617] transform -translate-x-1/2 lg:translate-x-0">
                                    <div className="absolute inset-0 rounded-[1rem] lg:rounded-[1.5rem] bg-brand-primary/10 animate-pulse" />
                                    {exp.icon}
                                </div>

                                {/* Spacer for layout */}
                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

