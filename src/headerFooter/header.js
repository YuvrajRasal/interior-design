import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{ display: "flex" }} to="/">
          <div className="header-logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="header-text">
            <p>Name</p>
          </div>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`header-pages ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          {/* Temporariliy removed not sure if useful */}

          {/* <li>
            <Link to={`team`}>Team</Link>
          </li> */}
          <li>
            <Link to={`/services`}>Services</Link>
          </li>
          <li>
            <Link to={`/projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`/blog`}>Blog</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
