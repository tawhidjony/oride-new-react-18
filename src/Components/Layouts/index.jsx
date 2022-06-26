import React from "react";
import LayoutContextProvider from "../../context/LayoutContextProvider";
import Body from "../Shared/Body";
import Header from "../Shared/Header";
import MobileSearch from "../Shared/Header/Mobile.Search";

const WithAdminLayout = ({ children }) => {
  return (
    <LayoutContextProvider>
      <MobileSearch />
      <Header />
      <Body children={children} />
    </LayoutContextProvider>
  );
};

export default WithAdminLayout;
