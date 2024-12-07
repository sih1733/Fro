import React from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="navbar-container">
      <div className="container">
        <div className="navbar-content">
          <div className="logo-container">
            <img src={Logo} alt="logo" className="logo-img" />
            <span className="logo-text">Chroma-Radar</span>
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Team member</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
