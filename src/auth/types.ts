import { UserResponse } from "../type";

export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  user: UserResponse | null;
  fetchMe: (newToken?: string) => void;
  logout: () => void;
}
