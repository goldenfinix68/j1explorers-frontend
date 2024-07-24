import React, { ReactNode } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { SplashScreen } from "../../components/loading-screen";

export interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { loading } = useAuth();

  return loading ? <SplashScreen /> : <div>{children}</div>;
};
