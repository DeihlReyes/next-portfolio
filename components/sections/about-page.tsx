"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import facebook from "@/assets/logos/facebook.svg";
import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/GitHub.svg";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 px-8 my-16 lg:mt-28 lg:mb-44 w-full h-full max-w-7xl mx-auto"
    >
      <motion.div
        variants={itemVariants}
        className="w-full lg:w-1/2 mt-16 lg:mt-0 mb-32 lg:mb-0"
      >
        <div className="relative h-[350px] md:max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              quality={60}
              className="absolute w-[200px] md:w-[300px] lg:w-[320px] h-full bottom-16 object-cover rounded-xl shadow-xl"
              src={about2}
              width={320}
              height={450}
              alt="About Image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Image
              quality={60}
              className="absolute w-[200px] md:w-[300px] lg:w-[320px] h-full object-cover top-32 lg:top-16 right-0 z-10 rounded-xl shadow-xl"
              src={about1}
              width={320}
              height={450}
              alt="About Image"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
        <motion.div
          variants={itemVariants}
          className="h-[4px] w-32 lg:w-36 bg-[#161616] mb-12"
        ></motion.div>
        <motion.h1
          variants={itemVariants}
          className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-8"
        >
          About me
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-sm lg:text-lg lg:pr-4"
        >
          I&apos;m a Computer Engineering graduate from the University of the
          East - Caloocan, now working as a full stack web developer. I enjoy
          solving complex problems and building innovative applications. Outside
          of work, I balance my passion for coding with basketball and music
          production, always eager to learn and take on new challenges.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-row justify-start items-start gap-4 mt-10"
        >
          <Link
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#333232] text-white p-3 shadow-lg hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
            href="https://www.linkedin.com/in/deihl-arron-reyes/"
            target="blank"
          >
            <Image
              className="w-full h-full"
              src={linkedin}
              alt="LinkedIn Logo"
            />
          </Link>
          <Link
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#333232] text-white p-3 shadow-lg hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
            href="https://github.com/DeihlReyes"
            target="blank"
          >
            <Image className="w-full h-full" src={github} alt="Github Logo" />
          </Link>
          <Link
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#333232] text-white p-3 shadow-lg hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
            href="https://www.facebook.com/deihl.reyes08/"
            target="blank"
          >
            <Image
              className="w-full h-full"
              src={facebook}
              alt="Facebook Logo"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
