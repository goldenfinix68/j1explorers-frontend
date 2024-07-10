// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useFetchMeQuery } from "../../service/userService";
import {
  LoginResponse,
  UserDetail,
  UserEssential,
  UserResponse,
} from "../../type";

interface AuthContextType {
  user: UserResponse | null;
  login: (data: LoginResponse) => void;
  updateUser: (data: UserResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const { data, isLoading, error } = useFetchMeQuery();

  const login = (data: LoginResponse) => {
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };

  const updateUser = (data: UserResponse) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (data) {
      setUser(data);
    }
    if (error) {
      logout();
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
