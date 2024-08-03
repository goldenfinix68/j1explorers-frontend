import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { SplashScreen } from "../../components/loading-screen";

export interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { loading } = useAuth();

  return loading ? <SplashScreen /> : <Container>{children}</Container>;
};
// ----------------------------------------------------------------------

function Container({ children }: AuthGuardProps) {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (isAuthenticated) {
      setChecked(true);
    } else {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();
      const href = `/login?${searchParams}`;

      navigate(href, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
