import { ReactNode } from "react";
import { LoginResponse, UserResponse } from "../type";

export interface AuthContextType {
  user: UserResponse | null;
  login: (data: LoginResponse) => void;
  updateUser: (data: UserResponse) => void;
  logout: () => void;
}
