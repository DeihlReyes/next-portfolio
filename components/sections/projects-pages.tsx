"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import FeaturedProjectsGrid from "../featured-projects-grid";
import Link from "next/link";

const ProjectsPage = () => {
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
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-label text-gray-500 mb-4">My Work</p>
            <h2 className="text-section-title text-gray-900 mb-6">Projects</h2>
            <p className="text-body max-w-2xl mx-auto leading-relaxed">
              A collection of projects that showcase my expertise in full-stack
              development, UI/UX design, and problem-solving across various
              technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <FeaturedProjectsGrid />
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-12"
          >
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20 md:mt-32"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl md:rounded-3xl p-8 md:p-12">
              <h3 className="text-subtitle font-semibold text-gray-900 mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to bring your ideas to life. I&apos;m
                always excited to take on new challenges and create something
                amazing.
              </p>
              <Button asChild>
                <Link href="/contact">Start a project</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
