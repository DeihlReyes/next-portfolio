"use client";

import { Timeline } from "../ui/timeline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    date: "July 2024 – Present",
    role: "Full Stack Web Developer",
    company: "AP Creative Corporation",
    bullets: [
      "Sole developer managing the complete lifecycle of company web applications, from planning and UI/UX design to testing and deployment.",
      "Worked closely with the CEO to ensure alignment on tools, technical decisions, and business objectives.",
      "Developed and launched five web platforms using Wix Headless CMS and Vercel, overseeing domain setup, hosting, performance optimization, and CMS integration.",
      "Enhanced team collaboration by leading client meetings, clarifying task workflows, and delivering presentations aligned with business goals.",
      "Boosted website SEO and responsiveness, significantly increasing PageSpeed and Lighthouse performance scores.",
      "Key Projects: E-Bike E-Commerce Website (Next.js, Wix Headless Studio, Xendit), Real Estate Website (Google Maps API, lead capture), Marketing Agency Sites, Real Estate Admin Dashboard (Next.js, Prisma, PostgreSQL), Property Developer Website.",
    ],
  },
  {
    date: "May 2023 – July 2023",
    role: "Full Stack Developer Intern",
    company: "Achieve Without Borders Inc.",
    bullets: [
      "Resolved bugs, improving platform stability and user satisfaction.",
      "Gained recognition for consistent performance, leading to more complex tasks.",
      "Proposed new search technologies for better performance and user experience.",
      "Fixed a cloud function bug impacting purchase status tracking.",
      "Utilized Flutter for front-end and Node.js for back-end integration.",
      "Engaged in code reviews, agile stand-ups, and design discussions to ensure quality and timelines.",
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

const timelineData = experiences.map((exp) => ({
  title: exp.date,
  content: (
    <div>
      <p className="mb-4 text-xs md:text-sm lg:text-base font-normal text-neutral-800 dark:text-neutral-200">
        <span className="font-bold">{exp.role}</span> @{" "}
        <span className="font-semibold">{exp.company}</span>
      </p>
      <ul className="mb-8 list-disc pl-5 space-y-2 text-xs md:text-sm lg:text-base font-normal text-neutral-800 dark:text-neutral-200">
        {exp.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  ),
}));

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col justify-center items-start px-8 pt-32 lg:pt-36 max-w-7xl mx-auto h-full"
    >
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </motion.section>
  );
};

export default ExperiencePage;
