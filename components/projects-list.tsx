import { projects } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectList = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-52">
      {projects.map((project, index) => (
        <div
          className="border bg-card shadow-md shadow-slate-300 p-6 rounded-lg md:border-none md:bg-transparent md:shadow-none md:p-0 md:rounded-none max-w-6xl w-full md:relative flex flex-col md:flex-row justify-center items-center"
          key={project.title}>
          <div className="flex flex-col justify-center items-start max-w-xl space-y-8 h-full">
            <h1 className="text-xl md:text-3xl font-semibold tracking-wide">
              {project.title}
            </h1>
            <div className="h-full w-full border md:hidden border-primary rounded-lg md:rounded-2xl overflow-hidden">
              <div className="flex flex-row justify-between items-center w-full h-5 bg-primary px-4 gap-4">
                <div className="flex flex-row gap-1">
                  <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                  <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                  <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                </div>
                <div className="w-full h-1 my-auto bg-primary-foreground rounded-full"></div>
              </div>
              <Image
                src={project.image}
                alt={project.title + " image"}
                className="h-full w-full max-w-2xl object-cover"
              />
            </div>
            <p className="hidden md:block text-base tracking-wider md:bg-primary md:text-primary-foreground md:p-8">
              {project.description}
            </p>
            <div className="flex flex-row flex-wrap gap-2 md:gap-4 justify-start md:justify-center items-start">
              {project.techStack.map((tech) => (
                <Badge className="py-1 px-3" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-row gap-4 justify-center items-start">
              <Link href={project.demo} target="_blank">
                <Button>Demo</Button>
              </Link>
              <Link href={project.repo} target="_blank">
                <Button variant={"outline"}>Repo</Button>
              </Link>
            </div>
          </div>
          <div className="h-full hidden md:block absolute left-[83%] -z-10 border border-primary rounded-2xl overflow-hidden">
            <div className="flex flex-row justify-between items-center w-full h-8 bg-primary px-8 gap-8">
              <div className="flex flex-row gap-3">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <div className="w-full h-2 my-auto bg-primary-foreground rounded-full"></div>
            </div>
            <Image
              src={project.image}
              alt={project.title + " image"}
              className="h-full hidden md:block max-w-2xl object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
