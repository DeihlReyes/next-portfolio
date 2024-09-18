"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "@/assets/hero.png";
import { Button } from "../ui/button";
import TalkButton from "../talk-button";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col h-full md:h-screen px-8 md:px-16 pt-32 pb-16 max-w-7xl justify-center items-start mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[4px] w-32 md:w-56 bg-[#161616] mb-12"
        ></motion.div>
        <div className="overflow-visible tracking-wide md:tracking-[0.3rem] leading-tight text-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-bold md:text-[35px]"
          >
            HELLO! I&apos;M DEIHL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-extrabold md:text-[58px]"
          >
            FULL STACK DEVELOPER
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-lg mt-5 max-w-2xl"
        >
          A Full Stack Developer with a strong passion for learning. Proficient
          in both front-end and back-end technologies, specializing in crafting
          user-friendly and innovative solutions. Dedicated to delivering
          seamless applications that enhance user experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <TalkButton />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 md:mt-0 md:absolute right-16"
      >
        <Image
          className="w-[450px] h-[400px] md:h-[550px] object-cover shadow-xl"
          quality={50}
          alt="Hero Image"
          src={myImage}
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
