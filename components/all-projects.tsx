"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { projects } from "@/constants/projects";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

import { FC } from "react";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  demo?: string;
  repo?: string;
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
    >
      <div
        className={`flex flex-col lg:flex-row gap-16 items-center ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Project Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95, x: isEven ? -20 : 20 },
            visible: {
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="w-full lg:w-1/2"
        >
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
              <Image
                className="object-cover w-full aspect-[16/10]"
                src={project.image}
                alt={`${project.title} screenshot`}
                quality={90}
                priority={index === 0}
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
            },
          }}
          className="w-full lg:w-1/2 space-y-8"
        >
          {/* Project Header */}
          <div className="space-y-6">
            <h3 className="text-xl uppercase font-bold text-gray-900 leading-tight">
              {project.title}
            </h3>
            <p className="text-md text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-caption text-gray-500 font-medium">
              Built with:
            </p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, techIndex) => (
                <motion.div
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
                  <Badge variant="secondary">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.3, delay: 0.4 },
              },
            }}
            className="flex gap-4 pt-4"
          >
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-2 group">
                  <span>View Live</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Button>
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="flex items-center gap-2 group"
                  variant="outline"
                >
                  <span>View Code</span>
                  <Github
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    size={16}
                  />
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  return (
    <div className="space-y-32">
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default AllProjects;
