import React from "react";
import { motion } from "framer-motion";
import { Direction } from "../../type";

const pageVariants = {
  initial: (direction: Direction) => ({
    opacity: 0,
    x: direction > 0 ? "100vw" : "-100vw",
  }),
  in: { opacity: 1, x: 0 },
  out: (direction: Direction) => ({
    opacity: 0,
    x: direction > 0 ? "-100vw" : "100vw",
  }),
};

interface PageWrapperProps {
  children: React.ReactNode;
  direction: Direction;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, direction }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    custom={direction}
    variants={pageVariants}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default PageWrapper;
