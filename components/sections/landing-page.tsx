import Image from "next/image";
import myImage from "@/assets/front-face.jpg";
import { Button } from "../ui/button";

const LandingPage = () => {
  return (
    <section id="home" className="flex h-full md:h-screen">
      <div className="flex flex-col mx-auto justify-center items-center md:flex-row max-w-6xl gap-20">
        <div className="flex flex-col justify-center items-start w-full ">
          <p className="text-md md:text-lg mb-8 font-semibold">Hello!</p>
          <h1 className="text-3xl md:text-6xl font-bold mb-8">
            I&apos;m Deihl Reyes
          </h1>
          <p className="text-md md:text-lg text-left mb-10">
            Experienced Full Stack Developer with a strong passion for learning.
            Proficient in both front-end and back-end technologies, specializing
            in crafting user-friendly and innovative solutions. Dedicated to
            delivering seamless applications that enhance user experiences.
          </p>
          <Button className="rounded-lg">Download CV</Button>
        </div>
        <Image
          className="rounded-3xl object-cover w-96"
          src={myImage}
          alt="Landing Page"
        />
      </div>
    </section>
  );
};

export default LandingPage;
