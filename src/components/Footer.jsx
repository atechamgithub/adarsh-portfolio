import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 relative overflow-hidden bg-slate-950/60 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
                    <div className="max-w-md space-y-6">
                        <a href="#home" className="text-3xl font-black font-display tracking-tighter">
                            ADARSH SRIVASTAVA<span className="text-brand-primary">.</span>
                        </a>
                        <p className="text-slate-400 text-lg leading-relaxed">
                         Developing future-ready software applications, with a focus on clean architecture, precision engineering, and scalable implementation.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/atechamgithub" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-xl">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/beuniqueadarsh/" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-secondary hover:text-white transition-all shadow-xl">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/052Adarsh64584" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all shadow-xl">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Navigation</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400">
                                <li><a href="#about" className="hover:text-brand-primary transition-colors">About</a></li>
                                <li><a href="#skills" className="hover:text-brand-primary transition-colors">Skills</a></li>
                                <li><a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a></li>
                                <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Resources</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400">
                                <li><a href="#" className="flex items-center gap-2 hover:text-brand-primary transition-colors">Resume <ExternalLink size={12} /></a></li>
                                <li><a href="https://github.com/atechamgithub" className="flex items-center gap-2 hover:text-brand-primary transition-colors">Source Code <ExternalLink size={12} /></a></li>
                                <li><a href="https://www.linkedin.com/in/beuniqueadarsh/" className="flex items-center gap-2 hover:text-brand-primary transition-colors">LinkedIn <ExternalLink size={12} /></a></li>
                            </ul>
                        </div>
                        <div className="space-y-6 hidden md:block">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Legal</h4>
                            <ul className="space-y-4 text-sm font-bold text-slate-400">
                                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-brand-primary transition-colors">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                        © {new Date().getFullYear()} ADARSH. DEVELOP TO INSPIRE.
                    </p>

                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                        <span>Built with</span>
                        <Heart size={14} className="text-brand-accent fill-brand-accent animate-pulse" />
                        <span>by a Visionary</span>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand-primary transition-colors"
                    >
                        Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Footer accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />
        </footer>
    );
};

export default Footer;


