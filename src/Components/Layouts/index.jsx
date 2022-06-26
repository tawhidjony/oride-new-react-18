import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import MobileSearch from "../Shared/Header/Mobile.Search";
import Sidebar from "../Shared/Sidebar";

const WithAdminLayout = () => {
  return (
    <>
      <MobileSearch />
      <Header />
      <main className="main-content">
        <Sidebar />
        <div className={`contents expanded`}>
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default WithAdminLayout;
