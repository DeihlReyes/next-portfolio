"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../ui/badge";

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

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="md:py-20 py-12 gradient-bg-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-label text-gray-500 mb-4">Experience</p>
            <h2 className="text-section-title text-gray-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              My experience spans from internships to full-stack development,
              with a focus on building scalable web applications and delivering
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200"></div>
                )}

                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.role}
                        </h3>
                        <span className="text-caption text-gray-500 font-medium">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-gray-700 mb-3">
                        {exp.company}
                      </p>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex}>{tech}</Badge>
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
                          <span className="text-body-small leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;
