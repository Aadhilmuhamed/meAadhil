import { motion } from "framer-motion";
import { exit } from "process";
import React from "react";

const stairanimation = {
  // initial: {
  //   bottom: "0%",
  // },
  // animate: {
  //   bottom: "100%",
  // },
  // exit: {
  //   bottom: ["100%", "0%"],
  // },
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// const reverseIndex = (index) => {
//   const totalSteps = 8;
//   return totalSteps - index - 1;
// };

const Stairs = () => {
  return (
    <>
      {/* rendder 8motion divs */}
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairanimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              // delay: reverseIndex(index) * 0.15,
              delay:index * 0.1,
            }}
            className="h-full w-full bg-[#bbf7d0] relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
