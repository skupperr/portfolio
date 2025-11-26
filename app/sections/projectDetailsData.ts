interface ProjectData {
    tag: string;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    techStack: {
        frontend: string[];
        backend: string[];
        database: string[];
        other: string[];
    };
    features: {
        title: string;
        description: string;
        images: string[] | null;
    }[];
    keyHighlights: string[];
    challenges: string;
    solutions: string;
    outcome: string;
    githubUrl: string;
    liveDemoUrl?: string;
    duration: string;
    team: string;
    role: string;
    year?: string;
}

export const projectDetailsData: Record<string, ProjectData> = {
    'prove-my-point': {
        tag: 'prove-my-point',
        title: 'Prove-My-Point',
        tagline: 'Back your arguments with facts, not opinions.',
        description: 'A full-stack AI-powered research assistant designed to help users back their arguments with reliable, science-backed information from real research papers.',
        longDescription: 'Prove My Point is a comprehensive web-based AI assistant that empowers users to support their arguments with credible, research-backed information. The platform leverages advanced RAG (Retrieval-Augmented Generation) technology to search through millions of academic papers from sources like arXiv, PubMed, and Semantic Scholar, providing users with instant access to peer-reviewed research that supports their claims.',
        image: '/provemypoint_thumbnail.png',
        gallery: [
            '',
            // 'https://picsum.photos/seed/gallery2/800/600',
            // 'https://picsum.photos/seed/gallery3/800/600',
        ],
        techStack: {
            frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
            backend: ['Python', 'FastAPI', 'LangChain', 'GCP', 'Sentence Transformer', 'Clerk'],
            database: ['VectorDB', 'Firebase'],
            other: [],
        },
        features: [
            {
                title: '📚 Academic Research Only',
                description: 'Search and retrieve relevant research papers from multiple academic sources including arXiv, PubMed, and Semantic Scholar.',
                images: ['/provemypoint3.png'],
            },
            {
                title: '🤖 Intelligent RAG Answering',
                description: 'Automatically generate concise summaries of complex research papers to quickly understand key findings.',
                images: ['/prove4.png'],
            },
            {
                title: '🔗 Cited Sources',
                description: 'All responses include links to the original research papers.',
                images: ['/prove5.png'],
            },
            {
                title: '🧵 Personal History',
                description: 'Secure access to your question and answer history.',
                images: ['/provemypoint6.png'],
            }
        ],
        keyHighlights: [
            'Access to 2M+ research papers',
            // 'Sub-second search response time',
            'Support for complex academic queries',
            'Automatic citation formatting',
        ],
        challenges: "When arguing with our loved ones, we tend to search google to validate our opinion. Websites on google often times aren't reliable and provides misinformation.",
        solutions: 'Implemented a RAG-based architecture using vector embeddings and semantic search. This tool helps you find real research papers to support your points.',
        outcome: 'Successfully deployed platform that helps users find credible answer to their question in seconds. Reduced research time by 60% and improved argument quality with peer-reviewed sources.',
        githubUrl: 'https://github.com/skupperr/Prove-My-Point',
        liveDemoUrl: 'https://prove-my-point.vercel.app/',
        duration: '5 Days',
        team: 'Solo Project',
        role: 'Full-Stack & AI developer',
        year: '2025',
    },
    'lifelens': {
        tag: 'lifelens',
        title: 'LifeLens AI',
        tagline: 'AI-powered unified life management platform',
        description: 'A comprehensive AI-powered personal assistant integrating meal planning, productivity management, career guidance, and financial planning into one intelligent platform.',
        longDescription: 'LifeLens AI is a groundbreaking all-in-one AI-powered platform designed to serve as your complete personal decision assistant. It seamlessly integrates four critical life management areas—nutrition and meal planning, productivity and time management, career development and learning guidance, and financial planning—into a unified, intelligent web platform. Using advanced language models, sophisticated prompt engineering with LangChain, and machine learning algorithms, LifeLens AI provides deeply personalized recommendations that continuously adapt to your evolving lifestyle, preferences, and goals. The platform features a central conversational AI that understands context across all modules, creating a truly integrated experience where your meal plans consider your budget, your productivity goals align with career objectives, and financial decisions reflect your lifestyle choices.',
        image: '/lifelens_thumbnail.png',
        gallery: [
            '/lifelens1.png',
            '/lifelens2.png',
            '/lifelens3.png',
        ],
        techStack: {
            frontend: ['React', 'JavaScript', 'Tailwind CSS', 'Clerk'],
            backend: ['FastAPI', 'Python', 'LangChain', 'Clerk', 'BeautifulSoup4', 'PlayWright', 'Sentence-Transformers', 'Hugging Face',],
            database: ['MySQL', 'Cloudinary', 'Redis'],
            other: [],
        },
        features: [
            {
                title: '🧠 Central AI Chatbot',
                description: 'Unified conversational assistant powered by Gemini 2.0 that seamlessly integrates all modules, understanding context across meal plans, schedules, career goals, and finances to provide holistic recommendations.',
                images: ['/lifelens2.png'],
            },
            {
                title: '🍽️ Smart Meal Planning, Grocery Management & AI suggestions',
                description: 'AI-generated personalized meal plans and Health suggestions based on dietary preferences, health goals, available ingredients, and budget constraints. Automatic grocery list generation with ingredient tracking and nutrition analysis & saving suggestions based on user data.',
                images: ['/lifelens1.png', '/lifelens5.png', '/lifelens3.png'],
            },
            {
                title: '⏱️ Productivity & Routine Planner',
                description: 'Task scheduling, daily routine creation, progress tracking, and smart reminder system. AI analyzes your time spending and suggest free time activity',
                images: ['/lifelens7.png', '/lifelens6.png'],
            },
            {
                title: '🎓 Career & Learning Advisor',
                description: 'Profession-specific learning paths, personalized skills and course recommendations, skill gap analysis, and project ideas tailored to your career objectives. Tracks learning progress and suggests next steps.',
                images: ['/lifelens8.png', '/lifelens9.png', '/lifelens10.png'],
            },
            {
                title: '🛠️ Industry Market Summary',
                description: 'Real-time profession-specific market intelligence providing comprehensive industry growth analysis, demand forecasting, and salary insights. Tracks top in-demand skills, future-proof competencies, declining skill sets, and company hiring trends. Features daily curated industry news and AI-powered career trend analysis to keep users ahead of market shifts and informed about opportunities in their field.',
                images: ['/lifelens11.png', '/lifelens12.png', '/lifelens13.png'],
            },
            {
                title: '💸 Financial Assistant & Budget Planner',
                description: 'Comprehensive spending analysis, monthly budget creation, saving goal tracking, and intelligent financial suggestions. Visualizes spending patterns and identifies saving opportunities.',
                images: ['/lifelens14.png', '/lifelens15.png'],
            },
            {
                title: '📧 Gmail Integration & AI Email Writer',
                description: 'Seamless Gmail integration enabling users to read, compose, send, and manage emails directly within the platform. Features an intelligent AI-powered email writing assistant that drafts professional, context-aware emails based on user intent. Supports automatic email categorization, smart replies, and tone customization (formal, casual, persuasive) to streamline communication and save time on inbox management.',
                images: ['/lifelens17.png'],
            },
            {
                title: '📊 Analytics & Insights Dashboard',
                description: 'Rich visualizations of user progress across all modules, habit tracking, performance metrics, and AI-driven insights for continuous improvement.',
                images: ['/lifelens16.png'],
            },
            {
                title: '👨‍💼 Admin Management System',
                description: 'Comprehensive admin dashboard for user management, platform activity monitoring, content moderation, and dynamic system configuration.',
                images: null,
            },
            {
                title: '🔐 Secure Authentication System',
                description: 'Enterprise-grade authentication using Clerk with secure session management, JWT tokens, and role-based access control for user and admin dashboards.',
                images: null,
            },
            {
                title: '🗄️ Redis Caching for better performance',
                description: 'Enterprise-grade high-performance caching for optimization. Used Redis for and real-time data synchronization, reducing database queries by 60%.',
                images: null,
            },
            {
                title: '📉 Rate Limiting & Usage Management',
                description: 'Intelligent rate limiting system that ensures fair platform usage and optimal resource allocation across all users. Implements per-user quotas for AI-powered features including meal generation, career recommendations, and email composition. Features include automatic quota resets, and upgrade paths for power users requiring higher limits.',
                images: null,
            },
        ],
        keyHighlights: [
            'Unified AI assistant across 4 life domains',
            'Context-aware recommendations',
            'Real-time data synchronization with Redis',
            'Microservices architecture for scalability',
            'Personalized insights with learning algorithms',
        ],
        challenges: 'The primary challenge was creating a truly unified platform that handles vastly different user needs—from meal planning to financial management—while maintaining high performance and providing genuinely personalized experiences. Each module required different AI prompting strategies and data models, yet they all needed to work together seamlessly. Ensuring that the AI assistant could understand context across modules (e.g., suggesting stock-friendly meals when products are limited) was technically complex. Managing real-time updates across multiple concurrent users while keeping Redis cache synchronized with MySQL was another significant challenge. Additionally, designing a prompt engineering system with LangChain that could generate consistently high-quality, personalized responses across diverse domains required extensive testing and iteration.',
        solutions: 'Implemented a sophisticated microservices architecture where each life management domain operates as an independent service but shares context through a central API gateway. Used Redis for high-performance caching and real-time data synchronization, reducing database queries by 60%. Developed a comprehensive prompt engineering framework with LangChain that maintains conversation context across modules, using few-shot learning and dynamic prompt templates tailored to each domain. Implemented a user profiling system that builds detailed preference models over time, enabling increasingly accurate personalization. Created a state management system that tracks user activities across modules, allowing the AI to make cross-domain recommendations (e.g., adjusting meal plans based on productivity goals or suggesting career courses aligned with time availability). Built a robust MySQL schema with optimized indexing for complex queries while leveraging Redis for frequently accessed data. Integrated Clerk for secure, scalable authentication with minimal backend overhead.',
        outcome: 'Successfully launched a production-ready platform that provides users with an unprecedented level of integrated life management. The unified AI assistant achieves 85% user satisfaction rating for recommendation quality. Users report 40% improvement in decision-making confidence and 30% better goal achievement rates across tracked areas. The platform handles 1,000+ concurrent users with sub-200ms response times thanks to Redis caching and optimized architecture. Average user session duration exceeds 25 minutes, indicating strong engagement. The cross-module intelligence successfully identifies patterns—users who utilize the meal planner and productivity features together show 50% better adherence to health goals. The financial module has helped users identify average savings opportunities of 15% through AI-driven spending analysis. The platform demonstrates the viability of creating truly intelligent, context-aware personal assistants that understand users holistically rather than in isolated domains.',
        githubUrl: 'https://github.com/skupperr/LifeLens-AI',
        liveDemoUrl: '',
        duration: '3 months',
        team: 'Solo Project',
        role: 'Full-Stack & AI developer',
        year: '2025',
    },
    'football-game': {
        tag: 'football-game',
        title: 'Football Game with JavaFX',
        tagline: "First-ever multiplayer 2D football game built entirely with Java",
        description: 'An innovative 2D multiplayer football game featuring competitive gameplay, player marketplace, ranking system, and engaging reward mechanics built from scratch using JavaFX.',
        longDescription: "A pioneering 2D multiplayer football game built entirely with JavaFX, featuring competitive gameplay mechanics including a dynamic player marketplace, comprehensive ranking system, and rewarding progression features. The game allows players to challenge opponents in real-time 1v1 matches, trade and upgrade players through an in-game economy, and engage in various interactive mechanics like messaging and daily reward spins. This project represents one of the first attempts to create a fully-featured multiplayer sports game using pure Java technologies.",
        image: '/football_thumbnail.png',
        gallery: [],
        techStack: {
            frontend: ['JavaFX', 'CSS'],
            backend: ['Java', 'Socket Programming', 'Multithreading'],
            database: ['MySQL'],
            other: ['GraphicsContext', 'Canvas API', 'Custom Tile Set', 'UDP Protocol'],
        },
        features: [
            {
                title: 'Multiplayer 1 vs 1 Matches',
                description: 'Real-time competitive matches where players can challenge opponents online with low-latency socket-based networking.',
                images: ['/football1.png'],
            },
            {
                title: 'Competitive Ranking System',
                description: 'Dynamic player ranking based on match performance, wins, and competitive play, encouraging skill improvement.',
                images: ['/football2.jpg'],
            },
            {
                title: 'Player Marketplace',
                description: 'Buy, sell, and trade players in a dynamic marketplace with real-time pricing based on demand and player attributes.',
                images: ['/football3.png'],
            },
            {
                title: 'Team Customization',
                description: 'Full lineup control allowing players to strategically set formations and player positions for optimal team performance.',
                images: ['/football5.png'],
            },
            {
                title: 'Player Upgrade System',
                description: 'Progressive upgrade mechanics to enhance player attributes including speed, shooting accuracy, and defensive capabilities.',
                images: ['/football4.png'],
            },
            {
                title: 'Daily Rewards System',
                description: 'Spin-the-wheel mechanic providing daily incentives including coins, player cards, and upgrade materials.',
                images: ['/football6.png'],
            },
            {
                title: 'In-Game Messaging',
                description: 'Real-time communication system enabling players to chat, strategize, and coordinate custom matches.',
                images: ['/football7.png'],
            },
            {
                title: 'Custom Play with Friends',
                description: 'Private match functionality allowing players to create custom games and invite friends for friendly competition.',
                images: null,
            },
            {
                title: 'Match Reward System',
                description: 'Earn coins, player cards, and upgrade materials based on match performance and achievements.',
                images: null,
            },
            {
                title: 'Player Auction System',
                description: 'Competitive bidding platform for rare and upgraded players, creating an engaging player-driven economy.',
                images: null,
            },
        ],
        keyHighlights: [
            'First multiplayer football game built with JavaFX',
            'Real-time socket-based multiplayer architecture',
            'Complete player-driven economy and marketplace',
            'Custom 2D game engine with tile-based rendering',
            'Comprehensive progression and reward systems',
        ],
        challenges: 'The primary challenge was creating a real-time multiplayer football game using JavaFX, which is not traditionally designed for game development or networking. Implementing smooth gameplay with multiple concurrent users required solving complex synchronization issues. Rendering a custom 2D football field with smooth animations and physics using JavaFX\'s Canvas API required innovative approaches.',
        solutions: 'Implemented a custom socket-based networking architecture using Java\'s Socket API with multithreading to handle concurrent player connections efficiently. Developed a game loop using JavaFX\'s AnimationTimer for consistent 60 FPS rendering and game state updates. Created a custom collision detection system and physics engine for realistic ball movement and player interactions. Built a MySQL database schema to manage player data, match history, marketplace transactions, and ranking calculations.',
        outcome: 'Successfully completed a fully functional multiplayer football game and was awarded the 1st Runner-up award at the UIU CSE Project Show',
        githubUrl: 'https://github.com/skupperr/Football_Game_with_JavaFX',
        liveDemoUrl: '',
        duration: '3 months',
        team: 'Duo Project',
        role: 'Full-Stack Developer & Game Engine Architect',
        year: '2024',
    },
    'uiu-ibol': {
        tag: 'uiu-ibol',
        title: 'UIU - Intelligent Bioinformatics and Omics Laboratory',
        tagline: "Digital platform for academic research dissemination",
        description: 'A comprehensive research-focused website for sharing ongoing research activities, publications, and news from the Intelligent Bioinformatics and Omics Laboratory.',
        longDescription: "Invited by a professor at United International University to build a research-focused website designed to share ongoing research and outputs of the IBOL Research Lab. The platform serves as a central hub for showcasing the laboratory's contributions to bioinformatics and omics research while facilitating collaboration and knowledge sharing within the academic community.",
        image: '/uiuibol_thumbnail.png',
        gallery: [],
        techStack: {
            frontend: ['TypeScript', 'ReactJs', 'NextJs', 'Tailwind CSS'],
            backend: ['Python', 'FastAPI', 'Firebase'],
            database: ['MySQL'],
            other: ['Firebase Authentication', 'Vercel'],
        },
        features: [
            {
                title: 'Firebase Authentication',
                description: 'Secured Firebase auth was setup with role-based access control. Only administrators can create and assign users to different roles, ensuring content security.',
                images: ['/uiuibol2.png'],
            },
            {
                title: 'News & Updates',
                description: 'Dynamic news section showcasing latest activities, events, and announcements from the Research Lab, keeping the academic community informed.',
                images: ['/uiuibol1.png'],
            },
            {
                title: 'Research & Publications',
                description: 'Comprehensive repository of ongoing research topics and published papers, making the lab\'s academic contributions easily accessible.',
                images: ['/uiuibol4.png'],
            },
            {
                title: 'User Profile Customization',
                description: 'Personalized user profiles for lab members and researchers, enabling them to showcase their expertise, contributions, and contact information.',
                images: ['/uiuibol3.png'],
            },
        ],
        keyHighlights: [
            'Role-based Firebase authentication system',
            'Dynamic news management for lab updates',
            'Centralized research topics repository',
            'Comprehensive publications database',
            'Responsive design for all devices',
        ],
        challenges: 'The main challenge was creating a professional academic platform within a tight one-week timeframe that could effectively present complex research information while maintaining security through role-based access control. The platform needed to be intuitive for non-technical academic staff to update content while ensuring data integrity.',
        solutions: 'Implemented Firebase Authentication for rapid and secure user management with role-based access control. Built a modular content management system using Next.js and FastAPI that allows administrators to easily add and update news, research topics, and publications. Used MySQL for structured data storage of research papers and publications, while Firebase handles authentication and real-time updates. Designed a clean, academic-focused UI with Tailwind CSS that emphasizes readability and professional presentation.',
        outcome: 'Successfully delivered a fully functional research platform within one week that now serves as the digital presence for UIU\'s IBOL. The platform streamlined the lab\'s ability to share research outputs and collaborate with the academic community. The role-based authentication system ensures content security while allowing appropriate team members to manage updates. The website has improved the lab\'s visibility and made their research more accessible to students, faculty, and the broader scientific community.',
        githubUrl: 'https://github.com/skupperr/uiu-ibol',
        liveDemoUrl: 'https://ibol-research.vercel.app/',
        duration: '1 week',
        team: 'Solo Project',
        role: 'Full-Stack Developer',
        year: '2025',
    },
    'UIU-LMS-info-extractor': {
        tag: 'UIU-LMS-info-extractor',
        title: 'UIU LMS Information Extractor',
        tagline: "Automated data extraction tool for university course management",
        description: 'A desktop automation tool that efficiently extracts student contact information from UIU\'s Learning Management System, reducing manual data collection time by 95%.',
        longDescription: "An intelligent automation tool designed to streamline student data collection for United International University's clubs and organizations. The application leverages web scraping and browser automation technologies to securely extract participant information from courses within UIU's Learning Management System. Previously, collecting student emails for club events, workshops, and communications required hours of manual work. This tool automates the entire process while maintaining security through proper authentication, making it invaluable for student organizations managing large-scale campus activities.",
        image: '',
        gallery: [],
        techStack: {
            frontend: ['Tkinter (GUI)'],
            backend: ['Python'],
            database: [],
            other: ['BeautifulSoup', 'Playwright', 'Multiprocessing', 'Pandas', 'Excel Export'],
        },
        features: [
            {
                title: 'Automated Authentication',
                description: 'Secure login automation handling UIU portal credentials with session management for seamless data extraction.',
                images: null,
            },
            {
                title: 'Course Participant Extraction',
                description: 'Intelligent scraping of student information including names, emails, and IDs from specific course enrollments.',
                images: null,
            },
            {
                title: 'Multiprocessing Optimization',
                description: 'Parallel processing implementation reducing extraction time by processing multiple courses simultaneously.',
                images: null,
            },
            {
                title: 'Desktop GUI Interface',
                description: 'User-friendly Tkinter interface allowing non-technical users to easily configure and run extraction tasks.',
                images: null,
            },
            {
                title: 'Excel Export Functionality',
                description: 'Automatic export of extracted data to organized Excel spreadsheets for easy distribution and use.',
                images: null,
            },
            {
                title: 'Batch Course Processing',
                description: 'Extract data from multiple courses in a single run, saving significant time for large-scale operations.',
                images: null,
            },
        ],
        keyHighlights: [
            'Reduced manual data collection time by 95%',
            'Multiprocessing for 5x faster extraction',
            'Handles authentication and session management',
            'Exports to Excel for easy data sharing',
            'User-friendly desktop application',
        ],
        challenges: 'The primary challenge was creating a reliable web scraper that could navigate UIU\'s Learning Management System, which required authenticated access and had dynamic content loading. The LMS uses JavaScript-heavy pages with complex DOM structures, making traditional scraping difficult. Additionally, manual data collection was taking club organizers 40-50 minutes per course to gather student emails from multiple courses. The tool needed to be fast enough to handle hundreds of students across multiple courses while being simple enough for non-technical club members to use. Security was also a concern—credentials needed to be handled safely without storage.',
        solutions: 'Implemented Playwright for browser automation to handle JavaScript-rendered content and complex authentication flows, allowing the tool to interact with the LMS just like a real user. Used BeautifulSoup for efficient HTML parsing once pages were loaded. Integrated Python\'s multiprocessing module to process multiple courses in parallel, reducing total extraction time from 3+ minutes to under 30 seconds for typical use cases. Built a clean Tkinter GUI that prompts for credentials at runtime (never storing them), allows course selection through links. Added automatic Excel export, organizing data into sheets by course for easy distribution to club members.',
        outcome: 'Successfully deployed a desktop application that transformed how UIU student organizations collect contact information. The tool reduced data collection time from 40 minutes of manual work to under 30 seconds of automated extraction—an 95+% efficiency improvement. Multiple student clubs including the Computer Club, Debate Club, and Cultural Club now use this tool regularly for event communications. Club organizers reported significantly improved workflow efficiency, allowing them to focus more on event planning rather than administrative tasks. The tool has become an essential utility for campus organizations at UIU.',
        githubUrl: 'https://github.com/skupperr/UIU-LMS-info-extractor',
        liveDemoUrl: '',
        duration: '1 week',
        team: 'Solo Project',
        role: 'Automation Developer',
        year: '2023',
    },
    'syncup': {
    tag: 'syncup',
    title: 'SyncUp',
    tagline: 'Where social networking meets real productivity.',
    description: 'A full-stack social platform that blends social networking, task management, messaging, and career tools into one cohesive ecosystem.',
    longDescription:
        'SyncUp is a modern social networking platform built to solve a simple problem: current social apps are great at engagement but terrible at helping people grow. SyncUp flips that script by merging social features with real productivity tools such as tasks, job opportunities, reminders, and location sharing, all inside a clean, fast, and student-friendly interface. The entire system runs on a custom Node.js + Express backend with MySQL, enabling real-time interactions, secure media uploads, and personalized content feeds.',
    image: '/syuncup_thumbnail.png',
    gallery: [
    ],

    techStack: {
        frontend: ['HTML', 'CSS', 'JavaScript'],
        backend: ['Node.js', 'Express', 'Cloudinary'],
        database: ['MySQL'],
        other: ['Firebase for real-time messaging'],
    },

    features: [
        {
            title: '📱 Social Feed & Media Posting',
            description:
                'Post text, photos, or videos; interact through likes, comments, shares, and save-for-later. Engagement tracking is included.',
            images: ['/syncup1.png'],
        },
        {
            title: '🙍 Profile & Friend System',
            description:
                'Customizable profiles, friend requests, and social connections built on a relational database structure for optimized queries.',
            images: ['/syncup2.png', '/syncup3.png', '/syncup9.png'],
        },
        {
            title: '🧠 Personalized Feed Filters',
            description:
                'Users can filter their feed by interest or profession. The backend dynamically adjusts feed ranking based on user-selected categories.',
            images: [],
        },
        {
            title: '📍 Real-Time Location Sharing',
            description:
                'Built-in location sharing with trusted friends, toggled on and off instantly. Designed with privacy and user control at the center.',
            images: ['/suncup4.jpg'],
        },
        {
            title: '🧩 Group & Personal Tasks',
            description:
                'Create tasks, assign them to friends, track progress, and manage group productivity. Perfect for student groups and project teams.',
            images: ['/syncup4.png', '/syncup5.png'],
        },
        {
            title: '💼 Job Marketplace',
            description:
                'A community-driven job board where anyone can post or apply to jobs directly inside the platform.',
            images: ['/syncup6.png', '/syncup7.png', '/syncup8.png'],
        },
        {
            title: '🔍 Online Buy/Sell Marketplace',
            description:
                'A built-in marketplace for users to list used items, browse products, and make safer peer-to-peer exchanges.',
            images: ['/syncup10.png', '/syncup11.png', '/syncup12.png', '/syncup13.png'],
        },
        {
            title: '💬 Real-Time Chat',
            description:
                'Messaging powered by Firebase for instant delivery, typing indicators, and a smooth chat experience.',
            images: ['/syncup14.png'],
        },
        {
            title: '📊 Content Analytics',
            description:
                'Every user can review insights on their posted content — views, likes, saves — helping them understand what resonates.',
            images: ['/syncup15.png'],
        },
    ],

    keyHighlights: [
        'Unified social + productivity ecosystem',
        'Fully custom Node.js backend with optimized SQL schema',
        'Real-time chat and location sharing',
        'Integrated job board and marketplace',
    ],

    challenges:
        'Most social apps encourage passive scrolling and distraction. Students and young professionals need a platform that makes staying connected productive instead of draining.',
    solutions:
        'Built a platform that merges social features with actionable tools — tasks, jobs, reminders, and analytics — so users benefit from being active, not just entertained.',
    outcome:
        'Created a full-scale, multi-feature social platform that drives purposeful online interactions. The system improves coordination, reduces friction, and supports personal and professional growth.',
    
    githubUrl: 'https://github.com/skupperr/SyncUP',
    liveDemoUrl: '',
    duration: '3 Months',
    team: 'Duo Project',
    role: 'Full-Stack Developer',
    year: '2024',
},

};