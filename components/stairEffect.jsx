"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
import { motion } from "framer-motion";
// notupdate

const StairEffect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
            <motion.div
              className="h-screen w-screen fixed bg=primary top-0 pointer-events-none "
              inital={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairEffect;
