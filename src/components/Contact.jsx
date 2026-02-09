import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Globe, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.user_name,
                    from_email: formData.user_email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Adarsh', // Or whoever the recipient is
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
            setStatus('success');
            setFormData({ user_name: '', user_email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-slate-950/40">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 space-y-12" >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="px-4 py-1.5 rounded-full glass border-brand-primary/20 bg-brand-primary/5 text-brand-primary text-[10px] font-black tracking-widest uppercase inline-block" >
                                Inquiries
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.9]">
                                LET'S <br /><span className="text-gradient">CONNECT.</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                Whether you have a new product idea or a complex technical challenge, I’m open to collaborating and delivering a practical, production-ready solution..</p> </div>
                        <div className="space-y-8">
                            <motion.div whileHover={{ x: 10 }}
                                className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-16 h-16 rounded-[1.25rem] glass-dark flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xl">
                                    <Mail size={24} /> </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Electronic Mail</p>
                                    <p className="font-display font-black text-xl">srivastavadarsh176@gmail.com</p>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-16 h-16 rounded-[1.25rem] glass-dark flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-xl">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Direct Message</p>
                                    <p className="font-display font-black text-xl">LinkedIn/ Twitter</p>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 10 }}
                                className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-16 h-16 rounded-[1.25rem] glass-dark flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xl">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Global Presence</p>
                                    <p className="font-display font-black text-xl">Remote / Worldwide</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-7">
                        <form ref={formRef} onSubmit={handleSubmit}
                            className="glass-dark p-12 rounded-[3.5rem] border-white/5 space-y-8 relative overflow-hidden h-full flex flex-col justify-between" >
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">Full Identity</label>
                                        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required placeholder="e.g. abcdef higjklmn" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-700 font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">Contact Gateway</label>
                                        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required placeholder="e.g. abcdefg@mnopd.org" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-700 font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">Subject Matter</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Briefly, what's on your mind?" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-700 font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 pl-4">Project Brief</label>
                                    <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your vision and how I can help..." className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-700 resize-none font-medium" >
                                    </textarea>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }} disabled={status === 'loading'} className="w-full py-6 bg-brand-primary rounded-[1.5rem] font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4 hover:bg-brand-primary/90 transition-all shadow-[0_20px_40px_-5px_rgba(99,102,241,0.3)] group mt-8 disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'loading' ? (<>
                                    Processing...
                                    <Loader2 size={20} className="animate-spin" />
                                </>) : status === 'success' ? (<>
                                    Message Dispatched
                                    <CheckCircle2 size={20} />
                                </>) : status === 'error' ? (<>
                                    Dispatch Failed
                                    <AlertCircle size={20} />
                                </>) : (<>
                                    Dispatch Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>)}
                            </motion.button>
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        className="text-emerald-400 text-center text-xs font-bold uppercase tracking-widest mt-4" >
                                        Your message has been received successfully. </motion.p>)}
                                {status === 'error' && (
                                    <motion.p initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="text-rose-400 text-center text-xs font-bold uppercase tracking-widest mt-4">
                                        An error occurred. Please try again later. </motion.p>)}
                            </AnimatePresence>

                            {/* Decorative accent */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>);
};
export default Contact;