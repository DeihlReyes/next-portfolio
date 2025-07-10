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
      {/* Header */}
      <div className="bg-gray-50 border-b py-8 sm:py-12">
        <div className="container py-6 sm:py-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-section-title text-gray-900 mb-6">
                All Projects
              </h1>
              <p className="text-body text-gray-600 leading-relaxed max-w-3xl">
                A collection of my work showcasing full-stack development,
                modern web technologies, and user-centric design principles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container">
        <ProjectsGrid />
      </div>
    </div>
  );
}
