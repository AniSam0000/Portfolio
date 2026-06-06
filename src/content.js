export const personal = {
  name: 'Aniket Samanta',
  email: 'aniketsamanta82641@gmail.com',
  phone: '+91 9073152733',
  location: 'India',
  social: {
    github: 'https://github.com/AniSam0000',
    linkedin: 'https://www.linkedin.com/in/aniket-samanta-0266b2305/',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  roles: ['Backend Engineer', 'Distributed Systems', 'High Performance API'],
  tagline: 'Backend Engineer crafting scalable, high-performance systems',
  subtitle: 'Node.js · Redis · MongoDB · Distributed Systems',
}

export const asciiBanner = `  █████╗ ███╗   ██╗██╗██╗  ██╗███████╗████████╗
 ██╔══██╗████╗  ██║██║██║ ██╔╝██╔════╝╚══██╔══╝
 ███████║██╔██╗ ██║██║█████╔╝ █████╗     ██║   
 ██╔══██║██║╚██╗██║██║██╔═██╗ ██╔══╝     ██║   
 ██║  ██║██║ ╚████║██║██║  ██╗███████╗   ██║   
 ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   `

export const about = {
  paragraphs: [
    'I build backend systems that don\'t just work — they scale, cache, and recover. Currently focused on Node.js, Redis, and MongoDB ecosystems, I architect solutions where performance is a feature, not an afterthought.',
    'Whether it\'s cutting latency from 200ms to 45ms with a cache-first strategy, engineering ACID-compliant financial ledgers, or orchestrating AI code execution in sandboxed microservices — I ship systems that are resilient, observable, and production-ready.',
    'I thrive at the intersection of real-time communication, distributed architecture, and AI integration. Every project is an exercise in system design thinking: database indexing tradeoffs, concurrency models, and the eternal question of when to reach for Redis.',
  ],
  highlightWords: ['Node.js', 'Redis', 'MongoDB'],
  stats: [
    { label: 'Projects', value: '10+' },
    { label: 'Technologies', value: '15+' },
  ],
}

export const skillGroups = [
  {
    title: 'languages',
    items: ['JavaScript', 'Java', 'Python', 'TypeScript'],
  },
  {
    title: 'backend',
    items: ['Node.js', 'Express.js', 'Fastify', 'FastAPI', 'React', 'Socket.IO'],
  },
  {
    title: 'databases',
    items: ['MongoDB', 'PostgreSQL', 'SQLite', 'MySQL', 'Redis'],
  },
  {
    title: 'tools',
    items: ['Docker', 'Git', 'Postman', 'Vercel', 'Render', 'Cron', 'Cloudinary'],
  },
  {
    title: 'ai-apis',
    items: ['Deepgram SDK', 'Groq SDK', 'LLM Integration', 'Prompt Engineering'],
  },
  {
    title: 'concepts',
    items: ['System Design', 'ACID', 'Concurrency', 'JWT', 'Indexing'],
  },
]

export const projects = [
  {
    title: 'InsightFlow AI',
    tag: '[ongoing]',
    description:
      'AI-powered data analysis platform with microservice architecture. Enables secure LLM-generated Python code execution in isolated FastAPI service.',
    tech: ['React', 'Node.js', 'FastAPI', 'Docker', 'MongoDB', 'Redis', 'Groq LLM', 'Socket.IO'],
    features: [
      'Microservices architecture: frontend, Node API, isolated FastAPI Python sandbox',
      'Groq LLM generates Python code for data analysis with auto-fix for pandas errors',
      'Real-time analysis pipeline via Socket.IO with 120s timeout handling',
    ],
    github: 'https://github.com/AniSam0000/Insightflow-AI-data_analysis',
    live: 'https://insightflow-ai-data-analysis.vercel.app',
  },
  {
    title: 'DB Backup CLI',
    tag: '[latest]',
    description:
      'Multi-database backup CLI supporting MongoDB, PostgreSQL, and SQLite with automated cron scheduling and Telegram notifications.',
    tech: ['Node.js', 'MongoDB', 'PostgreSQL', 'SQLite', 'Cron', 'Telegram API', 'Pino'],
    features: [
      'CLI tool for backup, restore, and cron-scheduled automation across 3 DB types',
      'Telegram notifications for job success/failure with connection diagnostics',
      'npm-linked global CLI with structured pino logging and .env configuration',
    ],
    github: 'https://github.com/AniSam0000/DB-Backup-CLI',
  },
  {
    title: 'URL Shortener',
    tag: '[live]',
    description:
      'High-performance URL shortener with cache-first architecture. Reduced database load by 65% and response time from 200ms to 45ms.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
    features: [
      'Cache-first architecture with Redis TTL expiry and MongoDB persistence',
      'Redis-backed rate limiting (20 req/15min shorten, 100 req/h redirect)',
      'Multi-stage Docker build serving both backend API and built frontend',
    ],
    github: 'https://github.com/AniSam0000/URL_Shortner',
  },
  {
    title: 'Banking Transaction System',
    tag: '[live-api]',
    description:
      'ACID-compliant transactional banking backend. Double-entry ledger system ensuring safe concurrent financial transactions.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    features: [
      'Ledger-based immutable DEBIT/CREDIT accounting with real-time balance aggregation',
      'Atomic fund transfers using MongoDB transactions with idempotencyKey protection',
      'JWT auth with token blacklist, email notifications via Nodemailer OAuth2',
    ],
    github: 'https://github.com/AniSam0000/banking_transaction',
  },
  {
    title: 'Real-Time Chat Application',
    tag: '[deployed]',
    description:
      'Real-time messaging system with WebSocket-based communication achieving 50-120ms latency under normal load.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    features: [
      'Real-time messaging with Socket.IO, online status, and seen/unread indicators',
      'WhatsApp-style sidebar auto-orders conversations by latest message',
      'Image sharing via Cloudinary and message deletion with right-click menu',
    ],
    github: 'https://github.com/AniSam0000/chat-app',
    live: 'https://chat-app-ten-nu-39.vercel.app/login',
  },
]

export const education = {
  university: 'Jadavpur University',
  degree: 'Electronics & Telecommunication Engineering',
  cgpa: '7.5',
  type: 'Bachelor of Engineering',
}

export const certifications = [
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    description:
      'Joins, aggregations, subqueries, and relational database concepts',
    link: 'https://www.hackerrank.com/certificates/iframe/52e90986dc31',
  },
]

export const contact = {
  email: 'aniketsamanta82641@gmail.com',
  phone: '+91 9073152733',
  location: 'India',
}

export const footer = {
  builtWith: 'built from scratch',
}
