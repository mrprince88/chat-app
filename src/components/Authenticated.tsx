import React from "react";
import { Navigate } from "react-router";
import useAuth from "src/context/useAuth";

const Authenticated = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Authenticated;
