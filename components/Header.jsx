import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            ADL<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* destop */}
        <div className="hidden xl:flex items-center gap-8">
          {" "}
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
