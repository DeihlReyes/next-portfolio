"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "@/assets/hero.png";
import { Button } from "../ui/button";
import TalkButton from "../talk-button";
import { Badge } from "../ui/badge";

const LandingPage = () => {
  return (
    <section className="section-padding gradient-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-label text-gray-500">Full Stack Developer</p>
              <h1 className="text-hero text-gray-900">
                Hi, I&apos;m <span className="text-black">Deihl Reyes</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed">
                Building digital experiences that matter
              </p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body-small text-gray-600 leading-relaxed max-w-2xl"
            >
              A passionate Full Stack Developer specializing in{" "}
              <span className="font-semibold text-gray-900">Next.js</span>,
              dedicated to creating seamless, user-centric web applications. I
              combine technical expertise with creative problem-solving to
              deliver impactful digital solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <TalkButton />
              <Button variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            {/* Tech Stack
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-8"
            >
              <p className="text-caption text-gray-500 mb-4">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "PostgreSQL",
                  "Tailwind CSS",
                ].map((tech, index) => (
                  <Badge className="text-sm" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div> */}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3 scale-105"></div>
              <Image
                className="relative w-80 h-80 lg:w-[26rem] lg:h-[32rem] object-cover rounded-3xl shadow-2xl"
                quality={90}
                alt="Deihl Reyes - Full Stack Developer"
                src={myImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
