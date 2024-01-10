import Image from "next/image";
import myImage from "@/assets/front-face.jpg";
import { Button } from "../ui/button";

const LandingPage = () => {
    return (
        <section id="home" className="z-5 overflow-hidden flex flex-col-reverse gap-16 md:gap-0 px-8 pt-28 pb-10 md:p-0 md:flex-row justify-center items-center h-full md:h-screen">
            <Image
                className="rounded-[30px] md:rounded-none object-cover w-full md:w-1/2"
                src={myImage}
                alt="Landing Page"
            />
            <div className="flex flex-col justify-center items-start md:pl-16 md:pr-20 w-full md:w-1/2">
                <p className="text-md md:text-lg mb-8">Hello!</p>
                <h1 className="text-3xl md:text-[70px] font-bold mb-8">I&apos;m Deihl Reyes</h1>
                <p className="text-md md:text-lg text-left mb-10">Experienced Full Stack Developer with a strong passion for learning. 
                    Proficient in both front-end and back-end technologies, specializing in crafting user-friendly
                    and innovative solutions. Dedicated to delivering seamless applications that enhance user experiences.
                </p>
                <Button className="rounded-lg">Download CV</Button>
            </div>
        </section>
    );
};



export default LandingPage;
