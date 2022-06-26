import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../logo.svg"
import styled from "styled-components";

const LogoImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: "white";
`;

export default function Topbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <LogoImg src={logo} alt="site-logo" className="shadow p-2 me-2"/>
          <span>5 Components</span>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="components">
                Components
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="archive">
                Archive
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}