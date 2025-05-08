"use client";
import React from 'react';
import {Sheet,SheetContent ,SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { CiMenuFries } from "react-icons/ci";

const links =[
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

const MobileNav = () => {
const pathname =  usePathname()




  return (
    <div >
  <Sheet>
    <SheetTrigger className='flex justify-center items-center gap-4'>
<CiMenuFries className="text-{32px} text-accent "/>

    </SheetTrigger>
    <SheetContent className="flex">
        <div>Logo</div>
    </SheetContent>


  </Sheet>

   
    </div>
  );
};

export default MobileNav;
