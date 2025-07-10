import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./nav-items";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <Menu className="h-6 w-6 text-gray-700" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <div className="flex flex-col gap-8 pt-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Navigation</h3>
            <p className="text-sm text-gray-500">Explore my portfolio</p>
          </div>
          <ul className="flex flex-col gap-4">
            <NavItems />
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
