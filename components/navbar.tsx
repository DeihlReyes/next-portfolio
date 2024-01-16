import Image from "next/image";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import MobileNav from "./mobile-nav";
import NavItems from "./nav-items";

const Navbar = () => {
    return(
        <header className="z-50">
            <nav className="bg-background fixed md:flex hidden justify-between shadow-md py-5 px-7 w-full">
                <Image
                    className="object-cover w-auto h-10"
                    src={logo}
                    alt="Logo"
                />
                <div className="flex flex-row gap-12 justify-center items-center text-md">
                    <NavItems/>
                    <Button className="rounded-lg">HIRE ME</Button>
                </div>
            </nav>

            <nav className="fixed top-0 bg-white flex md:hidden items-center w-full h-20 justify-between px-8">
                <Image
                    className="object-cover w-auto h-10"
                    src={logo}
                    alt="Logo"
                /> 
                <div className="flex flex-row gap-8 justify-center items-center">
                    <Button className="rounded-lg text-xs">HIRE ME</Button>
                    <MobileNav/>
                </div>         
            </nav>
        </header>
    );
};

export default Navbar;