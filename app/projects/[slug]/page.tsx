import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, AlertTriangle } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Find the project based on the slug
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b py-12">
        <div className="container py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-section-title text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-body text-gray-600 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start py-20">
          {/* Project Image */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                className="w-full object-cover"
                src={project.image}
                alt={`${project.title} screenshot`}
                quality={90}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2 group">
                    <span>View Live</span>
                    <ExternalLink
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
                  <Button variant="outline" className="flex items-center gap-2">
                    <span>View Code</span>
                    <Github size={16} />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Key Features
                </h2>
                <ul className="space-y-3 text-body-small text-gray-600">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Overview */}
            {project.overview && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Project Overview
                </h2>
                <div className="space-y-4 text-body-small text-gray-600 leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: project.overview }} />
                </div>
              </div>
            )}

            {/* Project Disclaimer */}
            {project.disclaimer && (
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 pl-4">
                  <p className="text-sm text-gray-600 italic">
                    {project.disclaimer}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
