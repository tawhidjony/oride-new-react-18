import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import AllRoutes from "./Route/AllRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/*" element={<AllRoutes />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
