import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
