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
    date: "July 2024 – February 2026",
    role: "Full Stack Web Developer",
    company: "AP Creative Corporation",
    description:
      "Architected and led full-stack development of enterprise internal systems and client-facing web platforms, delivering measurable business impact across HR operations, e-commerce, and digital presence for multiple organizations.",
    bullets: [
      "Architected and deployed an enterprise HRIS platform from scratch serving 150+ employees across 4 companies — featuring multi-factor authentication, RBAC, and automated approval workflows, eliminating annual third-party HRIS software costs.",
      "Led technical development and mentored a junior developer since November 2024, conducting code reviews, establishing coding standards, and driving best practices across a Next.js 15, TypeScript, and PostgreSQL stack.",
      "Automated 600+ annual HR workflow requests (leave, overtime, change schedule, offset hours), reducing manual processing time by 60% and enabling a remote CEO approval system that eliminated last-minute payroll delays.",
      "Integrated Crosschex biometric API for real-time attendance tracking with an employee self-service portal, implementing robust error handling for strict API rate limiting constraints.",
      "Engineered a 5-stage disciplinary case management system (Incident Report → Notice to Explain → Written Explanation → Conference → Decision), replacing fragmented Excel sheets and paper processes with a centralized, compliance-ready digital system.",
      "Improved e-commerce platform load time by 72% (5.7s → 1.6s) through Next.js SSR, image optimization, and code splitting — boosting Google PageSpeed scores by 30–40 points and significantly improving mobile user experience.",
      "Integrated Xendit payment gateway for a high-value product platform (₱17,000–₱120,000), enabling secure transaction processing with order confirmation workflows.",
    ],
    technologies: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
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
      "Contributed to a merchant-facing e-commerce platform within a cross-functional Agile team of 8+, building features in Flutter and Node.js while developing professional engineering practices.",
    bullets: [
      "Collaborated with a cross-functional team of 8+ developers, product managers, QA engineers, and UI/UX designers on a merchant e-commerce platform using Flutter, Node.js (TypeScript), and Firebase.",
      "Identified and resolved a critical production bug in the checkout flow — a cloud function race condition causing customer orders not to appear on the merchant dashboard — fix was deployed to production and recognized by the team lead.",
      "Conducted technical feasibility research on Algolia search integration, evaluated implementation approaches, and presented findings that were subsequently adopted into production.",
      "Participated in daily standups, sprint planning, and code reviews, building fluency in Git branching strategies, pull request workflows, and automated CI/CD pipelines.",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "TypeScript", "Firebase", "Agile/Scrum"],
  },
];
