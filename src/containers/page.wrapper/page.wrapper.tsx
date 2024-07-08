import React from "react";
import { Direction } from "../../type";
import { AuthGuard } from "../auth.guard";
import PageTransition from "../page.transition";

interface PageWrapperProps {
  children: React.ReactNode;
  direction: Direction;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, direction }) => (
  <AuthGuard>
    <PageTransition direction={direction}>{children}</PageTransition>
  </AuthGuard>
);

export default PageWrapper;
