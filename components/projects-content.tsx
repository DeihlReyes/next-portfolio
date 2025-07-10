"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectsGrid from "./projects-grid";

export default function ProjectsContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <div className="min-h-screen bg-white">
      {/* Projects Grid */}
      <div className="container">
        <ProjectsGrid />
      </div>
    </div>
  );
}
