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
          <a href="#about">
            <div className="nav-item">About</div>
          </a>
          <div className="nav-item veh_hover">
            <h3 className="hov">Our products</h3>
            <ul className="vehicle_list">
              <a href="#gold">
                <li className="vehicle">Gold</li>
              </a>
              <a href="#goldss">
                <li className="vehicle">Gold SS</li>
              </a>
              <a href="#diamond">
                <li className="vehicle">Diamond</li>
              </a>
              <a href="#loader">
                <li className="vehicle">E-loader</li>
              </a>
            </ul>
          </div>
          <a href="#gallery">
            <div className="nav-item">Gallery</div>
          </a>
          <a href="#contact">
            <div className="nav-item">Contact</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
