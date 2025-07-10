"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";

const NavItems = () => {
  return (
    <>
      {headerLinks.map((link) => {
        return (
          <li key={link.route}>
            <Link
              className="text-gray-700 hover:text-black text-sm font-medium transition-colors duration-200"
              href={link.route}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
