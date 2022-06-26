import React from "react";
import { Route, Routes } from "react-router-dom";
import WithAdminLayout from "../Components/Layouts";
import Dashboard from "../Pages/Dashboard";

const WithLogin = () => {
  return (
    <WithAdminLayout>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
      </Routes>
    </WithAdminLayout>
  );
};

export default WithLogin;
