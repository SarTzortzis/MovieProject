import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBarIcon = ({ name, is_page_active, icon_path, nav_to }) => {
  return is_page_active ? (
    <NavLink
      key={name}
      to={is_page_active ? nav_to : "/"}
      className={({ isActive }) => (isActive ? "active" : "notActive")}
      style={{
        margin: "0.5rem",
        padding: name === "Logo" ? "0.5rem" : "0.5rem",
        borderRadius: "100%",
      }}
    >
      <img
        alt="icon"
        className={is_page_active ? "svg_active" : "svg_disabled"}
        src={icon_path}
        width={name === "Logo" ? "44px" : "24px"}
      />
    </NavLink>
  ) : (
    <div
      style={{
        margin: "1rem",
        padding: name === "Logo" ? "0.5rem" : "0.5rem",
        borderRadius: "100%",
      }}
    >
      <img
        alt="icon"
        className={is_page_active ? "svg_active" : "svg_disabled"}
        src={icon_path}
        width={name === "Logo" ? "44px" : "24px"}
      />
    </div>
  );
};

export default NavBarIcon;
