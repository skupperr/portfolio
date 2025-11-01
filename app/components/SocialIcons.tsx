import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
      className="
        fixed bottom-0 left-16
        max-[1080px]:left-8
        max-[768px]:hidden
      "
    >
      <ul
        className="
          list-none flex flex-col gap-10
          after:block after:w-[2px] after:h-[90px] after:mx-auto after:bg-foreground/90
        "
      >
        {socialLinks.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="
              text-xl flex justify-center items-center
              transition-transform duration-300 ease-in-out
              hover:-translate-y-1
              last:mb-8 
            "
          >
            <Link
              href={link}
              target="_blank"
              className="
                p-2 text-foreground/90 duration-300 ease-in-out
                outline-dashed outline-2 outline-transparent text-[23px]
                hover:text-secondary focus:outline-secondary focus:-translate-y-1 focus:text-secondary
                w-10 h-10 border rounded-full items-center inline-flex justify-center

                relative bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary/60 transition-all
                
              "
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
