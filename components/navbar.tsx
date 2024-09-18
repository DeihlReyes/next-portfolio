import Image from "next/image";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import MobileNav from "./mobile-nav";
import NavItems from "./nav-items";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="z-50 bg-[#D6D6D6] fixed lg:flex hidden justify-between border-b border-[#161616] py-5 px-32 w-full">
        <Link className="flex justify-center items-center gap-3" href="/">
          <Image className="object-cover w-auto h-10" src={logo} alt="Logo" />
          <h1 className="text-2xl font-bold">Deihl Reyes</h1>
        </Link>

        <div className="flex flex-row gap-12 justify-center items-center text-lg">
          <ul className="flex w-full items-start gap-12 flex-row">
            <NavItems />
          </ul>
          <Link href={"#contact"}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </nav>

      <nav className="z-50 fixed top-0 bg-[#D6D6D6] flex lg:hidden items-center w-full h-20 justify-between px-8">
        <Link href="/">
          <Image className="object-cover w-auto h-10" src={logo} alt="Logo" />
        </Link>
        <div className="flex flex-row gap-8 justify-center items-center">
          <Button className="rounded-lg text-xs">Contact me</Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
