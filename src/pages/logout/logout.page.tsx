import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/hooks";

export const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  logout();
  return <Navigate to="/login" />;
};
