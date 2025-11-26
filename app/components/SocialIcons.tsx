import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/skupperr" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/asifuahmed/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/skupperr/",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      link: "https://x.com/skuperr",
    },
    {
      name: "Facebook",
      icon: <FiFacebook />,
      link: "https://facebook.com/skupperr",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8,
      }}
      className="
        fixed bottom-0 left-16 z-50
        max-[1080px]:left-8
        max-[768px]:hidden
      "
    >
      <ul
        className="
          list-none flex flex-col gap-8
          after:block after:w-px after:h-24 after:mx-auto 
          after:bg-gradient-to-t after:from-amber-500 after:to-transparent
        "
      >
        {socialLinks.map(({ name, icon, link }, index) => (
          <motion.li
            key={name}
            title={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 1 + index * 0.1,
            }}
            className="
              text-xl flex justify-center items-center
              transition-transform duration-300 ease-out
              hover:-translate-y-2
              last:mb-8 
            "
          >
            <Link
              href={link}
              target="_blank"
              className="
                relative p-2.5 text-slate-400 
                w-11 h-11 rounded-full flex items-center justify-center
                bg-gradient-to-br from-slate-900/60 to-slate-800/40
                backdrop-blur-xl border border-amber-400/20
                shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]
                transition-all duration-300 ease-out
                hover:text-amber-300 hover:border-amber-400/40
                hover:shadow-[0_8px_24px_rgba(251,191,36,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]
                hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-slate-950
                group
              "
            >
              {/* Hover glow effect */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/0 to-amber-500/0 group-hover:from-amber-400/10 group-hover:to-amber-500/5 transition-all duration-300"></span>
              
              <span className="relative text-[20px]">{icon}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;