import React from "react";
import logo from "@/assets/logo.png";
import NavItems from "./nav-items";
import Image from "next/image";
import facebook from "@/assets/logos/facebook.svg";
import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/GitHub.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#D6D6D6]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-6 md:mb-0">
            <Link href={"/"} className="flex justify-start items-start gap-4">
              <Image
                className="object-cover w-auto h-10"
                src={logo}
                alt="Logo"
              />
              <h2 className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                Deihl Reyes
              </h2>
            </Link>
          </div>
          <div className="flex flex-row gap-12 justify-center items-center text-md">
            <ul className="flex w-full items-start gap-12 flex-row">
              <NavItems />
            </ul>
          </div>
        </div>
        <hr className="my-6 border-[#161616]/60 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Deihl Reyes. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
            <Link
              className="rounded-full h-8 w-8 bg-[#333232] text-white p-2 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
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
              className="rounded-full h-8 w-8 bg-[#333232] text-white p-2 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
              href="https://github.com/DeihlReyes"
              target="blank"
            >
              <Image className="w-full h-full" src={github} alt="Github Logo" />
            </Link>
            <Link
              className="rounded-full h-8 w-8 bg-[#333232] text-white p-2 shadow-md hover:translate-y-[-6px] active:translate-y-0 transition-all ease-in-out duration-150"
              href="https://www.facebook.com/deihl.reyes08/"
              target="blank"
            >
              <Image
                className="w-full h-full"
                src={facebook}
                alt="Facebook Logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
