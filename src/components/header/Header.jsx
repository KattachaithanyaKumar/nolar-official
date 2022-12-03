import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header" id="home">
      <div className="header-title">
        <h1>
          NEED <span className="header-title-red">BLOOD?</span>
        </h1>
      </div>
      <div className="header-links">
        <button>Vist Site</button>
      </div>
    </div>
  );
}

export default Header;
