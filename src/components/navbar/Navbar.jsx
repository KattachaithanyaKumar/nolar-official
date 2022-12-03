import { React, useState } from "react";
import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  let hamburger_logo = menu;
  if (toggleMenu) {
    hamburger_logo = close;
  } else {
    hamburger_logo = menu;
  }

  return (
    <div className="navbar">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="nav-links">
        <ul className="nav-menu">
          <li className="active">
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li>
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li>
            <Link to="#team" smooth>
              Team
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-hamburger-menu-icon">
        <img
          src={hamburger_logo}
          alt="hamburger"
          onClick={() => {
            handleClick();
          }}
        />
      </div>

      {toggleMenu ? (
        <div className="navbar-menu-ham">
          <Link
            to="#home"
            smooth
            onClick={() => {
              handleClick();
            }}
          >
            Home
          </Link>
          <Link
            to="#about"
            smooth
            onClick={() => {
              handleClick();
            }}
          >
            About
          </Link>
          <Link
            to="#team"
            smooth
            onClick={() => {
              handleClick();
            }}
          >
            Team
          </Link>
          <Link
            to="#contact"
            smooth
            onClick={() => {
              handleClick();
            }}
          >
            Contact
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
