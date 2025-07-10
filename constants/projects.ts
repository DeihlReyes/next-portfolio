import taskquill1 from "@/assets/projects/taskquill.png";
import satiscript1 from "@/assets/projects/satiscript_img2.png";
import filevert1 from "@/assets/projects/filevert.png";
import gdsc from "@/assets/projects/gdsc.png";
import quizwiz from "@/assets/projects/quizwiz.png";
import apcreative from "@/assets/projects/apcreative-main.png";
import apcreativemarketing from "@/assets/projects/apcreative-marketing.png";
import apcreativeevents from "@/assets/projects/apcreative-events.png";
import progroup from "@/assets/projects/progroup.png";
import ovrealty from "@/assets/projects/ovrealty.png";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  features?: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Satiscript",
    description:
      "AI-powered call center tool generating tailored agent scripts to boost customer satisfaction. Features a performance dashboard for real-time monitoring. Awarded 1st Runner Up in our Engineering Research Colloquium.",
    image: satiscript1,
    techStack: ["Python", "Machine Learning", "OpenAI API", "Next JS"],
    features: [
      "AI-powered script generation",
      "Real-time performance dashboard",
      "Customizable agent profiles",
      "Call analytics and insights",
    ],
    repo: "https://github.com/DeihlReyes/satiscript",
    demo: "https://satiscript.vercel.app",
  },
  {
    title: "Pro Group E-bike and Scooter",
    description:
      "E-commerce website for Pro Group’s electric bike and scooter brand. Built with CMS-managed content, product catalog, and integrated payment via Xendit for smooth online transactions.",
    image: progroup,
    techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS", "Xendit"],
    features: [
      "Product catalog with CMS integration",
      "Online checkout via Xendit",
      "Responsive and accessible UI",
      "Product highlights and promo banners",
    ],
    demo: "https://www.progroup.com.ph/",
  },
  {
    title: "TaskQuill",
    description:
      "Intuitive task management app streamlining productivity for individuals and teams. Offers a user-friendly dashboard for efficient organization of tasks, projects, and meetings.",
    image: taskquill1,
    techStack: ["Next JS", "Clerk", "TailwindCSS", "Prisma", "PostgreSQL"],
    features: [
      "User authentication and authorization",
      "Task creation and management",
      "Project organization",
      "Real-time collaboration",
      "Progress tracking and analytics",
    ],
    repo: "https://github.com/DeihlReyes/TaskQuill",
    demo: "https://taskquill.vercel.app",
  },
  {
    title: "OV Realty",
    description:
      "Real estate website built for OV Realty Corporation. Features modern design, dynamic property listings, and CMS-powered content management for marketing and updates.",
    image: ovrealty,
    techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
    features: [
      "Property listing and inquiry forms",
      "CMS-driven content updates",
      "Map-based property display",
      "Clean layout for easy browsing",
    ],
    demo: "https://www.ovrealtycorp.com/",
  },
  {
    title: "AP Creative Main",
    description:
      "Corporate website for AP Creative, serving as the central hub for the company’s profile, service overview, and contact inquiries. Built for clarity, responsiveness, and content flexibility through a headless CMS.",
    image: apcreative,
    techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
    features: [
      "Company profile and service overview",
      "CMS-managed content updates",
      "Contact form integration",
      "Responsive layout across devices",
    ],
    demo: "https://www.apcreativecorp.com/",
  },
  {
    title: "AP Creative Events",
    description:
      "Portfolio-style site dedicated to the agency’s events and exhibitions team. Highlights event coverage, services, and past projects in a bold yet minimalist layout.",
    image: apcreativeevents,
    techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
    features: [
      "Visual showcase of event projects",
      "Service and capability presentation",
      "CMS-based event management",
      "Optimized for performance and mobile",
    ],
    demo: "https://events.apcreativecorp.com/",
  },
  {
    title: "AP Creative Marketing",
    description:
      "Landing page for the marketing arm of AP Creative. Focused on showcasing digital services, brand work, and client strategies with seamless CMS integration for dynamic updates.",
    image: apcreativemarketing,
    techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
    features: [
      "Showcase of marketing campaigns",
      "CMS-powered content management",
      "Project highlight sections",
      "Fully responsive design",
    ],
    demo: "https://marketing.apcreativecorp.com/",
  },
  {
    title: "Filevert",
    description:
      "Versatile file conversion tool with a simple interface for quick and easy format transformations. Streamlines workflow for users dealing with multiple file types.",
    image: filevert1,
    techStack: ["Next JS", "TailwindCSS", "FFMPEG"],
    features: [
      "Drag and drop file upload",
      "Multiple format conversion support",
      "Real-time conversion feedback",
      "Simple and responsive interface",
    ],
    repo: "https://github.com/DeihlReyes/filevert",
    demo: "https://filevert.vercel.app",
  },
  {
    title: "QuizWiz",
    description:
      "Advanced quiz app powered by Gemini AI, generating personalized quizzes based on user preferences. Adapts to individual learning styles, ideal for students, educators, and lifelong learners.",
    image: quizwiz,
    techStack: ["NextJS", "TailwindCSS", "Gemini API"],
    features: [
      "AI-generated quiz questions",
      "Topic and difficulty selection",
      "Dynamic scoring and feedback",
      "Responsive and user-friendly interface",
    ],
    repo: "https://github.com/DeihlReyes/next-quizwiz",
    demo: "https://quizwiz-vert.vercel.app/",
  },
  {
    title: "Google Developer Student Clubs - UE Caloocan Website",
    description:
      "Official website for GDSC UE Caloocan, showcasing club activities and resources. As associate developer, contributed to creating an engaging platform fostering student developer community.",
    image: gdsc,
    techStack: ["Astro JS", "TailwindCSS", "TypeScript"],
    features: [
      "Event and activity showcase",
      "Mobile-first design",
      "Community and membership sections",
      "Clean and accessible layout",
    ],
    repo: "https://github.com/DeihlReyes/gdsc-uecal-website",
    demo: "https://gdsc-uec.vercel.app/",
  },
];
