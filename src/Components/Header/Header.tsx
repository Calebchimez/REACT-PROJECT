import React from "react";
import "./Header.css";
import abacha from "../../assets/team-01.png";

function header() {
  return (
    <div>
      <nav className="navbar-section-div">
        <div>
          <img src={abacha} alt="img " />
        </div>

        <ul className="navlinks-display">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button>202-555-0188</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default header;
