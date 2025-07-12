"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const experiences = [
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
    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "TypeScript",
      "Firebase",
      "Agile",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ExperienceContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto px-4 container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto py-16 md:py-24"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-sm md:text-base text-gray-500 mb-4 font-medium">
              Experience
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Journey
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My experience spans from internships to full-stack development,
              with a focus on building scalable web applications and delivering
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center relative z-10">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            {exp.role}
                          </h3>
                          <span className="text-sm md:text-base text-gray-500 font-medium">
                            {exp.date}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-700 mb-3">
                          {exp.company}
                        </p>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} className="text-xs md:text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-3 text-gray-600">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-base leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
