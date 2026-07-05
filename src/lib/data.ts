export const profile = {
  name: "Efat Khan",
  role: "Full-Stack & AI Software Engineer",
  tagline: "Building Intelligent Web Platforms",
  location: "Gazipur, Dhaka, Bangladesh",
  email: "efatkhan.duet.cse@gmail.com",
  phone: "+8801404571271",
  linkedin: "https://www.linkedin.com/in/efat-khan/",
  github: "https://www.github.com/Efat-khan",
  photo: "/image/efat.png",
  intro:
    "I craft scalable, production-grade software — from AI-driven KYC verification and LLM integrations to full-stack platforms with React, Next.js, Laravel and FastAPI. Passionate about intelligent web systems and growing in the IT industry.",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years Building Software" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "", label: "Engineering Roles" },
];

export const skills = [
  { group: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL", "C++", "C"] },
  { group: "Backend", items: ["Laravel", "Livewire", "Filament", "FastAPI", "SQLAlchemy", "Prisma"] },
  { group: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"] },
  { group: "AI / LLM", items: ["OpenAI", "Gemini", "Claude", "LangChain", "NLP", "Vector DBs"] },
  { group: "Data & DevOps", items: ["PostgreSQL", "MySQL", "Docker", "Git & GitHub", "Neon DB"] },
  { group: "Platforms", items: ["Vercel", "AWS S3 / SES", "cPanel", "Plesk", "WordPress"] },
];

export type Project = {
  title: string;
  category: string;
  rating: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "B-JET Recruitment System",
    category: "AI / Automation",
    rating: "5.0",
    description:
      "Full-scale multi-phase recruitment platform for the Bangladesh–Japan Exchange Training program. AI-based CV scoring, coding tests, automated video interviews, Manabo API language testing, and configurable pipelines across nine selection phases.",
    tools: ["Next.js", "TypeScript", "Prisma 6", "NextAuth v5", "Vercel AI SDK", "Docker"],
    image: "/image/bjet.png",
  },
  {
    title: "Wakuwaku Link",
    category: "AI / EdTech",
    rating: "4.8",
    description:
      "Japanese language learning platform for learners and corporate clients. Structured N5–N1 courses, live lessons, AI-based speech & writing evaluation, progress tracking and certification.",
    tools: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "Neon DB", "Docker"],
    image: "/image/wakuwaku.png",
    link: "https://github.com/raihan-sagbrain/wakuwakulink",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    rating: "4.7",
    description:
      "Full-stack e-commerce solution with product management, shopping cart, and secure checkout flow.",
    tools: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/image/ecom.png",
  },
  {
    title: "E-Commerce Store v2",
    category: "E-Commerce",
    rating: "4.6",
    description:
      "Advanced e-commerce store with multi-vendor support and a real-time analytics dashboard.",
    tools: ["React", "Node.js", "MongoDB"],
    image: "/image/ecom-2-web.png",
  },
  {
    title: "LeefordBD Website",
    category: "E-Commerce",
    rating: "4.8",
    description:
      "Full-featured e-commerce website for LeefordBD with product listings, cart and order management.",
    tools: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "/image/leefordBd.png",
  },
  {
    title: "Blog Platform",
    category: "Web Platform",
    rating: "4.6",
    description:
      "Full-featured blog platform with rich-text editing and built-in SEO optimization.",
    tools: ["PHP", "Laravel", "Livewire", "MySQL", "JavaScript"],
    image: "/image/blog-web.png",
  },
  {
    title: "Health & Wellness Site",
    category: "Web Platform",
    rating: "4.7",
    description:
      "Health-focused web application with appointment booking and detailed doctor profiles.",
    tools: ["React", "Node.js", "Firebase"],
    image: "/image/helth-web.png",
  },
  {
    title: "Job Portal",
    category: "Web Platform",
    rating: "4.7",
    description:
      "Job listing and application platform connecting employers with candidates.",
    tools: ["Next.js", "MongoDB", "AWS"],
    image: "/image/Job-Portal.png",
  },
  {
    title: "Society Management",
    category: "Web Platform",
    rating: "4.6",
    description:
      "Community management system for residential societies with dedicated member portals.",
    tools: ["React", "Node.js", "MySQL"],
    image: "/image/Society-web.png",
  },
  {
    title: "HexagonBD Platform",
    category: "Web Platform",
    rating: "4.8",
    description:
      "Digital platform for HexagonBD with custom features and third-party integrations.",
    tools: ["Next.js", "Tailwind", "REST API"],
    image: "/image/screencapture-hexagonbd-2026-05-10-11_53_57.png",
  },
  {
    title: "MotherTrade BD",
    category: "Web Platform",
    rating: "4.7",
    description:
      "Automation, industry and institute website for MotherTrade BD with a modern design and a complete management system.",
    tools: ["PHP", "Laravel", "MySQL", "React", "JavaScript"],
    image: "/image/mta.png",
  },
  {
    title: "Point of Sale System",
    category: "Dashboard",
    rating: "4.8",
    description:
      "Full-featured POS system with billing, inventory tracking and sales reporting.",
    tools: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    image: "/image/pos.png",
  },
  {
    title: "English Language Club",
    category: "Web Platform",
    rating: "4.6",
    description:
      "Membership and event management website for an English Language Club community.",
    tools: ["PHP", "Laravel", "MySQL", "React", "JavaScript"],
    image: "/image/english-club.png",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "AI-Driven Software Engineer & Web Developer",
    company: "Sagbrain",
    period: "Mar 2026 – Jun 2026",
    location: "Bangladesh",
    description:
      "Built intelligent web platforms integrating multimodal AI and LLMs for automated verification, skill scoring and recruitment. Implemented AI-driven KYC verification, anti-fraud identity fingerprinting, and production integrations with Gemini and ChatGPT APIs using React, Next.js, FastAPI and PostgreSQL.",
  },
  {
    role: "Backend API Development Intern",
    company: "Sagbrain",
    period: "3 Months",
    location: "Japan",
    description:
      "Developed RESTful APIs with FastAPI, PostgreSQL and SQLAlchemy. Designed scalable backend architecture, implemented authentication systems, optimized queries and maintained clean API documentation.",
  },
  {
    role: "PHP Full-Stack Web Developer",
    company: "Moonsoftbd",
    period: "Oct 2024 – Nov 2025",
    location: "Bangladesh",
    description:
      "Developed and maintained robust full-stack web applications with PHP frameworks. Built dynamic frontend interfaces, scalable backend architectures and seamless database integration for optimized performance.",
  },
  {
    role: "Laravel Full-Stack Developer (Intern)",
    company: "Brain Station 23",
    period: "2 Months",
    location: "Bangladesh",
    description:
      "Developed and maintained full-stack Laravel applications. Contributed to backend development, database design, API integration and frontend implementation following industry best practices.",
  },
];

export const education = [
  {
    school: "Dhaka University of Engineering & Technology (DUET)",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Nov 2021 – Oct 2025",
    detail: "GPA 3.26 / 4.00",
  },
  {
    school: "Infra Polytechnic Institute, Barishal",
    degree: "Diploma in Engineering (Computer Technology)",
    period: "Jun 2015 – Jul 2019",
    detail: "GPA 3.59 / 4.00",
  },
];

export const training = [
  {
    name: "AI & ML Engineering",
    org: "Ostad",
    period: "May 2026 – Present · 7 Months",
    detail: "Python, Statistics, NLP/NLU, Computer Vision, LLMs, LangChain, Vector Databases, Explainable AI.",
  },
  {
    name: "Bangladesh–Japan IT Engineer Training (B-JET)",
    org: "B-JET",
    period: "2025 · 6 Months",
    detail: "Intensive Japanese language, workplace culture and professional etiquette for IT roles in Japan.",
  },
];
