// "use client"
// import type { Metadata } from "next";
// import { Tektur, Orbitron } from "next/font/google";
// import { Toaster } from 'sonner';
// import "./globals.css";
// import { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Email from "./components/Email";
// import Loader from "./components/Loader";
// import SocialIcons from "./components/SocialIcons";
// import Footer from "./sections/Footer";
// import Hero from "./sections/Hero";
// import Navbar from "./sections/Navbar";
// import About from "./sections/About";
// import Contact from "./sections/Contact";
// import Projects from "./sections/Projects";
// import Experience from "./sections/Experience";
// import SkillsSection from "./sections/skills";
// import AllProjectsPage from "./sections/AllProjectsPage";

// const tektur = Tektur({
//   subsets: ['latin'],
//   variable: '--font-tektur', // optional, if you want to use it in CSS
//   weight: ['400'], // choose weights you actually need
//   style: ['normal']
// });

// const orbitron = Orbitron({
//   subsets: ['latin'],
//   variable: '--font-orbitron', // optional, if you want to use it in CSS
//   weight: ['400'], 
// });


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   const handleLoaderLoaded = () => {
//     setIsLoading(false);
//     setTimeout(() => setShowContent(true), 450);
//   };

//   useEffect(()=>{
//     gsap.registerPlugin(ScrollTrigger)
//     ScrollTrigger.refresh()
//     return () =>{
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   return (
//     // <html lang="en" className={tektur.className}>
//     <html lang="en" className={`${tektur.className} ${orbitron.variable} sans-serif`}>
//       <body
        
//       >
//         {showContent && (
//         <>
//           <Navbar />
//           <SocialIcons />
//           <Email />
//           <main>
//             <Hero />
//             {/* <About /> */}
//             {/* <SkillsSection/> */}
//             {/* <Experience /> */}
//             <Projects />
//             <Contact />
//           </main>
//           <Footer />
//         </>
//       )}
//       <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
//       <Toaster richColors position="bottom-right" />
//       </body>
//     </html>
//   );
// }

"use client"
import type { Metadata } from "next";
import { Tektur, Orbitron } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

import Email from "./components/Email";
import Loader from "./components/Loader";
import SocialIcons from "./components/SocialIcons";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import SkillsSection from "./sections/skills";

const tektur = Tektur({
  subsets: ['latin'],
  variable: '--font-tektur',
  weight: ['400'],
  style: ['normal']
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400'], 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <html lang="en" className={`${tektur.className} ${orbitron.variable} sans-serif`}>
      <body>
        {showContent && (
          <>
            <Navbar />
            {isHomePage && (
              <>
                <SocialIcons />
                <Email />
              </>
            )}
            <main>
              {isHomePage ? (
                <>
                  <Hero />
                  <About />
                  <SkillsSection/>
                  <Projects />
                  <Experience />
                  <Contact />
                </>
              ) : (
                children
              )}
            </main>
            <Footer />
          </>
        )}
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}