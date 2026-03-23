// Re-exports for backward compatibility (chatbot uses portfolioDetails)
export { projects } from "./data/projects";
export { experiences } from "./data/experience";

export const headerLinks = [
  { label: "Home", route: "/" },
  { label: "Experience", route: "/experience" },
  { label: "Projects", route: "/projects" },
  { label: "Blog", route: "/blog" },
];

export const portfolioDetails = `
Name: Deihl Arron Reyes
Nickname: Deihl
Most Recent Company: AP Creative Corporation (July 2024 – February 2026)
Occupation: Full Stack Web Developer
Age: 24
Development Experience: 3 years
Professional Work Experience: 1.5 years
Location: Quezon City, Philippines
Main Tech Stack: Next.js 15, TypeScript, PostgreSQL, Prisma ORM, TailwindCSS.
Other Skills: JavaScript, React.js, Node.js, Python, MySQL, Firebase, Flutter, OpenAI API, Git, Docker, Agile (Scrum), CI/CD

Experiences = [
  {
    date: "July 2024 – February 2026",
    role: "Full Stack Web Developer",
    company: "AP Creative Corporation",
    bullets: [
      "Architected and deployed an enterprise HRIS platform from scratch serving 150+ employees across 4 companies with MFA, RBAC, and automated approval workflows — eliminating annual third-party HRIS software costs.",
      "Led technical development and mentored a junior developer since November 2024, conducting code reviews and establishing coding standards.",
      "Automated 600+ annual HR workflow requests, reducing manual processing time by 60% and enabling remote CEO approval for payroll operations.",
      "Integrated Crosschex biometric API for real-time attendance tracking with a self-service employee portal.",
      "Engineered a 5-stage disciplinary case management system replacing fragmented Excel and paper-based processes.",
      "Improved e-commerce platform load time by 72% (5.7s → 1.6s) through Next.js SSR, image optimization, and code splitting.",
      "Integrated Xendit payment gateway for high-value product transactions (₱17,000–₱120,000)."
    ],
  },
  {
    date: "May 2023 – July 2023",
    role: "Full Stack Developer Intern",
    company: "Achieve Without Borders Inc.",
    bullets: [
      "Collaborated with a cross-functional team of 8+ on a merchant e-commerce platform using Flutter, Node.js (TypeScript), and Firebase.",
      "Resolved a critical production checkout bug (cloud function race condition) that was deployed to production and recognized by the team lead.",
      "Researched and presented Algolia search integration findings that were subsequently adopted in production.",
      "Participated in daily standups, sprint planning, and code reviews in an Agile/Scrum environment."
    ],
  },
];

Projects:

1. Satiscript: AI-powered emotion detection and script generation tool for call centers. Fine-tuned BERT model with 89% accuracy across 7 emotion categories. Awarded 1st Runner-Up, Best Research Paper at UE Caloocan 2024.
   - Repo: https://github.com/DeihlReyes/satiscript
   - Demo: https://satiscript.vercel.app

2. Pro Group E-Bike & Scooter: E-commerce site with Wix Headless CMS and Xendit payment integration.
   - Demo: https://www.progroup.com.ph/

3. TaskQuill: Task management app with user authentication, project tracking, and real-time collaboration.
   - Repo: https://github.com/DeihlReyes/TaskQuill
   - Demo: https://taskquill.vercel.app

4. OV Realty: Real estate website with CMS-powered property listings and Google Maps integration.
   - Demo: https://www.ovrealtycorp.com/

5. AP Creative Sites: Multiple web platforms built for corporate, marketing, and events verticals.
   - Main: https://www.apcreativecorp.com/
   - Marketing: https://marketing.apcreativecorp.com/
   - Events: https://events.apcreativecorp.com/

6. Filevert: Browser-based file conversion tool using Next.js and FFMPEG.
   - Repo: https://github.com/DeihlReyes/filevert
   - Demo: https://filevert.vercel.app

7. QuizWiz: Adaptive quiz generator powered by Gemini AI.
   - Repo: https://github.com/DeihlReyes/next-quizwiz
   - Demo: https://quizwiz-vert.vercel.app/

8. GDSC UE Caloocan Website: Official student developer club site built with Astro.js.
   - Repo: https://github.com/DeihlReyes/gdsc-uecal-website
   - Demo: https://gdsc-uec.vercel.app/

Education: BS Computer Engineering, University of the East – Caloocan (2019–2024). Exemplary Academic Performance (SY 2021–2022). 1st Runner-Up, Best Research Paper (2024) — Satiscript.
GDSC UE Caloocan: Associate Web Development Lead. Led a team of 4 developers, facilitated workshops, and mentored 50+ beginner developers.

Email: reyes.deihlarron@gmail.com | Phone Number: 0917-115-8829
`;
