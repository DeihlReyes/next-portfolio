import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/logos/facebook.svg";
import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/GitHub.svg";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";

const AboutPage = () => {
    return (
        <section id='about' className="flex flex-col-reverse md:flex-row justify-center items-center gap-16 px-8 py-16 md:py-0 w-full h-full md:h-screen max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 mt-16 md:mt-0 mb-32 md:mb-0">
                <div className="relative h-[350px]">
                    <Image
                        className="absolute w-[200px] md:w-[320px] h-full bottom-16 object-cover rounded-xl shadow-xl"
                        src={about2}
                        alt="About Image"
                    />
                    <Image
                        className="absolute w-[200px] md:w-[320px] h-full object-cover top-32 md:top-16 right-0 z-10 rounded-xl shadow-xl"
                        src={about1}
                        alt="About Image"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <div className="h-[4px] w-32 md:w-36 bg-[#161616] mb-12"></div>
                <h1 className="text-3xl md:text-[50px] font-bold mb-8">About me</h1>
                <p className="text-sm md:text-lg text-left md:pr-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                    aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                    nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa. Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit.
                </p>
                <div className="flex flex-row justify-start items-start gap-4 mt-10">
                    <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#333232] text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://www.linkedin.com/in/deihl-arron-reyes/" target="blank">
                        <Image
                            className="w-full h-full"
                            src={linkedin}
                            alt="LinkedIn Logo"
                        />
                    </Link>
                    <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#333232] text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://github.com/DeihlReyes" target="blank">
                        <Image
                            className="w-full h-full"
                            src={github}
                            alt="Github Logo"
                        />
                    </Link>
                    <Link className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#333232] text-white p-3 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150" href="https://www.facebook.com/deihl.reyes08/" target="blank">
                        <Image
                            className="w-full h-full"
                            src={facebook}
                            alt="Facebook Logo"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
