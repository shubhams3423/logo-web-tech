import React from "react";
import Logo from "./Logo";
import "../componentsCss/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="header">Header</div>
    </div>
  );
};

export default Navbar;
