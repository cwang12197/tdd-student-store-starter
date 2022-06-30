import * as React from "react";
import "./Navbar.css";
import Logo from "./Logo.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="links">
        <div className="socials"> </div>
        <li>
          {" "}
          <HashLink smooth to="/">
            Home{" "}
          </HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink smooth to="/#About">
            About Us{" "}
          </HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink smooth to="/#Contact">
            Contact Us
          </HashLink>{" "}
        </li>
        <li>
          {" "}
          <HashLink smooth to="/#Buy">
            Buy Now
          </HashLink>{" "}
        </li>
      </ul>
    </nav>
  );
}
