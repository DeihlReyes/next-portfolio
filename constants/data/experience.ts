export interface Experience {
  date: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    date: "July 2024 – Present",
    role: "Full Stack Web Developer",
    company: "AP Creative Corporation",
    description:
      "Responsible for building internal systems and client-facing websites that support business operations and digital presence across multiple industries.",
    bullets: [
      "Built and maintained a custom internal HRIS system with request handling, disciplinary tracking, time log visibility via biometric integration, and a task management feature.",
      "Developed and deployed websites and e-commerce platforms for businesses in real estate, events, and retail using Next.js, PostgreSQL, Prisma, and Tailwind CSS.",
      "Handled full-stack responsibilities from UI planning and backend development to deployment using Vercel and integration with CMS platforms like Wix Headless.",
      "Integrated third-party services such as Xendit API for payment, Google Maps API for location-based listings, and custom domain configurations.",
      "Collaborated with company leadership to ensure technical solutions aligned with internal processes and client expectations.",
    ],
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
      "Wix Headless CMS",
      "Xendit",
      "Google Maps API",
    ],
  },
  {
    date: "May 2023 – July 2023",
    role: "Full Stack Developer Intern",
    company: "Achieve Without Borders Inc.",
    description:
      "Assisted in the development of a merchant-facing e-commerce platform while learning Agile practices and strengthening frontend and backend development skills.",
    bullets: [
      "Resolved bugs and handled feature tickets using Flutter (Dart) for the frontend and Node.js (TypeScript) for backend services.",
      "Fixed a critical cloud function issue that prevented purchase status updates, improving reliability across the platform.",
      "Participated in agile team rituals such as daily stand-ups, sprint planning, and retrospectives while collaborating with QAs, designers, and engineers.",
      "Studied internal task workflows, received mentorship from senior developers, and gained experience inspecting large-scale codebases.",
      "Researched Algolia as a potential improvement for platform-wide search performance.",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "TypeScript", "Firebase", "Agile"],
  },
];
