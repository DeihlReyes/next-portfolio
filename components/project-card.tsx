"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  features?: string[];
  demo?: string;
  repo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full"
    >
      <Link
        href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <Image
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              src={project.image}
              alt={`${project.title} screenshot`}
              quality={90}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

            {/* External links overlay */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="text-gray-700" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} className="text-gray-700" />
                </a>
              )}
            </div>
          </div>

          {/* Project Content */}
          <CardHeader className="pb-4">
            <CardTitle className="text-lg line-clamp-2 group-hover:text-gray-900 transition-colors">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <p className="text-caption text-gray-500 font-medium">
                Built with:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.techStack.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
