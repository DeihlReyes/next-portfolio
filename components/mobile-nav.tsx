import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./nav-items";
import { AiOutlineMenu } from "react-icons/ai";

const MobileNav = () => {
  return (
    <nav className="lg:hidden bg-[#D6D6D6]">
      <Sheet>
        <SheetTrigger className="align-middle">
          <AiOutlineMenu className="text-2xl" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-[#D6D6D6] lg:hidden pt-20">
          <ul className="flex w-full items-start gap-12 flex-col lg:flex-row">
            <NavItems />
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
