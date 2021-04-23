import React, { useState } from "react";
import { Link } from "react-router-dom";
import blackLogo from "../../assets/logo-black.svg";
import DropDown from "./DropDown";
import Logo from "../Logo";
import "./NavBar.css";
import { NavSection } from "../Styles";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <NavSection>
      <nav className="navbar">
        <Link to="/" className="navbar-logo"><Logo logo={blackLogo} text="Logo black" /></Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link>

          </li>
          <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to="/our-products" className="nav-links" onClick={closeMobileMenu}>Our Products</Link>
            {dropdown && <DropDown />}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact Us</Link>
          </li>

        </ul>
      </nav>

    </NavSection>
  );
};

export default NavBar;
