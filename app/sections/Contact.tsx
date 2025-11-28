"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";



const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // copy module-scope env vars to local consts so TypeScript can narrow their types
    const serviceId = SERVICE_ID;
    const templateId = TEMPLATE_ID;
    const publicKey = PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing:", { serviceId, templateId, publicKey });
      toast.error("Messaging service is not configured. Please contact the site admin.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.", {
          description: "Thank you for reaching out.",
        });
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again later.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen py-24 md:py-36 px-6 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Elegant Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-[200px]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.03),transparent_50%)]"></div>
      
      {/* Premium Noise Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              textShadow: '0 2px 30px rgba(251, 191, 36, 0.2)',
              letterSpacing: '0.08em'
            }}
          >
            Get In Touch
          </h2>
          
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>

          <p 
            className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
          >
            Have a project in mind, a question about my work, or just want to connect? Send a message through the network. I'm always open to discussing new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 
                className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100"
                style={{ 
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                  letterSpacing: '0.02em'
                }}
              >
                Let's talk →
              </h3>
              <p 
                className="text-slate-300 leading-relaxed font-light"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
              >
                Whether you're looking for a developer to bring your AI vision to life, need a creative
                technologist for your next project, or simply want to discuss the future of intelligent
                systems — I'm just a message away.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mylifeasasif@gmail.com"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-xl hover:border-amber-400/40 hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)] transition-all duration-300"
              >
                <div className="p-3 bg-amber-400/10 rounded-full border border-amber-400/30 group-hover:bg-amber-400/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div 
                    className="font-light text-amber-100 mb-1"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Email
                  </div>
                  <div 
                    className="text-sm text-slate-400 font-light"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    mylifeasasif@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/skupperr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-xl hover:border-amber-400/40 hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)] transition-all duration-300"
              >
                <div className="p-3 bg-amber-400/10 rounded-full border border-amber-400/30 group-hover:bg-amber-400/20 transition-all duration-300">
                  <Github className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div 
                    className="font-light text-amber-100 mb-1"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    GitHub
                  </div>
                  <div 
                    className="text-sm text-slate-400 font-light"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    @skupperr
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/asifuahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-xl hover:border-amber-400/40 hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)] transition-all duration-300"
              >
                <div className="p-3 bg-amber-400/10 rounded-full border border-amber-400/30 group-hover:bg-amber-400/20 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div 
                    className="font-light text-amber-100 mb-1"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    LinkedIn
                  </div>
                  <div 
                    className="text-sm text-slate-400 font-light"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Asif U. Ahmed
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Elegant Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border border-amber-400/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-400/30 transition-all duration-500">
              {/* Elegant Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-amber-400/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                </div>
                <span 
                  className="ml-4 text-sm text-amber-400 font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  contact_form
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    className="block text-sm font-light text-amber-400 mb-2 tracking-wide"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-amber-400/20 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400/10 transition-all font-light"
                    placeholder="Your Name"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-light text-amber-400 mb-2 tracking-wide"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-amber-400/20 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400/10 transition-all font-light"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-light text-amber-400 mb-2 tracking-wide"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-amber-400/20 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400/10 transition-all resize-none font-light"
                    placeholder="Your message..."
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  />
                </div>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 rounded-lg font-light text-amber-100 hover:bg-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] overflow-hidden transition-all duration-300 cursor-pointer tracking-wide"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
