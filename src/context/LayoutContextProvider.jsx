import React, { createContext, useState } from "react";
export const LayoutContext = createContext();
const LayoutContextProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <LayoutContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
