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

  const sectionRef = useRef(null);     // for useInView animation
  const formRef = useRef<HTMLFormElement>(null);  // for EmailJS form element
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
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
    <section ref={sectionRef} className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>


      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="text-center mb-16"
        >
          <h2
            className={"text-4xl md:text-5xl font-bold text-primary text-glow-cyan mb-4 transition-all duration-1000 ease-out opacity-100 translate-y-0"}
            style={{ textShadow: '0 0 10px rgba(0, 234, 255, 1)' }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, a question about my work, or just want to connect? Send a message through the network. I'm always open to discussing new ideas and collaborations.
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Let's talk →</h3>
              <p className="text-foreground/80 leading-relaxed">
                Whether you're looking for a developer to bring your AI vision to life, need a creative
                technologist for your next project, or simply want to discuss the future of intelligent
                systems — I'm just a message away.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mylifeasasif@gmail.com"
                className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg hover-glow-cyan hover:border-primary/60 transition-all"
              >
                <div className="p-3 bg-primary/10 rounded-full border border-primary">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">mylifeasasif@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/skupperr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-lg hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(330,100%,50%/0.3)] transition-all"
              >
                <div className="p-3 bg-secondary/10 rounded-full border border-secondary">
                  <Github className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">GitHub</div>
                  <div className="text-sm text-muted-foreground">@skupperr</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/asifuahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-lg hover:border-accent/60 hover:shadow-[0_0_30px_hsl(270,80%,60%/0.3)] transition-all"
              >
                <div className="p-3 bg-accent/10 rounded-full border border-accent">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Asif U. Ahmed</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Terminal-Style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl hover-glow-cyan">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/30">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-4 text-sm text-primary font-mono">contact_asif.sh</span>
              </div>

              {/* ✅ Correctly referenced form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-primary mb-2">$ enter_name:</label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">$ enter_email:</label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">$ enter_message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <button
                  type="submit"
                  className="group relative w-full px-6 py-4 bg-primary/10 border-2 border-primary rounded-lg font-semibold text-primary hover-glow-cyan overflow-hidden transition-all cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </span>
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </button>
              </form>
            </div>

          </motion.div>
        </div>

        {/* Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground">
            © 2025 Asif U. Ahmed. Built with React, Three.js, and caffeine.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;
