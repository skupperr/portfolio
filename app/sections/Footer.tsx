import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { useRouter, usePathname } from "next/navigation";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const router = useRouter();
    const pathname = usePathname();
  
    const scrollToSection = (id: string) => {
      if (pathname === "/") {
        // Already on homepage → smooth-scroll
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate home → wait for render → scroll
        router.push(`/#${id}`);
      }
    };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black border-t border-amber-400/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.03),transparent_50%)]"></div>
      
      {/* Premium Noise Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-100 mb-3"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
                    letterSpacing: '0.03em'
                  }}
                >
                  Asif Ahmed
                </h3>
                <p 
                  className="text-slate-400 text-sm font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                >
                  Creative Technologist specializing in AI, full-stack development, and building intelligent systems.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/skupperr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-amber-400/20 rounded-lg hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/asifuahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-amber-400/20 rounded-lg hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:mylifeasasif@gmail.com"
                  className="p-3 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-amber-400/20 rounded-lg hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h4 
                className="text-lg font-light text-amber-100 mb-6 tracking-wide"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
              >
                Expertise
              </h4>
              <ul className="space-y-3">
                {[
                  'Full-Stack Development',
                  'AI & Machine Learning',
                  'Backend Architecture',
                  'System Design',
                ].map((service) => (
                  <li 
                    key={service}
                    className="text-slate-400 text-sm font-light"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 
                className="text-lg font-light text-amber-100 mb-6 tracking-wide"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
              >
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:mylifeasasif@gmail.com"
                    className="text-slate-400 text-sm font-light hover:text-amber-300 transition-colors duration-300 block"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    mylifeasasif@gmail.com
                  </a>
                </li>
                <li>
                  <p 
                    className="text-slate-400 text-sm font-light"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Ingolstadt, Bavaria, DE
                  </p>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/30 text-amber-100 text-sm font-light rounded-lg hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                  >
                    Contact Me
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="hidden md:block flex-1"></div>
          
          <p 
            className="text-slate-500 text-sm font-light text-center flex items-center gap-1"
            style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
          >
            © {currentYear} Asif Ahmed. Crafted with{' '}
            <Heart className="inline w-4 h-4 text-amber-400 fill-amber-400" />{' '}
            and precision.
          </p>

          {/* Scroll to Top Button */}
          <div className="md:flex-1 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-amber-400/20 rounded-lg hover:border-amber-400/40 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
    </footer>
  );
}

export default Footer;