import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import AllRoutes from "./Route/AllRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
