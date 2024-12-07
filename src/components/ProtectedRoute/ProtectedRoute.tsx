import React from "react";
import useMainContext from "../../hooks/useMainContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useMainContext();

  return user ? children : <Navigate to="/" />;
}
