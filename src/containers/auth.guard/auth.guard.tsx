import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../auth.provider/auth.provider";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { user } = useAuth();

  return user ? <div>{children}</div> : <Navigate to="/login" />;
};
export default AuthGuard;
