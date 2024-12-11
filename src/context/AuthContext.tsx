import { createContext } from "react";

type AuthContextType = {
  user: {
    id: string;
    username: string;
  } | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
