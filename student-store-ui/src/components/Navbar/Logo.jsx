import * as React from "react"
import "./Navbar.css"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
    return (
    <div className = "logo">
     <Link to ="/"> 
        <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo" />
            </Link>
    </div>
)}