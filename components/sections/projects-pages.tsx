import ProjectList from "../projects-list";

const ProjectsPage = () => {
    return (
        <section id='project' className="flex flex-col justify-center items-center px-8 py-16 md:py-32 h-full">
          <div className="flex flex-col gap-12 justify-center items-start w-full max-w-6xl">
            <div className="">
              <h1 className="text-3xl md:text-[50px] font-bold mb-8">Projects</h1>
              <p className="text-base md:text-lg text-left mb-6 md:pr-4">Here are some projects that I have built.</p>
            </div>
            <ProjectList/>
          </div>
        </section>
    );
};

export default ProjectsPage;
