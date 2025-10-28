"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci";

const links = [
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
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center gap-4">
        <CiMenuFries className="text-{32px} text-accent " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* liogo */}
        <div className="mt-32 mb-16 text-center text-white text-3xl ">
          <Link href="/">
            <h1 className="font-semiibold text-4xl">
              ADL<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}

        <nav>
          {links.map((l, i) => {
            return <Link href={l.path} key={i} className="text-3xl flex flex-col mb-8 text-center" >{l.name}</Link>;
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
