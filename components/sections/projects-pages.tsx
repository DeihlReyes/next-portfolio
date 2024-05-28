import ProjectList from "../projects-list";

const ProjectsPage = () => {
    return (
        <section id='projects' className="flex flex-col justify-center items-center px-8 py-16 md:py-32 h-full">
          <div className="flex flex-col gap-12 justify-center items-start w-full max-w-6xl h-full">
            <div className="">
              <div className="h-[4px] w-20 md:w-28 bg-[#161616] mb-12"></div>
              <h1 className="text-3xl md:text-[50px] font-bold mb-8">Projects</h1>
              <p className="text-base md:text-lg text-left mb-6 md:pr-4">Here are some projects that I have built.</p>
            </div>
            <ProjectList/>
          </div>
        </section>
    );
};

export default ProjectsPage;
