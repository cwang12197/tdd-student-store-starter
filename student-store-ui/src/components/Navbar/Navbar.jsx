import * as React from "react"
import "./Navbar.css"
import Logo from "./Logo.jsx"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Logo
      />
      <ul className="links">
      <div className = "socials"> </div>
        <li> <Link to ="/">Home </Link> </li>
        <li> <Link to ="/#About">About Us </Link> </li>
        <li> <Link to ="/#Contact">Contact Us</Link> </li>
        <li> <Link to = "/#Buy">Buy Now</Link> </li> 
      </ul>
    </nav>
  )
}
