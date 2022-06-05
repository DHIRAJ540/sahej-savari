import React from "react";
import "./nav.scss";

import logo from "../../assets/img/logo.svg";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <a href="#about"><div className="nav-item">About</div></a>
          <a href="#products"><div className="nav-item">Vehicles</div></a>
          <a href="#contact"><div className="nav-item">Contact</div></a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
