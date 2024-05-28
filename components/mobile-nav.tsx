import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import NavItems from "./nav-items"
import { AiOutlineMenu } from 'react-icons/ai';
  
const MobileNav = () => {
  return (
    <nav className="md:hidden bg-[#D6D6D6]">
      <Sheet>
        <SheetTrigger className="align-middle">
          <AiOutlineMenu className='text-2xl'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-[#D6D6D6] md:hidden pt-20">
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav