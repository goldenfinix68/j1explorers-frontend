import React, { ReactNode, useCallback, useEffect } from "react";
import { Route, Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks";
import { SplashScreen } from "../../components/loading-screen";

export interface GuestGuardProps {
  children: ReactNode;
}

export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { loading } = useAuth();

  return loading ? <SplashScreen /> : <Container>{children}</Container>;
};

// ----------------------------------------------------------------------

function Container({ children }: GuestGuardProps) {
  const navigate = useNavigate();

  const { returnTo = "/" } = useParams<{ returnTo: string }>();

  const { isAuthenticated } = useAuth();

  const check = useCallback(() => {
    if (isAuthenticated) {
      navigate(returnTo, { replace: true });
    }
  }, [isAuthenticated, returnTo, navigate]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
