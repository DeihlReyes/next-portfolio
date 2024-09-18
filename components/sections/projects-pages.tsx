"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import FeaturedProjects from "../featured-projects";

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
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col justify-center items-center px-8 py-16 lg:py-32 h-full"
    >
      <div className="flex flex-col gap-12 justify-center items-start w-full max-w-7xl h-full">
        <div className="">
          <motion.div
            variants={itemVariants}
            className="h-[4px] w-20 lg:w-28 bg-[#161616] mb-12"
          ></motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-3xl lg:text-[50px] font-bold mb-4 lg:mb-8"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base lg:text-lg text-left mb-6 lg:pr-4"
          >
            Here are some projects that I have built.
          </motion.p>
        </div>
        <FeaturedProjects />
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
