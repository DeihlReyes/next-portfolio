"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-center items-center gap-12 w-full`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        }}
        className="w-full lg:w-1/2"
      >
        <ProjectCarousel projectImages={project.image} />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          },
        }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-xl lg:text-3xl font-bold">{project.title}</h2>
        <p className="text-sm lg:text-lg mt-6">{project.description}</p>
        <div>
          <ul className="flex flex-wrap lg:flex-row gap-2 mt-5">
            {project.techStack.map((tech, techIndex) => (
              <motion.li
                key={techIndex}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.1 * techIndex },
                  },
                }}
                className="flex flex-row gap-2"
              >
                <Badge className="py-1">{tech}</Badge>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3, delay: 0.6 } },
          }}
          className="space-x-2"
        >
          <Link href={project.demo} target="_blank">
            <Button className="mt-10 lg:w-20">Demo</Button>
          </Link>
          <Link href={project.repo} target="_blank">
            <Button className="mt-10 lg:w-20">Repo</Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.li>
  );
};

const FeaturedProjects = () => {
  const featuredProjects = projects;
  return (
    <div>
      <ul className="flex flex-col justify-center items-center gap-32 lg:gap-40 h-full">
        {featuredProjects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedProjects;
