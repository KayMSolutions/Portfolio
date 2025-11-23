import React from "react";
import { Navigate } from "react-router-dom";
import auth from "./auth-helper";

export default function AdminRoute({ children }) {
  const jwt = auth.isAuthenticated();

  // Not logged in → redirect to sign in
  if (!jwt) {
    return <Navigate to="/signin" />;
  }

  // Logged in but not admin → redirect to home
  if (jwt.user.role !== "admin") {
    return <Navigate to="/" />;
  }

  // OK → allow access
  return children;
}