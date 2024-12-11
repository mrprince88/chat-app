import React, { useState } from "react";

import users from "src/data/users";

import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{
    username: string;
    id: string;
  } | null>(null);

  const login = (username: string) => {
    const user = users.find((user) => user.username === username);
    if (user) {
      setUser({ username: user.username, id: user.id });
    } else {
      throw new Error("Invalid username");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
