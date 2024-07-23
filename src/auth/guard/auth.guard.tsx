import React, { ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

export interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { user } = useAuth();

  return user ? <div>{children}</div> : <Navigate to="/login" />;
};
