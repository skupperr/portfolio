// 'use client';

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import { motion, useInView } from 'framer-motion';

// interface Skill {
//   name: string;
//   icon: string | null;
//   description: string;
// }

// interface SkillCategory {
//   title: string;
//   skills: Skill[];
// }

// const skillsData: SkillCategory[] = [
//   {
//     title: 'Core Competencies',
//     skills: [
//       { name: 'Object Oriented Programming', icon: '', description: 'Designed modular and reusable software components.' },
//       { name: 'Data Structures & Algorithms', icon: '', description: 'Implemented efficient algorithms for complex problem-solving.' },
//       { name: 'Database Management System', icon: '', description: 'Managed and optimized relational database systems.' },
//       { name: 'Web Development', icon: '', description: 'Built responsive and dynamic full-stack web applications.' },
//       { name: 'Full-Stack Development', icon: '', description: 'Built responsive and dynamic full-stack web applications.' },
//       { name: 'Software Development', icon: '', description: 'Built responsive and dynamic full-stack web applications.' },
//       { name: 'Machine Learning', icon: '', description: 'Developed predictive models and AI-driven features.' },
//       { name: 'Image Processing', icon: '', description: 'Applied computer vision techniques for image analysis.' },
//       { name: 'Web Scraping', icon: '', description: 'Automated data extraction from various web sources.' },
//       { name: 'Retrieval-Augmented Generation', icon: '', description: 'Automated data extraction from various web sources.' },
//       { name: 'Agentic System', icon: '', description: 'Automated data extraction from various web sources.' },
//     ],
//   },
//   {
//     title: 'Programming Languages',
//     skills: [
//       { name: 'Python', icon: '/python.png', description: 'Leveraged for backend development, AI, and scripting.' },
//       { name: 'C/C++', icon: '/c.png', description: 'Utilized for performance-critical applications.' },
//       { name: 'Java', icon: '/java.png', description: 'Built robust, enterprise-scale applications.' },
//       { name: 'JavaScript', icon: '/javascript.png', description: 'Powered interactive frontend experiences.' },
//       { name: 'TypeScript', icon: '/typescript.png', description: 'Powered interactive frontend experiences.' },
//       { name: 'SQL', icon: '/sql.png', description: 'Managed large scale data in RDBMS' },
//       { name: 'HTML', icon: '/html.png', description: 'Structured semantic and accessible web content.' },
//       { name: 'CSS', icon: '/css.png', description: 'Styled modern and visually appealing user interfaces.' },
//     ],
//   },
//   {
//     title: 'Backend Development',
//     skills: [
//       { name: 'FastAPI', icon: '/fastapi.png', description: 'Developed high-performance, scalable backend APIs.' },
//       { name: 'Node.js', icon: '/nodejs.png', description: 'Built fast and efficient server-side applications.' },
//       { name: 'Express.js', icon: '/expressjs.png', description: 'Crafted flexible and minimalist web servers and APIs.' },
//     ],
//   },
//   {
//     title: 'Frontend Development',
//     skills: [
//       { name: 'React.js', icon: '/reactjs.png', description: 'Created dynamic and component-based user interfaces.' },
//       { name: 'Next.js', icon: '/nextjs.png', description: 'Created SEO optimized web applications.' },
//       { name: 'Tailwind CSS', icon: '/tailwind.png', description: 'Rapidly designed custom UIs with a utility-first approach.' },
//       { name: 'Streamlit', icon: '/streamlit.png', description: 'Built and deployed interactive AI & data web apps.' },
//     ],
//   },
//   {
//     title: 'AI & Machine Learning',
//     skills: [
//       { name: 'LangChain', icon: '/langchain.png', description: 'Developed applications powered by large language models.' },
//       { name: 'Scikit-learn', icon: '/scikit.png', description: 'Applied classical ML algorithms for data analysis.' },
//       { name: 'YOLO', icon: '/yolo.png', description: 'Implemented real-time object detection models.' },
//       { name: 'OpenCV', icon: '/opencv.png', description: 'Processed and analyzed images and video streams.' },
//       { name: 'NumPy', icon: '/numpy.png', description: 'Performed complex numerical computations efficiently.' },
//       { name: 'Pandas', icon: '/pandas.png', description: 'Manipulated and analyzed large datasets with ease.' },
//     ],
//   },
//   {
//     title: 'Databases',
//     skills: [
//       { name: 'MySQL', icon: '/mysql.png', description: 'Designed and maintained robust relational databases.' },
//       { name: 'SQLite', icon: '/sqlite.png', description: 'Utilized for lightweight, embedded database solutions.' },
//       { name: 'FireBase', icon: '/firebase.png', description: 'Built frontend services that directly syncs with database.' },
//       { name: 'Cloudinary', icon: '/cloudinary.png', description: 'Built systems with streamlined media management.' },
//       { name: 'Redis', icon: '/redis.png', description: 'Built systems with optimized caching.' },
//     ],
//   },
//   {
//     title: 'Other Frameworks',
//     skills: [
//       { name: 'BeautifulSoup', icon: null, description: 'Parsed HTML and XML for web scraping tasks.' },
//       { name: 'Playwright', icon: '/playwright.png', description: 'Automated browser tasks for testing, scraping and Agentic workflows.' },
//       { name: 'Clerk', icon: '/clerk.png', description: 'Authentication purposes.' },
//       { name: 'HuggingFace', icon: '/huggingface.png', description: '' },
//     ],
//   },
//   {
//     title: 'Tools & Utilities',
//     skills: [
//       { name: 'Git', icon: '/git.png', description: 'Managed source code versions for collaborative projects.' },
//       { name: 'GitHub', icon: '/github.png', description: 'Hosted and collaborated on software development projects.' },
//       { name: 'Docker', icon: '/docker.png', description: '' },
//     ],
//   },
// ];

// // Animation Variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (delay: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: delay / 1000, duration: 0.8, ease: 'easeOut' },
//   }),
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -40 },
//   visible: (delay: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: { delay: delay / 1000, duration: 0.8, ease: 'easeOut' },
//   }),
// };

// const CoreCompetencyItem: React.FC<{ name: string; delay: number; isVisible: boolean }> = ({ name, delay, isVisible }) => (
//   <motion.div
//     className="px-5 py-2 rounded-full border-2 border-slate-700/50 bg-[#000421]/60 text-slate-300 font-medium text-sm hover:border-fuchsia-400/80 hover:text-fuchsia-300 hover:shadow-[0_0_10px_rgba(217,70,239,0.4)] cursor-default"
//     variants={fadeUp}
//     initial="hidden"
//     animate={isVisible ? 'visible' : 'hidden'}
//     custom={delay}
//   >
//     {name}
//   </motion.div>
// );

// const SkillItem: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({ skill, delay, isVisible }) => {
//   const { name, icon, description } = skill;

//   return (
//     <motion.div
//       className="flex flex-col items-center gap-3 p-2 group"
//       variants={fadeUp}
//       initial="hidden"
//       animate={isVisible ? 'visible' : 'hidden'}
//       custom={delay}
//     >
//       <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-2 border-slate-700/50 bg-[#000421]/60 group-hover:border-cyan-400/80 transition-all duration-300">
//         <div className="font-sans absolute bottom-full mb-3 w-max max-w-xs px-3 py-2 text-sm font-light text-slate-200 bg-[#000421] border border-cyan-500/50 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
//           {description}
//           <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-cyan-500/50"></div>
//         </div>

//         {icon ? (
//           <Image src={icon} alt={name} width={36} height={36} className="object-contain transition-all duration-500 ease-in-out group-hover:rotate-[360deg]" />
//         ) : (
//           <span className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">{name.charAt(0)}</span>
//         )}
//       </div>
//       <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300 text-center">{name}</span>
//     </motion.div>
//   );
// };

// // Wrapper for scroll-triggered category
// const SkillCategorySection: React.FC<{ category: SkillCategory }> = ({ category }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });

//   const isCore = category.title === 'Core Competencies';

//   return (
//     <div ref={ref}>
//       <motion.h3
//         className="text-2xl font-semibold text-cyan-300 mb-6 text-left"
//         style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.4)' }}
//         variants={slideInLeft}
//         initial="hidden"
//         animate={isInView ? 'visible' : 'hidden'}
//         custom={0}
//       >
//         {category.title}
//       </motion.h3>

//       {isCore ? (
//         <motion.div
//           className="flex flex-wrap justify-start gap-4"
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
//         >
//           {category.skills.map((skill, index) => (
//             <CoreCompetencyItem key={skill.name} name={skill.name} delay={index * 50} isVisible={isInView} />
//           ))}
//         </motion.div>
//       ) : (
//         <motion.div
//           className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-4 gap-x-2"
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }}
//         >
//           {category.skills.map((skill, i) => (
//             <SkillItem key={skill.name} skill={skill} delay={i * 50} isVisible={isInView} />
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// const SkillsSection: React.FC = () => {
//   return (
//     <section className=" relative py-20 md:py-32 px-4 overflow-hidden">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
//       <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

//       <div className="container mx-auto max-w-6xl text-center z-10 relative ">


//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-fuchsia-400 mb-16"
//           style={{ textShadow: '0 0 12px rgba(217, 70, 239, 0.5)' }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.2 }}
//           variants={fadeUp}
//           custom={0}
//         >
//           TECHNOLOGY STACK
//         </motion.h2>

//         <div className="flex flex-col gap-10">
//           {skillsData.map((category) => (
//             <SkillCategorySection key={category.title} category={category} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  icon: string | null;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Core Competencies',
    skills: [
      {
        name: 'Software Development',
        icon: '',
        description: 'Designing, building, and maintaining scalable, production-grade software systems with a focus on reliability, performance, and maintainability.'
      },
      {
        name: 'System Design',
        icon: '',
        description: 'Architecting scalable systems with clear separation of concerns, fault tolerance, and long-term maintainability.'
      },
      {
        name: 'Full-Stack Development',
        icon: '',
        description: 'Building end-to-end applications across frontend interfaces, backend services, and data layers.'
      },
      {
        name: 'Microservice Architecture',
        icon: '',
        description: 'Designing distributed systems with independently deployable services, API contracts, and scalable infrastructure.'
      },
      {
        name: 'REST API Development',
        icon: '',
        description: 'Designing secure, scalable, and production-ready APIs for service-to-service and client-server communication.'
      },
      {
        name: 'Database Systems',
        icon: '',
        description: 'Designing and managing relational, NoSQL, and vector databases with optimized schemas and data flows.'
      },
      {
        name: 'Object-Oriented Programming',
        icon: '',
        description: 'Building modular, reusable, and maintainable software using strong abstraction and design principles.'
      },
      {
        name: 'Data Structures & Algorithms',
        icon: '',
        description: 'Applying efficient algorithms and data models to solve complex computational problems.'
      },
      {
        name: 'AI Applications',
        icon: '',
        description: 'Developing intelligent systems that integrate machine learning, automation, and AI-driven workflows.'
      },
      {
        name: 'Retrieval-Augmented Generation (RAG)',
        icon: '',
        description: 'Building AI systems that combine vector search, knowledge retrieval, and generative models for accurate responses.'
      },
      {
        name: 'Agentic Systems',
        icon: '',
        description: 'Designing autonomous AI workflows using planning, memory, and tool-usage architectures.'
      },
      {
        name: 'Machine Learning',
        icon: '',
        description: 'Applying ML models and pipelines for prediction, classification, and intelligent automation.'
      },
      {
        name: 'Web Automation',
        icon: '',
        description: 'Automating workflows, data pipelines, and system interactions using programmatic tools and scripts.'
      },
      { name: 'Image Processing', icon: '', description: 'Applied computer vision techniques for image analysis.' },
      { name: 'Web Scraping', icon: '', description: 'Automated data extraction from various web sources.' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: '/python.png', description: 'Used for backend development, AI workflows, automation, and data processing.' },
      { name: 'C/C++', icon: '/c.png', description: 'Applied in performance-critical components and low-level problem solving.' },
      { name: 'Java', icon: '/java.png', description: 'Developed structured, object-oriented applications with strong type safety.' },
      { name: 'JavaScript', icon: '/javascript.png', description: 'Built interactive web interfaces and server-side logic.' },
      { name: 'TypeScript', icon: '/typescript.png', description: 'Developed scalable frontends with strong typing and improved maintainability.' },
      { name: 'SQL', icon: '/sql.png', description: 'Designed queries and schemas for relational data modeling and analytics.' },
      { name: 'HTML', icon: '/html.png', description: 'Structured semantic, accessible, and SEO-friendly web content.' },
      { name: 'CSS', icon: '/css.png', description: 'Styled responsive, modern user interfaces with attention to UX.' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'FastAPI', icon: '/fast.png', description: 'Built high-performance APIs with async support and clean architecture.' },
      { name: 'Node.js', icon: '/nodejs.png', description: 'Implemented scalable backend services and real-time functionality.' },
      { name: 'Express.js', icon: '/expressjs.png', description: 'Developed lightweight REST APIs and middleware-based services.' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Next.js', icon: '/nextjs.png', description: 'Built production-grade applications with SSR, routing, and SEO optimization.' },
      { name: 'React.js', icon: '/reactjs.png', description: 'Developed modular, state-driven user interfaces.' },
      { name: 'Tailwind CSS', icon: '/tailwind.png', description: 'Designed consistent UI systems using a utility-first approach.' },
      { name: 'Streamlit', icon: '/streamlit.png', description: 'Rapidly prototyped and deployed data-driven and AI-focused web apps.' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'LangChain', icon: '/langchain.png', description: 'Built LLM-powered applications with tool usage, memory, and orchestration.' },
      { name: 'Scikit-learn', icon: '/scikit.png', description: 'Applied classical ML algorithms for prediction and data analysis.' },
      { name: 'YOLO', icon: '/yolo.png', description: 'Implemented real-time object detection pipelines.' },
      { name: 'OpenCV', icon: '/opencv.png', description: 'Processed images and video streams for computer vision tasks.' },
      { name: 'NumPy', icon: '/numpy.png', description: 'Performed efficient numerical computations and array operations.' },
      { name: 'Pandas', icon: '/pandas.png', description: 'Cleaned, transformed, and analyzed structured datasets.' },
      { name: 'Matplotlib', icon: '/matplotlib.png', description: 'Visualized data trends and experimental results.' },
      { name: 'HuggingFace', icon: '/huggingface.png', description: 'Integrated pre-trained models and transformers into AI workflows.' },
    ],
  },
  {
    title: 'Database & ORM',
    skills: [
      { name: 'PostgreSQL', icon: '/postgresql.svg', description: 'Designed normalized schemas and optimized complex queries.' },
      { name: 'MySQL', icon: '/mysql.png', description: 'Managed relational data storage for backend applications.' },
      { name: 'MongoDB', icon: '/mongodb.svg', description: 'Worked with document-based data models for flexible schemas.' },
      { name: 'SQLite', icon: '/sql2.png', description: 'Used lightweight databases for local development and testing.' },
      { name: 'Redis', icon: '/redis.png', description: 'Implemented caching and fast in-memory data access.' },
      { name: 'SupaBase', icon: '/supabase.png', description: 'Used managed Postgres with auth and storage for rapid development.' },
      { name: 'FireBase', icon: '/firebase.png', description: 'Built real-time applications with authentication and cloud data sync.' },
      { name: 'Prisma', icon: '/prisma.svg', description: 'Used type-safe ORM for schema management and database access.' },
      { name: 'Mongoose', icon: '/mongoose.svg', description: 'Modeled and validated MongoDB data using schema-based design.' },
      { name: 'SQLAlchemy', icon: '/sqla.svg', description: 'Managed relational data using Python ORM abstractions.' },
    ],
  },
  {
    title: 'Other Frameworks',
    skills: [
      { name: 'BeautifulSoup', icon: null, description: 'Parsed and extracted structured data from HTML websites' },
      { name: 'Playwright', icon: '/playwright.png', description: 'Automated browsers for testing, scraping, and agent workflows.' },
      { name: 'Clerk', icon: '/clerk.png', description: 'Integrated authentication, user management, and billing flows.' },
    ],
  },
  {
    title: 'Tools & Utilities',
    skills: [
      { name: 'Git', icon: '/git.png', description: 'Managed version control and collaborative workflows.' },
      { name: 'GitHub', icon: '/github.png', description: 'Hosted repositories, code reviews, and CI workflows.' },
      { name: 'Docker', icon: '/docker.png', description: 'Containerized applications for consistent deployments.' },
      { name: 'Sentry', icon: '/sentry.png', description: 'Monitored runtime errors and performance issues in production.' },
      { name: 'HTTPie', icon: '/httpie.png', description: 'Tested and debugged APIs via command-line requests.' },
    ],
  },
  {
    title: 'Cloud System',
    skills: [
      { name: 'FireBase', icon: '/firebase.png', description: 'Deployed cloud-based auth, database, and hosting solutions.' },
      { name: 'GCP', icon: '/gcp.png', description: 'Used cloud services for scalable backend infrastructure.' },
      { name: 'Vercel', icon: '/vercel.svg', description: 'Deployed and scaled frontend and serverless applications.' },
      { name: 'Cloudinary', icon: '/cloudinary.png', description: 'Managed media storage, optimization, and delivery pipelines.' },
    ],
  }

];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delay / 1000, duration: 0.9, ease: [0.42, 0, 0.58, 1] as const },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom / 1000, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const CoreCompetencyItem: React.FC<{ name: string; delay: number; isVisible: boolean }> = ({ name, delay, isVisible }) => (
  <motion.div
    className="px-6 py-2.5 rounded-full border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 text-slate-200 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] font-light text-sm tracking-wide hover:border-amber-400/40 hover:text-amber-100 hover:shadow-[0_4px_24px_rgba(251,191,36,0.2)] transition-all duration-300 cursor-default"
    style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
    variants={fadeUp}
    initial="hidden"
    animate={isVisible ? 'visible' : 'hidden'}
    custom={delay}
  >
    {name}
  </motion.div>
);

const SkillItem: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({ skill, delay, isVisible }) => {
  const { name, icon, description } = skill;

  return (
    <motion.div
      className="flex flex-col items-center gap-3 p-3 group"
      variants={fadeUp}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      custom={delay}
    >
      <div className="relative w-15 h-15 flex items-center justify-center rounded-2xl border border-amber-400/20 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:border-amber-400/40 group-hover:shadow-[0_8px_24px_rgba(251,191,36,0.2)] transition-all duration-500">

        {/* Tooltip */}
        <div className="absolute bottom-full mb-4 w-max max-w-xs px-4 py-3 text-sm font-light text-slate-200 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border border-amber-400/30 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20"
          style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
        >
          {description}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-amber-400/30"></div>
        </div>

        {icon ? (
          <Image
            src={icon}
            alt={name}
            width={40}
            height={40}
            className="object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[8deg]"
          />
        ) : (
          <span className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-400">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span
        className="text-sm font-light text-slate-400 group-hover:text-amber-100 transition-colors duration-300 text-center tracking-wide"
        style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
      >
        {name}
      </span>
    </motion.div>
  );
};

// Wrapper for scroll-triggered category
const SkillCategorySection: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const isCore = category.title === 'Core Competencies';

  return (
    <div ref={ref} className="space-y-8">
      <motion.h3
        className="text-2xl md:text-3xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 text-left"
        style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
          textShadow: '0 2px 20px rgba(251, 191, 36, 0.15)',
          letterSpacing: '0.05em'
        }}
        variants={slideInLeft}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={0}
      >
        {category.title}
      </motion.h3>

      {/* Decorative Line */}
      <div className="w-24 h-px bg-gradient-to-r from-amber-400/50 to-transparent"></div>

      {isCore ? (
        <motion.div
          className="flex flex-wrap justify-start gap-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.04 } }, hidden: {} }}
        >
          {category.skills.map((skill, index) => (
            <CoreCompetencyItem key={skill.name} name={skill.name} delay={index * 40} isVisible={isInView} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-6 gap-x-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.04 } }, hidden: {} }}
        >
          {category.skills.map((skill, i) => (
            <SkillItem key={skill.name} skill={skill} delay={i * 40} isVisible={isInView} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id='skill' className="relative py-24 md:py-36 px-4 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

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

      <div className="container mx-auto max-w-6xl text-center z-10 relative">

        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <h2
            className="text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-amber-100 to-slate-200 mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              textShadow: '0 2px 30px rgba(251, 191, 36, 0.2)',
              letterSpacing: '0.08em'
            }}
          >
            Technology Stack
          </h2>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/50"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/50"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/50"></div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-16 text-left">
          {skillsData.map((category) => (
            <SkillCategorySection key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;