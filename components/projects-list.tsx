import { projects } from "@/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectList = () => {
  return (
    <div>
      <ul className="flex flex-col justify-center items-center gap-32 md:gap-40 h-full">
        {projects.map((project, index) => (
          <li className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-center items-center gap-10`} key={index}>
            <Image
              className="w-[650px] h-full md:h-[380px] object-cover rounded-xl shadow-xl"
              src={project.image}
              alt={project.title}
            />
            <div>
              <h2 className="text-xl md:text-3xl font-bold">{project.title}</h2>
              <p className="text-sm md:text-lg mt-6">{project.description}</p>
              <div>
                <ul className="flex flex-wrap md:flex-row gap-2 mt-5">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="flex flex-row gap-2">
                      <Badge className="py-1">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-2">
                <Button className="mt-10 md:w-20">Demo</Button>
                <Button className="mt-10 md:w-20">Repo</Button>
              </div>
            </div>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default ProjectList;
