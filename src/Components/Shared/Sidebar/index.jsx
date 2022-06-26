import React from "react";
import { Box, Home, Settings, Truck, Users } from "react-feather";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const { pathname } = useLocation();
  const routePath = [
    {
      name: "Dashboard",
      key: "dashboard",
      url: "/dashboard",
      active: pathname === "/dashboard" && "active",
      icon: <Home className="feather feather-message-square nav-icon" />,
    },
    {
      name: "Users",
      key: "users",
      url: "/users",
      active: pathname === "/users" && "active",
      icon: <Users className="feather feather-message-square nav-icon" />,
    }
  ];
  return (
    <>
      <aside className={`sidebar collapsed `}>
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
