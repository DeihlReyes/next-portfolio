export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  imagePath: string;
  imageAlt: string;
  techStack: string[];
  category: "fullstack" | "ai" | "mobile" | "open-source" | "client-work";
  features?: string[];
  disclaimer?: string;
  repo?: string;
  demo?: string;
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "satiscript",
    title: "Satiscript",
    description:
      "AI-powered desktop application for real-time emotion detection and dynamic script generation in customer service scenarios. Fine-tuned BERT model achieving 89% accuracy across 7 emotion categories. Awarded 1st Runner-Up, Best Research Paper at UE Caloocan 2024.",
    longDescription: [
      "Satiscript is an AI-powered tool designed for call centers to improve agent communication through real-time emotion detection and dynamic script generation.",
      "Fine-tuned a BERT model achieving 89% accuracy in sentiment classification across 7 emotion categories, with live call transcription and a Next.js analytics dashboard surfacing actionable customer satisfaction insights.",
      "Integrated OpenAI API for dynamic script generation based on detected conversation sentiment. Awarded 1st Runner-Up, Best Research Paper at the UE Caloocan Engineering Research Colloquium 2024.",
    ],
    imagePath: "/assets/projects/satiscript_img2.png",
    imageAlt: "Satiscript AI call center dashboard",
    techStack: ["Python", "Machine Learning", "OpenAI API", "Next.js"],
    category: "ai",
    features: [
      "Real-time AI script generation using OpenAI GPT",
      "Customer emotion detection via fine-tuned BERT model",
      "Live transcription during active calls",
      "Dashboard for data analysis and visualization",
    ],
    repo: "https://github.com/DeihlReyes/satiscript",
    demo: "https://satiscript.vercel.app",
    year: 2024,
    featured: true,
  },
  {
    slug: "taskquill",
    title: "TaskQuill",
    description:
      "Intuitive task management app streamlining productivity for individuals and teams. Offers a user-friendly dashboard for efficient organization of tasks, projects, and meetings.",
    longDescription: [
      "TaskQuill is a productivity-focused application for individuals and teams looking to manage work efficiently.",
      "It supports user authentication, project creation, task assignment, and real-time updates using modern web technologies.",
    ],
    imagePath: "/assets/projects/taskquill.png",
    imageAlt: "TaskQuill task management dashboard",
    techStack: ["Next.js", "Clerk", "TailwindCSS", "Prisma", "PostgreSQL"],
    category: "fullstack",
    features: [
      "User authentication and authorization",
      "Task creation and management",
      "Project organization",
      "Real-time collaboration",
      "Progress tracking and analytics",
    ],
    repo: "https://github.com/DeihlReyes/TaskQuill",
    demo: "https://taskquill.vercel.app",
    year: 2024,
    featured: true,
  },
  {
    slug: "riding-behavior-monitoring-app",
    title: "Riding Behavior Monitoring App",
    description:
      "Real-time motorcycle monitoring system built on Raspberry Pi. Features LSTM-based riding behavior prediction and smart OBD-II diagnostics.",
    longDescription: [
      "This personal project monitors motorcycle diagnostics and riding behavior using real-time sensor data and machine learning.",
      "I independently designed and developed the entire system from hardware integration and backend logic to training the LSTM model and building the frontend UI.",
      "The app runs on a Raspberry Pi with a 7-inch touchscreen and combines MPU6050 motion data with OBD-II engine readings. It classifies riding patterns and triggers smart alerts for battery and coolant issues.",
    ],
    imagePath: "/assets/projects/riding-behavior-app.jpg",
    imageAlt: "Riding behavior monitoring app dashboard",
    techStack: ["Python", "TensorFlow/Keras", "HTML/CSS/JS", "Raspberry Pi", "MPU6050", "OBD-II"],
    category: "ai",
    features: [
      "LSTM-based riding behavior prediction",
      "Live stream of MPU6050 sensor data",
      "Real-time OBD-II engine diagnostics",
      "Smart alerts for battery and coolant health",
      "Dashboard with behavior trends",
      "Touchscreen-optimized UI",
    ],
    repo: "https://github.com/DeihlReyes/Vehicle-Monitoring",
    year: 2024,
    featured: true,
  },
  {
    slug: "filevert",
    title: "Filevert",
    description:
      "Versatile file conversion tool with a simple interface for quick and easy format transformations. Streamlines workflow for users dealing with multiple file types.",
    longDescription: [
      "Filevert is a browser-based utility that lets users convert files quickly using FFMPEG on the backend.",
      "Its minimalist interface makes the conversion process seamless and intuitive.",
    ],
    imagePath: "/assets/projects/filevert.png",
    imageAlt: "Filevert file conversion tool",
    techStack: ["Next.js", "TailwindCSS", "FFMPEG"],
    category: "fullstack",
    features: [
      "Drag and drop file upload",
      "Multiple format conversion support",
      "Real-time conversion feedback",
      "Simple and responsive interface",
    ],
    repo: "https://github.com/DeihlReyes/filevert",
    demo: "https://filevert.vercel.app",
    year: 2024,
    featured: false,
  },
  {
    slug: "quizwiz",
    title: "QuizWiz",
    description:
      "Advanced quiz app powered by Gemini AI, generating personalized quizzes based on user preferences. Adapts to individual learning styles.",
    longDescription: [
      "QuizWiz is an experimental education app that uses Google's Gemini AI to create adaptive quizzes.",
      "It personalizes content based on topics selected by users and returns immediate learning feedback.",
    ],
    imagePath: "/assets/projects/quizwiz.png",
    imageAlt: "QuizWiz AI quiz application",
    techStack: ["Next.js", "TailwindCSS", "Gemini API"],
    category: "ai",
    features: [
      "AI-generated quiz questions",
      "Topic and difficulty selection",
      "Dynamic scoring and feedback",
      "Responsive and user-friendly interface",
    ],
    repo: "https://github.com/DeihlReyes/next-quizwiz",
    demo: "https://quizwiz-vert.vercel.app/",
    year: 2023,
    featured: false,
  },
  {
    slug: "progroup-ebike",
    title: "Pro Group E-bike and Scooter",
    description:
      "E-commerce website for Pro Group's electric bike and scooter brand. Built with CMS-managed content, product catalog, and integrated payment via Xendit.",
    longDescription: [
      "This website was developed to help Pro Group promote and sell its range of electric bikes and scooters online.",
      "Users can browse models, read product specs, and complete purchases directly through Xendit-integrated checkout.",
    ],
    imagePath: "/assets/projects/progroup.png",
    imageAlt: "Pro Group E-bike and Scooter website",
    techStack: ["Next.js", "TailwindCSS", "Wix Headless CMS", "Xendit"],
    category: "client-work",
    features: [
      "Product catalog with CMS integration",
      "Online checkout via Xendit",
      "Responsive and accessible UI",
      "Product highlights and promo banners",
    ],
    disclaimer:
      "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
    demo: "https://www.progroup.com.ph/",
    year: 2024,
    featured: false,
  },
  {
    slug: "ov-realty",
    title: "OV Realty",
    description:
      "Real estate website built for OV Realty Corporation. Features modern design, dynamic property listings, and CMS-powered content management.",
    longDescription: [
      "This real estate platform showcases properties managed by OV Realty, complete with listings, photos, and inquiry forms.",
      "Built to support easy client updates and lead capture through headless CMS features.",
    ],
    imagePath: "/assets/projects/ovrealty.png",
    imageAlt: "OV Realty Corporation website",
    techStack: ["Next.js", "TailwindCSS", "Wix Headless CMS"],
    category: "client-work",
    features: [
      "Property listing and inquiry forms",
      "CMS-driven content updates",
      "Map-based property display",
      "Clean layout for easy browsing",
    ],
    disclaimer:
      "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
    demo: "https://www.ovrealtycorp.com/",
    year: 2024,
    featured: false,
  },
  {
    slug: "ap-creative",
    title: "AP Creative Main",
    description:
      "Corporate website for AP Creative, serving as the central hub for the company's profile, service overview, and contact inquiries.",
    longDescription: [
      "AP Creative's official site designed to represent the brand and services across digital and events verticals.",
      "Offers flexible CMS for updates and integrates lead generation features via forms.",
    ],
    imagePath: "/assets/projects/apcreative-main.png",
    imageAlt: "AP Creative corporate website",
    techStack: ["Next.js", "TailwindCSS", "Wix Headless CMS"],
    category: "client-work",
    features: [
      "Company profile and service overview",
      "CMS-managed content updates",
      "Contact form integration",
      "Responsive layout across devices",
    ],
    disclaimer:
      "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
    demo: "https://www.apcreativecorp.com/",
    year: 2024,
    featured: false,
  },
  {
    slug: "ap-creative-events",
    title: "AP Creative Events",
    description:
      "Portfolio-style site dedicated to the agency's events and exhibitions team. Highlights event coverage, services, and past projects.",
    longDescription: [
      "This microsite highlights AP Creative's expertise in event management and execution.",
      "It includes case studies, event media, and descriptive service breakdowns.",
    ],
    imagePath: "/assets/projects/apcreative-events.png",
    imageAlt: "AP Creative Events website",
    techStack: ["Next.js", "TailwindCSS", "Wix Headless CMS"],
    category: "client-work",
    features: [
      "Visual showcase of event projects",
      "Service and capability presentation",
      "CMS-based event management",
      "Optimized for performance and mobile",
    ],
    disclaimer:
      "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
    demo: "https://events.apcreativecorp.com/",
    year: 2024,
    featured: false,
  },
  {
    slug: "ap-creative-marketing",
    title: "AP Creative Marketing",
    description:
      "Landing page for the marketing arm of AP Creative. Focused on showcasing digital services, brand work, and client strategies.",
    longDescription: [
      "This landing page promotes the digital marketing capabilities of AP Creative with a portfolio of past campaigns.",
      "It allows dynamic updates and streamlined presentation of service offerings.",
    ],
    imagePath: "/assets/projects/apcreative-marketing.png",
    imageAlt: "AP Creative Marketing website",
    techStack: ["Next.js", "TailwindCSS", "Wix Headless CMS"],
    category: "client-work",
    features: [
      "Showcase of marketing campaigns",
      "CMS-powered content management",
      "Project highlight sections",
      "Fully responsive design",
    ],
    disclaimer:
      "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
    demo: "https://marketing.apcreativecorp.com/",
    year: 2024,
    featured: false,
  },
  {
    slug: "gdsc-website",
    title: "GDSC UE Caloocan Website",
    description:
      "Official website for Google Developer Student Clubs UE Caloocan, showcasing club activities and resources for the student developer community.",
    longDescription: [
      "This platform was created to centralize information about GDSC UE Caloocan's initiatives and resources.",
      "It features event archives, speaker profiles, and tech community updates built with Astro JS.",
    ],
    imagePath: "/assets/projects/gdsc.png",
    imageAlt: "GDSC UE Caloocan website",
    techStack: ["Astro JS", "TailwindCSS", "TypeScript"],
    category: "open-source",
    features: [
      "Event and activity showcase",
      "Mobile-first design",
      "Community and membership sections",
      "Clean and accessible layout",
    ],
    repo: "https://github.com/DeihlReyes/gdsc-uecal-website",
    demo: "https://gdsc-uec.vercel.app/",
    year: 2023,
    featured: false,
  },
];
