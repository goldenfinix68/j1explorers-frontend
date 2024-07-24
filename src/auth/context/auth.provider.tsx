import React, { useState, ReactNode, useEffect, useMemo } from "react";
import { useFetchMeQuery } from "../../service/userService";
import { UserResponse } from "../../type";
import Cookies from "js-cookie";
import { AuthContext } from "./auth.context";

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const storedUser = Cookies.get("user");

  const [user, setUser] = useState<UserResponse | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const { data, isLoading, error, refetch } = useFetchMeQuery();

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (data) {
      setUser(data);
      Cookies.set("user", JSON.stringify(data));
    }
    if (error) {
      logout();
    }
  }, [data, isLoading, error]);

  const memorizedValue = useMemo(
    () => ({
      isAuthenticated: !!token,
      loading: isLoading,
      user,
      fetchMe: (newToken?: string) => {
        if (newToken) {
          localStorage.setItem("token", newToken);
        }

        refetch();
      },
      logout,
    }),
    [isLoading, data, token]
  );

  return (
    <AuthContext.Provider value={memorizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
