import { Project, Service, Experience, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Misha Noor',
  title: 'AI & Full Stack Developer',
  subtitle: 'Web Developer & AI Solutions Builder',
  headline: 'Building Smart Web & AI Solutions',
  metrics: [
    { value: '10+', label: 'Projects Delivered' },
    { value: '3+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '40%', label: 'Workflow Efficiency' }
  ],
  bio: 'AI & Full Stack Developer focused on building modern websites, AI tools, chatbot systems, and automation solutions for startups and businesses.',
  linkedin: 'https://www.linkedin.com/in/misha-noor-a4408b350/',
  github: 'https://github.com/misha22-code',
  email: 'mishaanoor7@gmail.com',
  phone: '03360715305',
  whatsappUrl: 'https://wa.me/923360715305',
  location: 'Bhakkar, Pakistan'
};

export const SERVICES: Service[] = [
  {
    id: 'chatbot-dev',
    title: 'AI Chatbot Development',
    description: 'Developing context-aware chatbots and digital virtual agents to handle user intent, answer queries from custom documents, and integrate with CRM systems.',
    iconName: 'Cpu',
    detailedPoints: [
      'Retrieval-Augmented Generation (RAG) using advanced vector databases',
      'System prompt calibration to enforce clear behavior limits and avoid hallucinations',
      'Continuous chat history buffer tracking for natural conversational flow',
      'Live streaming message interfaces with low response latency'
    ],
    techStack: ['Python', 'LangChain', 'Flask', 'OpenAI API']
  },
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    description: 'Engineering fast, type-safe web applications using modern frontends and robust, secure servers that handle high request volume seamlessly.',
    iconName: 'Code2',
    detailedPoints: [
      'Interactive single-page apps utilizing React and Tailwind utility wrappers',
      'Scalable backend integrations with Node.js, Express, or Python/Flask',
      'Robust SQL database design with efficient migration cycles and queries',
      'Type definition sheets (TypeScript) ensuring stable compile outcomes'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'business-websites',
    title: 'Business Website Development',
    description: 'Creating visually stunning, responsive, and performance-optimized websites to establish a strong, polished digital presence for your brand.',
    iconName: 'Layers',
    detailedPoints: [
      'Custom animations using Motion to capture user attention organically',
      'Mobile-first design principles providing crisp displays on every device screen',
      'SEO audit checks, optimized core web vital values, and fast script rendering',
      'Streamlined lead validation forms connected directly with notification webhooks'
    ],
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Motion']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Solutions',
    description: 'Replacing manual bottlenecks and tedious workflows with reliable cron orchestrations, AI extracts, and automatic updates.',
    iconName: 'Zap',
    detailedPoints: [
      'Document parsers extracting key fields from incoming legal agreements',
      'Automated report compilation and periodic delivery to manager emails',
      'Third-party software updates via resilient webhook handlers',
      'Error collection monitors designed to self-heal and queue retries'
    ],
    techStack: ['Python', 'Celery', 'Redis', 'Web Scraping']
  },
  {
    id: 'flask-api',
    title: 'Flask API Development',
    description: 'Building custom backend microservices with Flask. Designed to process data objects securely, handle authentication, and run fast.',
    iconName: 'Terminal',
    detailedPoints: [
      'JSON payload verification middleware and custom authentication checks',
      'Thorough endpoint route coverage complete with error-catch definitions',
      'Fast concurrent workers ensuring reliable performance under load',
      'Well-documented REST endpoints designed for rapid frontend hookups'
    ],
    techStack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL']
  },
  {
    id: 'startup-mvp',
    title: 'Startup MVP Development',
    description: 'Collaborating with startup founders to scope, build, and deploy high-fidelity minimal viable products to achieve initial target validation.',
    iconName: 'Sparkles',
    detailedPoints: [
      'Rapid prototype layout to put live products in front of potential users fast',
      'Easily convertible components and database models looking forward to scale',
      'Clean auth setups, user profiles, stripe checkouts, and system logs',
      'Direct hands-on architecture consultancy ensuring realistic tech spend'
    ],
    techStack: ['React', 'Flask', 'Vite', 'Supabase']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'edu-ai-hub',
    title: 'EDU AI Hub',
    description: 'An AI-powered educational platform featuring 20+ tools including paraphrasing, summarization, study planning, and productivity tools for students.',
    longDescription: 'A premium educational SaaS built specifically to streamline study workflows. EDU AI Hub features over 20+ robust tools including real-time paraphrasing, automated multi-document summarizers, AI-driven study planner builders, flashcard generators, and citations formatters. Engineered with optimized parallelized pipeline logic to process and output answers with premium high-retrieval rates and immediate latency feedback.',
    category: 'AI Platform',
    tags: ['Python', 'Flask', 'Generative AI', 'React', 'REST APIs', 'HTML', 'CSS', 'JavaScript'],
    stats: [
      { label: 'Active Micro-Tools', value: '20+ Tools' },
      { label: 'Avg Latency Rate', value: '< 2.1s' },
      { label: 'User Rating', value: '4.91/5.0' }
    ],
    githubUrl: 'https://github.com/misha22-code/edu-ai-hub',
    liveUrl: 'https://eduai-hub.netlify.app',
    featured: true,
    imageUrl: '/src/assets/images/edu_ai_hub_1779273046204.png',
    videoUrl: '/src/assets/images/edu_ai_hub.mp4'
  },
  {
    id: 'chatbitify-ai',
    title: 'Chatbitify AI',
    description: 'A business-focused AI chatbot platform designed for customer support, automation, and user engagement.',
    longDescription: 'Chatbitify AI is a premium conversational SaaS platform designed for modern business operations. It supports automated website crawling, custom knowledge base document uploads, and automated CRM records synchronization. The system keeps support queues completely automated with high safety guardrails, streaming chat mechanics, and direct metrics review boards.',
    category: 'AI Platform',
    tags: ['Python', 'Flask', 'Generative AI', 'REST APIs', 'Chatbot Development', 'React', 'Full Stack Development', 'PostgreSQL'],
    stats: [
      { label: 'Intent Resolution', value: '87.4%' },
      { label: 'Integration Time', value: '< 5 mins' },
      { label: 'Messages Routed', value: '140k+ routed' }
    ],
    githubUrl: 'https://github.com/misha22-code/chatbitify-ai',
    liveUrl: 'https://chatbotify-ai.netlify.app',
    featured: true,
    imageUrl: '/src/assets/images/chatbitify_ai_1779273070469.png',
    videoUrl: '/src/assets/images/chatbitify_ai.mp4'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'xp-umti',
    role: 'AI & Full Stack Developer',
    company: 'Umti Tech Solutions',
    location: 'Islamabad, Pakistan',
    period: 'Jan 2026 - Present',
    isCurrent: true,
    bullets: [
      'Successfully built and delivered 10+ professional client projects spanning AI applications, backend automation scripts, and full-stack web platforms.',
      'Developed context-aware automated chatbot systems and virtual assistants with prompt validations to avoid analytical hallucinations.',
      'Designed high-throughput REST APIs and data processing handlers using Python and Flask integrated with responsive modern dashboards.'
    ],
    skillsUtilized: ['Python', 'Flask', 'Generative AI', 'React', 'TypeScript', 'REST APIs', 'PostgreSQL']
  },
  {
    id: 'xp-junior',
    role: 'Junior AI / Software Engineer',
    company: 'SaaS Contract Solutions',
    location: 'Pakistan',
    period: '2025 - 2026',
    bullets: [
      'Collaborated hands-on with early founders and startups to translate dynamic functional specifications into operational minimal viable products.',
      'Assembled clean transactional backend workflows complete with JSON web validation handlers, error collectors, and retry logs.',
      'Refactored legacy templates into highly optimized, responsive screens with tailored Tailwind classes, increasing speed metrics by 25%.'
    ],
    skillsUtilized: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'Git']
  },
  {
    id: 'xp-ml',
    role: 'Machine Learning & Python Projects',
    company: 'Computer Science Research Practice',
    location: 'Pakistan',
    period: '2025',
    bullets: [
      'Programmed structured regression, forecasting, and classification model pipelines to clean, cluster, and analyze real-world tabular datasets.',
      'Implemented robust numerical computations and mathematical arrays utilizing pandas, NumPy, and Scikit-Learn libraries.',
      'Configured stable web analytical scrapers and parsing utilities to supply training data queues securely.'
    ],
    skillsUtilized: ['Python', 'pandas', 'NumPy', 'Scikit-Learn', 'Flask', 'Data Scraping']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Core AI & Backend Development',
    items: [
      { name: 'Python', level: 'Advanced', iconName: 'Terminal' },
      { name: 'Flask', level: 'Advanced', iconName: 'Cpu' },
      { name: 'Generative AI', level: 'Advanced', iconName: 'Sparkles' },
      { name: 'REST APIs', level: 'Advanced', iconName: 'Server' },
      { name: 'Chatbot Development', level: 'Advanced', iconName: 'Cpu' }
    ]
  },
  {
    category: 'Full Stack & Web Engineering',
    items: [
      { name: 'Full Stack Development', level: 'Advanced', iconName: 'Code2' },
      { name: 'JavaScript', level: 'Advanced', iconName: 'Activity' },
      { name: 'HTML', level: 'Advanced', iconName: 'Braces' },
      { name: 'CSS', level: 'Advanced', iconName: 'Layers' }
    ]
  },
  {
    category: 'Data Science & Machine Learning',
    items: [
      { name: 'pandas', level: 'Proficient', iconName: 'Table' },
      { name: 'NumPy', level: 'Proficient', iconName: 'Zap' },
      { name: 'Scikit-Learn', level: 'Proficient', iconName: 'Database' }
    ]
  }
];
