import AboutCards from "../about-cards";

const AboutPage = () => {
    return (
        <section id='about' className="flex flex-row justify-center items-center py-20 md:pb-32 md:pt-36">
            <div className="flex flex-col gap-16 p-8 md:p-0 md:flex-row items-center max-w-[1200px]">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-[50px] font-bold mb-8">About me</h1>
                    <p className="text-base md:text-lg text-left mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                        aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                        nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa.
                    </p>
                    <p className="text-base md:text-lg text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                        aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                        nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <AboutCards/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
