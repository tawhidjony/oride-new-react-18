import React, { useContext } from "react";
import { Box, Home, Settings, Truck, Users } from "react-feather";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { Link, useLocation } from "react-router-dom";
import { LayoutContext } from "../../../context/LayoutContextProvider";
const Sidebar = () => {
  const { pathname } = useLocation();
  const { sidebarToggle } = useContext(LayoutContext);
  const routePath = [
    {
      name: "Dashboard",
      key: "dashboard",
      url: "/",
      active: pathname === "/" && "active",
      icon: <Home className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Users",
      key: "users",
      url: "/users",
      active: pathname === "/users" && "active",
      icon: <Users className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Drivers",
      key: "drivers",
      url: "/drivers",
      active: pathname === "/drivers" && "active",
      icon: <Truck className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Others",
      key: "others",
      url: "/others",
      active: pathname === "/others" && "active",
      icon: <Box className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Announcements",
      key: "announcements",
      url: "/announcements",
      active: pathname === "/announcements" && "active",
      icon: <Box className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Compliance",
      key: "compliance",
      url: "/compliance",
      active: pathname === "/compliance" && "active",
      icon: <Box className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Settings",
      key: "settings",
      url: "/settings",
      active: pathname === "/settings" && "active",
      icon: <Settings className="feather feather-message-square nav-icon" />,
    },
  ];
  return (
    <>
      <aside className={`sidebar ${sidebarToggle && "collapsed"}`}>
        <SimpleBarReact style={{ height: "calc(100vh - 74px)" }}>
          <div className="sidebar__menu-group">
            <ul className="sidebar_nav">
              <li className="menu-title">
                <span>Main menu</span>
              </li>
              {routePath.map((item) => (
                <li key={item.key}>
                  <Link to={item.url} className={item.active}>
                    {item.icon}
                    <span className="menu-text">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SimpleBarReact>
      </aside>
    </>
  );
};

export default Sidebar;
