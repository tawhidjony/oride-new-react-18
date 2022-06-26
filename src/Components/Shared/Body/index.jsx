import React, { useContext } from "react";
import { LayoutContext } from "../../../context/LayoutContextProvider";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const Body = ({ children }) => {
  const { sidebarToggle } = useContext(LayoutContext);
  return (
    <>
      <main className="main-content">
        <Sidebar />
        <div className={`contents ${sidebarToggle && "expanded"}`}>
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Body;
