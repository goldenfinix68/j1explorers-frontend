import React, { ReactNode, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks";
import { SplashScreen } from "../../components/loading-screen";

export interface Props {
  children: ReactNode;
}

export function GuestGuard({ children }: Props) {
  const { loading } = useAuth();

  return loading ? <SplashScreen /> : <Container>{children}</Container>;
}

// ----------------------------------------------------------------------

function Container({ children }: Props) {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const returnTo = searchParams.get("returnTo") ?? "/";

  const { isAuthenticated } = useAuth();

  const check = useCallback(() => {
    if (isAuthenticated) {
      navigate(returnTo, { replace: true });
    }
  }, [isAuthenticated, searchParams, navigate]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
}
