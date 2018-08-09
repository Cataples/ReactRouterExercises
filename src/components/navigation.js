import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/test" activeStyle={{ color: "green" }}>
        Test
      </NavLink>
      <NavLink to="/about" activeStyle={{ color: "green" }}>
        About
      </NavLink>
      <NavLink to="/contact" activeStyle={{ color: "green" }}>
        Contact
      </NavLink>
      <NavLink to="/" activeStyle={{ color: "green" }}>
        Home
      </NavLink>
      <NavLink to="saddasd" activeStyle={{ color: "green" }}>
        Random 404
      </NavLink>
    </div>
  );
};

export default NavBar;
