import React from "react";
import { AuthGuard } from "../../auth/guard";
import PageTransition from "../page.transition";
import { useSelector } from "react-redux";
import { directionSelector } from "../../store/direction/direction.selector";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const direction = useSelector(directionSelector);

  return (
    <AuthGuard>
      <PageTransition direction={direction}>{children}</PageTransition>
    </AuthGuard>
  );
}
