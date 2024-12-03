"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "@/assets/hero.png"
import { Button } from "../ui/button";
import TalkButton from "../talk-button";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col h-screen px-8 lg:px-16 pt-44 lg:pt-[5%] max-w-7xl justify-center items-start mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-5xl mx-auto lg:mx-0"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[4px] w-32 lg:w-56 bg-[#161616] mb-12"
        ></motion.div>
        <div className="overflow-visible tracking-wide lg:tracking-[0.3rem] leading-tight text-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-bold lg:text-[30px]"
          >
            HELLO! I&apos;M DEIHL
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-extrabold lg:text-[53px]"
          >
            FULL STACK DEVELOPER
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm lg:text-lg mt-4 max-w-2xl"
        >
          A Full Stack Developer specializing in{" "}
          <span className="font-bold">Next JS</span>, dedicated to creating
          user-friendly web applications. With a passion for learning and a
          focus on seamless experiences, I&apos;m excited to collaborate on
          innovative solutions that make an impact!
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
        className="mt-16 lg:mt-0 lg:absolute right-[4.5rem] mx-auto"
      >
        <Image
          className="w-[450px] h-[400px] lg:h-[550px] object-cover shadow-xl"
          quality={50}
          alt="Hero Image"
          src={myImage}
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
