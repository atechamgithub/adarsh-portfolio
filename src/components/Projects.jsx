import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Auuthentication System',
        category: 'Security',
        description: 'A full-stack web application that provides a secure and seamless authentication experience for modern web and mobile platforms',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        image: 'src/assets/Screenshot 2025-07-16 101331.png',
        color: 'from-violet-600 to-purple-600',
    },
    {
        title: 'MovieApp',
        category: 'Entertainment',
        description: 'A full-stack web application for exploring IMDb Top 250 movies, featuring a robust backend with lazy processing and a modern React-based frontend.',
        tags: ['Node.js', 'Express', 'React', 'MongoDB' ,'JWT',],
        image: 'src/assets/Screenshot 2026-01-22 231357.png',
        color: 'from-blue-600 to-indigo-600',
    },
    {
        title: 'LuxeStore ',
        category: 'E-Commerce',
        description: 'A modern e-commerce web application built with React, Vite, TailwindCSS, and Features user authentication, shopping cart management, and a clean, responsive interface.',
        tags: ['React', 'Vite', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB','Axios','Framer Motion','Lucide React'],
        image: 'src/assets/Screenshot 2026-02-08 123216.png',
        color: 'from-emerald-600 to-cyan-600',
    },
    
    {
        title: 'SmartJob Portal',
        category: 'Job Portal',
        description: 'A full-stack job portal application that connects job seekers with recruiters. Built with React, Node.js, Express, and MySQL.',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT','Bcrypt', 'Axios'],
        image: 'src/assets/Screenshot 2026-02-08 123440.png',
        color: 'from-rose-600 to-pink-600',
    },
    {
        title: 'BookStore',
        category: 'Store Management',
        description: 'This is a REST API for the BookLeaf simplified author royalty system, built with Node.js and Express.',
        tags: ['Node.js', 'Express'],
        image: 'src/assets/book-store.jpg',
        color: 'from-amber-500 to-orange-600',
    },
    {
        title: 'BeCare',
        category: 'MedTech',
        description: 'A comprehensive healthcare platform for managing patient records, appointments, and medical history.',
        tags: ['React.js', 'Tailwind css'],
        image: 'src/assets/Screenshot 2025-08-26 204815.png',
        color: 'from-indigo-600 to-blue-600',
    },
];

const Projects = () => {
    const [showAll, setShowAll] = React.useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="py-32 bg-slate-950/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-3xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full glass border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-black tracking-widest uppercase inline-block"
                        >
                            My Work
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-[0.9]"
                        >
                            SELECTED <br /><span className="text-gradient">DEVELOPMENT.</span>
                        </motion.h2>
                    </div>
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-4 text-sm font-black tracking-[0.2em] uppercase hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
                    >
                        {showAll ? 'Show Less' : 'Explore All'}
                        <ArrowRight size={20} className={`transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-2'}`} />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                className={`group relative rounded-[3rem] overflow-hidden glass-dark border-white/5 h-[500px] md:h-[600px]`}
                            >
                                {/* Background Transform */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity group-hover:opacity-60" />
                                </div>

                                {/* Top Controls */}
                                <div className="absolute top-8 md:top-10 left-8 md:left-10 right-8 md:right-10 flex justify-between items-start z-10">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-primary/80">{project.category}</p>
                                        <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-white">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <motion.a
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            href="https://github.com/atechamgithub"
                                            className="p-3 md:p-4 glass rounded-full text-white border-white/10 hover:border-brand-primary transition-colors"
                                        >
                                            <Github size={18} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.1, rotate: -5 }}
                                            href="https://github.com/atechamgithub"
                                            className="p-3 md:p-4 glass rounded-full text-white border-white/10 hover:border-brand-primary transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Bottom Content (Slide Up) */}
                                <div className="absolute inset-x-8 md:inset-x-10 bottom-8 md:bottom-10 z-10">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 glass-dark rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed mb-6 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 md:line-clamp-none">
                                            {project.description}
                                        </p>
                                    </div>
                                    <button className="w-full py-4 md:py-5 glass border-white/10 rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all">
                                        View Details
                                    </button>
                                </div>

                                {/* Color accent glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-1000`} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
