import React from "react";
import { Route, Navigate } from "react-router-dom";

// Mock authentication function, replace with your actual auth logic
const isAuthenticated = () => {
  // Check if the user is authenticated
  // This can be a check against localStorage, a context value, or a state management store
  return !!localStorage.getItem("token");
};

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) =>
  isAuthenticated() ? <div>{children}</div> : <Navigate to="/login" />;
export default AuthGuard;
