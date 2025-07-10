import Image from "next/image";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import MobileNav from "./mobile-nav";
import NavItems from "./nav-items";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-16 sm:h-20 items-center justify-between">
        <Link className="flex items-center space-x-3" href="/">
          <Image
            className="h-6 sm:h-8 w-auto"
            src={logo}
            alt="Deihl Reyes Logo"
            width={32}
            height={32}
          />
          <span className="hidden sm:block text-lg sm:text-xl font-bold text-gray-900">
            Deihl Reyes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            <NavItems />
          </ul>
          <Link href="/contact">
            <Button className="rounded-full">Get in touch</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center space-x-4">
          <Link href="/contact">
            <Button size="sm">Get in touch</Button>
          </Link>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
