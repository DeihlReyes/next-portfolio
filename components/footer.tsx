import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import facebook from "@/assets/logos/facebook.svg";
import linkedin from "@/assets/logos/linkedin.svg";
import github from "@/assets/logos/GitHub.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                className="h-8 w-auto"
                src={logo}
                alt="Deihl Reyes Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-semibold text-gray-900">
                Deihl Reyes
              </span>
            </Link>
            <p className="text-body-small text-gray-600 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating meaningful digital
              experiences and building innovative web applications.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                className="p-3 rounded-full bg-[#333232] hover:bg-[#333232]/60 transition-colors"
                href="https://www.linkedin.com/in/deihl-arron-reyes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image className="w-5 h-5" src={linkedin} alt="LinkedIn" />
              </Link>
              <Link
                className="p-3 rounded-full bg-[#333232] hover:bg-[#333232]/60 transition-colors"
                href="https://github.com/DeihlReyes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image className="w-5 h-5" src={github} alt="GitHub" />
              </Link>
              <Link
                className="p-3 rounded-full bg-[#333232] hover:bg-[#333232]/60 transition-colors"
                href="https://www.facebook.com/deihl.reyes08/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image className="w-5 h-5" src={facebook} alt="Facebook" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-body-small text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-body-small text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-body-small text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-body-small text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-caption text-gray-500 font-medium">Email</p>
                <p className="text-body-small text-gray-600">
                  reyes.deihlarron@gmail.com
                </p>
              </div>
              <div>
                <p className="text-caption text-gray-500 font-medium">Phone</p>
                <p className="text-body-small text-gray-600">
                  +63 917 115 8829
                </p>
              </div>
              <div>
                <p className="text-caption text-gray-500 font-medium">
                  Location
                </p>
                <p className="text-body-small text-gray-600">
                  Quezon City, Philippines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-caption text-gray-500">
            © 2024 Deihl Reyes. All rights reserved.
          </p>
          <p className="text-caption text-gray-500">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
