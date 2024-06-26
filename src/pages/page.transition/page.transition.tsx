import { motion } from "framer-motion";
import { Direction } from "../../type";
import React from "react";

const variants = {
  initial: (direction: Direction) => ({
    x: direction < 0 ? -1000 : 1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: (direction: Direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

interface PageTransitionProps {
  children: React.ReactNode;
  direction: Direction;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  direction,
}) => {
  return (
    <motion.div
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
