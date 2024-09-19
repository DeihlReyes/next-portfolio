import taskquill1 from "@/assets/projects/taskquill.png";
import taskquill2 from "@/assets/projects/taskquill2.png";
import satiscript2 from "@/assets/projects/satiscript_img.png";
import satiscript1 from "@/assets/projects/satiscript_img2.png";
import filevert1 from "@/assets/projects/filevert.png";
import filevert2 from "@/assets/projects/filevert2.png";
import gdsc from "@/assets/projects/gdsc.png";
import gdsc2 from "@/assets/projects/gdsc2.png";

export const projects = [
  {
    title: "Satiscript",
    description:
      "A call center tool that generates scripts for agents to improve customer satisfaction. Features a performance dashboard. Awarded 1st Runner Up in our Engineering Research Colloquium.",
    image: [satiscript1, satiscript2],
    techStack: ["Python", "Machine Learning", "OpenAI API", "Next JS"],
    repo: "https://github.com/DeihlReyes/satiscript",
    demo: "https://satiscript.vercel.app",
  },
  {
    title: "TaskQuill",
    description:
      "A task management app for managing tasks, projects, and meetings with a user-friendly dashboard.",
    image: [taskquill1, taskquill2],
    techStack: ["Next JS", "Clerk", "TailwindCSS", "Prisma", "PostgreSQL"],
    repo: "https://github.com/DeihlReyes/TaskQuill",
    demo: "https://taskquill.vercel.app",
  },
  {
    title: "Filevert",
    description:
      "A file conversion tool that allows users to convert their files to different formats. It features a simple and easy to use interface that allows users to convert their files in just a few clicks.",
    image: [filevert1, filevert2],
    techStack: ["Next JS", "TailwindCSS", "FFMPEG"],
    repo: "https://github.com/DeihlReyes/filevert",
    demo: "https://filevert.vercel.app",
  },
  {
    title: "Google Developer Student Clubs - UE Caloocan Website",
    description:
      "The official website of Google Developer Student Clubs - UE Caloocan. I was an associate developer for this project.",
    image: [gdsc, gdsc2],
    techStack: ["Astro JS", "TailwindCSS", "TypeScript"],
    repo: "https://github.com/DeihlReyes/gdsc-uecal-website",
    demo: "https://gdsc-uec.vercel.app/",
  },
];
