import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5"; 
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { LuFileUser } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

/* Main layout Page */
export default function Layout() {
  return (
    <header className="site-header">
      <div className="header-content">
        {/* Logo on the left */}
        <img src="/K.png" alt="KM Logo" className="logo-img" />

        {/* Navbar on the right */}
        <nav className="nav-bar">
          <Link to="/"><IoHomeOutline /> Home</Link>
          <Link to="/about"><MdOutlinePermIdentity />About</Link>
          <Link to="/education"><IoSchoolOutline /> Education</Link>
          <Link to="/services"><LuFileUser /> Services</Link>
          <Link to="/projects"><FaLaptopCode /> Projects</Link>
          <Link to="/contact"><GrContact /> Contact</Link> {/* 👈 icon added */}
        </nav>
      </div>
    </header>
  );
}