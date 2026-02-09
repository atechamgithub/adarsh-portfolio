import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Database, Globe, Cpu } from 'lucide-react';

const skills = [
    { name: 'Frontend Tech', icon: <Globe size={28} />, skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Material UI'], color: 'from-blue-500 to-indigo-500' },
    { name: 'Backend Systems', icon: <Database size={28} />, skills: ['Node.js','Java', 'Python', 'Express.js','MySQL', 'PostgreSQL'], color: 'from-emerald-500 to-cyan-500' },
    { name: 'Architecture', icon: <Cpu size={28} />, skills: ['MongoDB', 'Docker'], color: 'from-violet-500 to-purple-500' },
    { name: 'Design & UX', icon: <Palette size={28} />, skills: ['Figma', 'UI Design', 'Interaction'], color: 'from-rose-500 to-pink-500' },
    { name: 'Development', icon: <Terminal size={28} />, skills: ['JavaScript', 'TypeScript', 'Git',  'Testing'], color: 'from-amber-500 to-orange-500' },
    { name: 'Developer Tools', icon: <Code2 size={28} />, skills: [ 'VS Code', 'Intellij Idea', 'GitHub'], color: 'from-indigo-600 to-blue-600' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full glass border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-black tracking-widest uppercase inline-block"
                        >
                            My Techstack
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-display font-black tracking-tighter"
                        >
                            TECHNICAL <br /><span className="text-gradient">MASTERY.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg md:text-xl max-w-md"
                    >
                        Leveraging modern software technologies and frameworks to design scalable, reliable, and maintainable applications. .
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{
                                opacity: 0,
                                x: index % 3 === 0 ? -100 : (index % 3 === 2 ? 100 : 0),
                                y: index % 3 === 1 ? 100 : 0
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 rounded-[2.5rem] glass-dark border-white/5 hover:border-brand-primary/30 transition-all duration-500 h-full overflow-hidden"
                        >
                            {/* Background Glow */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white mb-8 shadow-2xl`}>
                                {skill.icon}
                            </div>

                            <h3 className="text-2xl font-display font-black mb-6 group-hover:text-brand-primary transition-colors">{skill.name}</h3>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {skill.skills.map(s => (
                                    <span key={s} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-slate-400 border border-white/5 group-hover:border-brand-primary/20 group-hover:text-slate-200 transition-all">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;