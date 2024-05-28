import Image from "next/image";
import myImage from "@/assets/hero.png";
import { Button } from "../ui/button";

const LandingPage = () => {
  return (
    <section id="home" className="relative flex flex-col h-full md:h-screen px-8 md:px-16 pt-32 pb-16 max-w-7xl justify-center items-start mx-auto">
      <div className="z-10 max-w-5xl">
        <div className="h-[4px] w-32 md:w-56 bg-[#161616] mb-12"></div>
        <div className="overflow-visible tracking-wide md:tracking-[0.3rem] leading-tight text-2xl">
          <h1 className="font-extrabold md:text-[55px]">HELLO! I&apos;M DEIHL</h1>
          <h1 className="font-extrabold md:text-[55px]">FULL STACK DEVELOPER</h1>
        </div>
        <p className="text-sm md:text-lg mt-5 max-w-2xl">A Full Stack Developer with a strong passion for learning. 
          Proficient in both front-end and back-end technologies, specializing 
          in crafting user-friendly and innovative solutions. Dedicated to 
          delivering seamless applications that enhance user experiences.
        </p>
        <Button className="px-8 md:py-6 md:px-10 font-bold tracking-widest text-sm md:text-lg mt-10 md:mt-14">Hire Me</Button>
      </div>
      <div className="mt-16 md:mt-0 md:absolute right-16">
        <Image
          className="w-[450px] h-[400px] md:h-[550px] object-cover shadow-xl"
          alt="Hero Image"
          src={myImage}
        />
      </div>
    </section>
  );
};

export default LandingPage;
