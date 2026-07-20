"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";
import MobileNav from "./MobileNav";

const links = [
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Achivements", path: "/achivements" },
  { name: "Contact", path: "/contact" },
];

const ADL_LOGO =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="60" font-family="JetBrains Mono, monospace" font-size="30" font-weight="700" fill="#1c1c22" text-anchor="middle">ADL</text></svg>'
  );

const Header = () => {
  const pathname = usePathname();

  const pillItems = links.map((link) => ({
    label: link.name,
    href: link.path,
  }));

  return (
    <header className="py-8 xl:py-12 text-white z ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo (mobile only, PillNav shows its own ADL logo on desktop) */}
        <Link href="/" className="xl:hidden">
          <h1 className="text-4xl font-semibold">
            ADL<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* destop */}
        <div className="hidden xl:flex items-center gap-8 ml-auto">
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile */}
        <div className="xl:hidden"><MobileNav/></div>
      </div>
      {/* pill nav (desktop only, fixed top-center) */}
      <div className="hidden xl:block fixed left-1/2 -translate-x-1/2 top-6 z-50">
        <PillNav
          logo={ADL_LOGO}
          logoAlt="ADL"
          items={pillItems}
          activeHref={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
