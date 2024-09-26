import taskquill1 from "@/assets/projects/taskquill.png";
import taskquill2 from "@/assets/projects/taskquill2.png";
import satiscript2 from "@/assets/projects/satiscript_img.png";
import satiscript1 from "@/assets/projects/satiscript_img2.png";
import filevert1 from "@/assets/projects/filevert.png";
import filevert2 from "@/assets/projects/filevert2.png";
import gdsc from "@/assets/projects/gdsc.png";
import gdsc2 from "@/assets/projects/gdsc2.png";
import quizwiz from "@/assets/projects/quizwiz.png";
import quizwiz2 from "@/assets/projects/quizwiz2.png";
import quizwiz3 from "@/assets/projects/quizwiz3.png";

export const projects = [
  {
    title: "Satiscript",
    description:
      "AI-powered call center tool generating tailored agent scripts to boost customer satisfaction. Features a performance dashboard for real-time monitoring. Awarded 1st Runner Up in our Engineering Research Colloquium.",
    image: [satiscript1, satiscript2],
    techStack: ["Python", "Machine Learning", "OpenAI API", "Next JS"],
    repo: "https://github.com/DeihlReyes/satiscript",
    demo: "https://satiscript.vercel.app",
  },
  {
    title: "TaskQuill",
    description:
      "Intuitive task management app streamlining productivity for individuals and teams. Offers a user-friendly dashboard for efficient organization of tasks, projects, and meetings.",
    image: [taskquill1, taskquill2],
    techStack: ["Next JS", "Clerk", "TailwindCSS", "Prisma", "PostgreSQL"],
    repo: "https://github.com/DeihlReyes/TaskQuill",
    demo: "https://taskquill.vercel.app",
  },
  {
    title: "Filevert",
    description:
      "Versatile file conversion tool with a simple interface for quick and easy format transformations. Streamlines workflow for users dealing with multiple file types.",
    image: [filevert1, filevert2],
    techStack: ["Next JS", "TailwindCSS", "FFMPEG"],
    repo: "https://github.com/DeihlReyes/filevert",
    demo: "https://filevert.vercel.app",
  },
  {
    title: "Google Developer Student Clubs - UE Caloocan Website",
    description:
      "Official website for GDSC UE Caloocan, showcasing club activities and resources. As associate developer, contributed to creating an engaging platform fostering student developer community.",
    image: [gdsc, gdsc2],
    techStack: ["Astro JS", "TailwindCSS", "TypeScript"],
    repo: "https://github.com/DeihlReyes/gdsc-uecal-website",
    demo: "https://gdsc-uec.vercel.app/",
  },
  {
    title: "QuizWiz",
    description:
      "Advanced quiz app powered by Gemini AI, generating personalized quizzes based on user preferences. Adapts to individual learning styles, ideal for students, educators, and lifelong learners.",
    image: [quizwiz, quizwiz2, quizwiz3],
    techStack: ["NextJS", "TailwindCSS", "Gemini API"],
    repo: "https://github.com/DeihlReyes/next-quizwiz",
    demo: "https://quizwiz-vert.vercel.app/",
  },
];
