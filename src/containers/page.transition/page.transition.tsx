import { motion } from "framer-motion";
import { Direction } from "../../type";
import React from "react";

/*const variants = {
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

  <motion.div
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
};*/
const variants = {
  enter: (direction: Direction) => ({
    x: direction === 1 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 1 ? -500 : 500,
    opacity: 0,
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
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
