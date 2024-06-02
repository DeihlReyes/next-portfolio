import taskquill1 from "@/assets/projects/taskquill.png"
import taskquill2 from "@/assets/projects/taskquill2.png"
import satiscript2 from "@/assets/projects/satiscript_img.png"
import satiscript1 from "@/assets/projects/satiscript_img2.png"

export const projects = [
  {
    title: 'TaskQuill',
    description: 'A task management app that allows users to manage their tasks and projects seamlessly and efficiently. Users can create projects, add tasks to projects and add their meetings. It features a great dashboard that shows the uses\s tasks, project and meetings.',
    image: [taskquill1, taskquill2],
    techStack: ['Next JS', 'Clerk', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
    repo: "https://github.com/DeihlReyes/TaskQuill",
    demo: "https://taskquill.vercel.app/"
  },
  {
    title: 'Satiscript',
    description: 'A call center agent tool that allows agents to upscale their their customer satisfaction by providing them with an system that generates script per interaction with a caller that they can use to guide them through the call. It also features a dashboard that shows the agent\s performance. This system was our research project and we received a 1st Runner Up award in our Engineering Research Colloquium.',
    image: [satiscript1, satiscript2],
    techStack: ['Python', 'Machine Learning', 'OpenAI API', 'Next JS',],
    repo: "",
    demo: ""
  }
];