import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

import Logo from "../resources/dsc-bist-nav/dsc-bist-logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-white nav-bar fixed-top" id="about-1">
        <div className="row">
          <div className="col-12  mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="/">
                <img src={Logo} className="nav-brand-logo" alt="logo" />
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item pr-3">
                    <NavLink exact className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item pr-3">
                    <NavLink className="nav-link" to="/team">
                      Team
                    </NavLink>
                  </li>
                  <li className="nav-item pr-3">
                    <NavLink className="nav-link" to="/event">
                      Event
                    </NavLink>
                  </li>
                  <li className="nav-item pr-3">
                    <NavLink className="nav-link" to="/workshop">
                      WorkShop
                    </NavLink>
                  </li>
                  <li className="nav-item pr-3">
                    <NavLink exact className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item pr-3">
                    <a href="https://dsc.community.dev/bansal-institute-of-science-and-technology-bhopal/">
                      <button className="btn btn-join">Join Chapter</button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
