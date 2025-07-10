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
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <p className="text-label text-gray-500">About Me</p>
              <h2 className="text-section-title text-gray-900">
                Creating meaningful digital experiences
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-body-small">
              <p>
                I’m Deihl Arron Reyes, a full stack web developer based in the
                Philippines. I specialize in building clean and scalable web
                applications using tools like Next.js, PostgreSQL, Prisma, and
                Tailwind CSS. My work spans internal systems, client websites,
                and e-commerce platforms, where I handle everything from
                frontend design to backend development and deployment.
              </p>
              <p>
                I enjoy solving real problems through thoughtful and
                maintainable code. Whether working independently or within a
                team, I focus on creating solutions that are efficient,
                user-friendly, and aligned with business goals.
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 pt-4"
            >
              <p className="text-caption text-gray-500 font-medium">
                Connect with me:
              </p>
              <div className="flex space-x-3">
                <Link
                  className="p-3 rounded-full bg-primary hover:bg-primary/60 transition-colors"
                  href="https://www.linkedin.com/in/deihl-arron-reyes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image className="w-5 h-5" src={linkedin} alt="LinkedIn" />
                </Link>
                <Link
                  className="p-3 rounded-full bg-primary hover:bg-primary/60 transition-colors"
                  href="https://github.com/DeihlReyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Image className="w-5 h-5" src={github} alt="GitHub" />
                </Link>
                <Link
                  className="p-3 rounded-full bg-primary hover:bg-primary/60 transition-colors"
                  href="https://www.facebook.com/deihl.reyes08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image className="w-5 h-5" src={facebook} alt="Facebook" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Main Image - Bottom Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96"
              >
                <div className="relative w-full h-full">
                  <Image
                    quality={90}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    src={about2}
                    alt="Deihl Reyes - Developer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              {/* Overlapping Image - Top Layer */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-0 right-0 w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96"
              >
                <div className="relative w-full h-full">
                  <Image
                    quality={90}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    src={about1}
                    alt="Deihl Reyes - Working"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
