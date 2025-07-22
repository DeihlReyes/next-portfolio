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
import ridingBehaviorApp from "@/assets/projects/riding-behavior-app.jpg";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  features?: string[];
  overview?: string;
  disclaimer?: string;
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
      "Real-time AI script generation using OpenAI GPT",
      "Customer emotion detection via fine-tuned BERT model",
      "Live transcription during active calls",
      "Dashboard for data analysis and visualization",
    ],
    repo: "https://github.com/DeihlReyes/satiscript",
    demo: "https://satiscript.vercel.app",
    overview: `<p>Satiscript is a smart AI-powered tool designed for call centers to improve agent communication through dynamic scripting.</p>
    </br>
    <p>It features real-time dashboards, performance tracking, and insights tailored to customer satisfaction goals.</p>
    </br>
    <p>This project was awarded 1st Runner Up at UE Caloocan's Engineering Research Colloquium.</p>
    `,
  },
  // {
  //   title: "Pro Group E-bike and Scooter",
  //   description:
  //     "E-commerce website for Pro Group's electric bike and scooter brand. Built with CMS-managed content, product catalog, and integrated payment via Xendit for smooth online transactions.",
  //   image: progroup,
  //   techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS", "Xendit"],
  //   features: [
  //     "Product catalog with CMS integration",
  //     "Online checkout via Xendit",
  //     "Responsive and accessible UI",
  //     "Product highlights and promo banners",
  //   ],
  //   disclaimer:
  //     "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
  //   demo: "https://www.progroup.com.ph/",
  //   overview: `<p>This website was developed to help Pro Group promote and sell its range of electric bikes and scooters online.</p>
  //   </br>
  //   <p>Users can browse models, read product specs, and complete purchases directly through Xendit-integrated checkout.</p>
  //   `,
  // },
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
    overview: `<p>TaskQuill is a productivity-focused application for individuals and teams looking to manage work efficiently.</p>
    </br>
    <p>It supports user authentication, project creation, task assignment, and real-time updates using modern web technologies.</p>
    `,
  },
  {
    title: "Riding Behavior Monitoring App",
    description:
      "Real-time motorcycle monitoring system built on Raspberry Pi. Features LSTM-based riding behavior prediction and smart OBD-II diagnostics with alerts for battery and engine health.",
    image: ridingBehaviorApp, // replace with your image variable
    techStack: [
      "Python",
      "TensorFlow/Keras",
      "HTML/CSS/JS",
      "Raspberry Pi",
      "MPU6050",
      "OBD-II",
    ],
    features: [
      "LSTM-based riding behavior prediction",
      "Live stream of MPU6050 sensor data",
      "Real-time OBD-II engine diagnostics",
      "Smart alerts for battery and coolant health",
      "Dashboard with behavior trends",
      "Touchscreen-optimized UI",
    ],
    repo: "https://github.com/DeihlReyes/Vehicle-Monitoring", // update if available
    overview: `
      <p>This personal project monitors motorcycle diagnostics and riding behavior using real-time sensor data and machine learning.</p>
      </br>
      <p>I independently designed and developed the entire system from hardware integration and backend logic to training the LSTM model and building the frontend UI.</p>
      </br>
      <p>The app runs on a Raspberry Pi with a 7-inch touchscreen and combines MPU6050 motion data with OBD-II engine readings. It classifies riding patterns and triggers smart alerts for battery and coolant issues.</p>
    `,
  },
  // {
  //   title: "OV Realty",
  //   description:
  //     "Real estate website built for OV Realty Corporation. Features modern design, dynamic property listings, and CMS-powered content management for marketing and updates.",
  //   image: ovrealty,
  //   techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
  //   features: [
  //     "Property listing and inquiry forms",
  //     "CMS-driven content updates",
  //     "Map-based property display",
  //     "Clean layout for easy browsing",
  //   ],
  //   disclaimer:
  //     "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
  //   demo: "https://www.ovrealtycorp.com/",
  //   overview: `<p>This real estate platform showcases properties managed by OV Realty, complete with listings, photos, and inquiry forms.</p>
  //   </br>
  //   <p>Built to support easy client updates and lead capture through headless CMS features.</p>
  //   `,
  // },
  // {
  //   title: "AP Creative Main",
  //   description:
  //     "Corporate website for AP Creative, serving as the central hub for the company's profile, service overview, and contact inquiries. Built for clarity, responsiveness, and content flexibility through a headless CMS.",
  //   image: apcreative,
  //   techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
  //   features: [
  //     "Company profile and service overview",
  //     "CMS-managed content updates",
  //     "Contact form integration",
  //     "Responsive layout across devices",
  //   ],
  //   disclaimer:
  //     "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
  //   demo: "https://www.apcreativecorp.com/",
  //   overview: `<p>AP Creative's official site designed to represent the brand and services across digital and events verticals.</p>
  //   </br>
  //   <p>Offers flexible CMS for updates and integrates lead generation features via forms.</p>
  //   `,
  // },
  // {
  //   title: "AP Creative Events",
  //   description:
  //     "Portfolio-style site dedicated to the agency's events and exhibitions team. Highlights event coverage, services, and past projects in a bold yet minimalist layout.",
  //   image: apcreativeevents,
  //   techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
  //   features: [
  //     "Visual showcase of event projects",
  //     "Service and capability presentation",
  //     "CMS-based event management",
  //     "Optimized for performance and mobile",
  //   ],
  //   disclaimer:
  //     "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
  //   demo: "https://events.apcreativecorp.com/",
  //   overview: `<p>This microsite highlights AP Creative's expertise in event management and execution.</p>
  //   </br>
  //   <p>It includes case studies, event media, and descriptive service breakdowns.</p>
  //   `,
  // },
  // {
  //   title: "AP Creative Marketing",
  //   description:
  //     "Landing page for the marketing arm of AP Creative. Focused on showcasing digital services, brand work, and client strategies with seamless CMS integration for dynamic updates.",
  //   image: apcreativemarketing,
  //   techStack: ["Next JS", "TailwindCSS", "Wix Headless CMS"],
  //   features: [
  //     "Showcase of marketing campaigns",
  //     "CMS-powered content management",
  //     "Project highlight sections",
  //     "Fully responsive design",
  //   ],
  //   disclaimer:
  //     "Developed this website as part of my role at AP Creative. All rights to content and branding belong to the client.",
  //   demo: "https://marketing.apcreativecorp.com/",
  //   overview: `<p>This landing page promotes the digital marketing capabilities of AP Creative with a portfolio of past campaigns.</p>
  //   </br>
  //   <p>It allows dynamic updates and streamlined presentation of service offerings.</p>
  //   `,
  // },
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
    overview: `<p>Filevert is a browser-based utility that lets users convert files quickly using FFMPEG on the backend.</p>       
    </br>
    <p>Its minimalist interface makes the conversion process seamless and intuitive.</p>
    `,
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
    overview: `<p>QuizWiz is an experimental education app that uses Google's Gemini AI to create adaptive quizzes.</p>       
    </br>
    <p>It personalizes content based on topics selected by users and returns immediate learning feedback.</p>
    `,
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
    overview: `<p>This platform was created to centralize information about GDSC UE Caloocan's initiatives and resources.</p>       
    </br>
    <p>It features event archives, speaker profiles, and tech community updates built with Astro JS.</p>
    `,
  },
];
