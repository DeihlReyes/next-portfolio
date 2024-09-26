"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { projects } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectCarousel from "./project-carousel";

import { FC } from "react";

import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData[];
  techStack: string[];
  demo: string;
  repo: string;
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

const ProjectItem: FC<ProjectItemProps> = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-center items-center gap-6 sm:gap-8 lg:gap-12 w-full mb-16 sm:mb-24 lg:mb-32`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        }}
        className="w-full lg:w-1/2"
      >
        <ProjectCarousel projectImages={project.image} />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          },
        }}
        className="w-full lg:w-1/2 lg:mb-8"
      >
        <h2 className="text-xl sm:text-2xl font-bold mt-4 lg:mt-0">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base mt-3 sm:mt-4">
          {project.description}
        </p>
        <div>
          <ul className="flex flex-wrap gap-2 mt-3 sm:mt-6">
            {project.techStack.map((tech, techIndex) => (
              <motion.li
                key={techIndex}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.1 * techIndex },
                  },
                }}
              >
                <Badge className="py-1 text-xs sm:text-sm">{tech}</Badge>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
          }}
          className="flex gap-3 mt-4 sm:mt-10"
        >
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2">
              Demo
            </Button>
          </Link>
          <Link href={project.repo} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"secondary"}
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
            >
              Repo
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

const FeaturedProjects = () => {
  const featuredProjects = projects;
  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {featuredProjects.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </ul>
  );
};

export default FeaturedProjects;
