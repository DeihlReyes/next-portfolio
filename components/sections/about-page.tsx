import Link from "next/link";
import AboutCards from "../about-cards";
import Image from "next/image";
import facebook from "@/assets/logos/facebook.svg";
import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/GitHub.svg";


const AboutPage = () => {
    return (
        <section id='about' className="flex flex-col gap-32 justify-center items-center md:pb-32 md:pt-36 bg-[#F8F8F8]">
            <div className="flex flex-col gap-16 px-8 py-20 md:p-0 md:flex-row items-center max-w-[1200px]">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-[50px] font-bold mb-8">About me</h1>
                    <p className="text-base md:text-lg text-left mb-6 md:pr-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                        aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                        nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa.
                    </p>
                    <p className="text-base md:text-lg text-left md:pr-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                        aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                        nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa.
                    </p>
                    <div className="flex flex-row justify-start items-start gap-4 mt-8">
                        <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://www.linkedin.com/in/deihl-arron-reyes/" target="blank">
                            <Image
                                className="w-full h-full"
                                src={linkedin}
                                alt="LinkedIn Logo"
                            />
                        </Link>
                        <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://github.com/DeihlReyes" target="blank">
                            <Image
                                className="w-full h-full"
                                src={github}
                                alt="Github Logo"
                            />
                        </Link>
                        <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://www.facebook.com/deihl.reyes08/" target="blank">
                            <Image
                                className="w-full h-full"
                                src={facebook}
                                alt="Facebook Logo"
                            />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <AboutCards/>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
