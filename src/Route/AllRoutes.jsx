import React from "react";
import { Route, Routes } from "react-router-dom";
import WithAdminLayout from "../Components/Layouts";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Users/Index";
import RequireAuth from "./RequireAuth";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}

      {/* Protective Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<WithAdminLayout />}>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/*" element={"404 not found!"} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
