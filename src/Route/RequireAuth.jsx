import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const authLogin = localStorage.getItem("auth");
  const location = useLocation();
  useEffect(() => {
    if (authLogin) {
      setAuth("true");
    }
  }, [auth, authLogin]);
  return auth === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
