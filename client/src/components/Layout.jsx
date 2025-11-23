import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5"; 
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { LuFileUser } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

import auth from "../auth/auth-helper";  // <-- NEW

export default function Layout() {
  const navigate = useNavigate();
  const jwt = auth.isAuthenticated();

  const handleLogout = () => {
    auth.clearJWT(() => {
      navigate("/signin");
    });
  };

  return (
    <header className="site-header">
      <div className="header-content">

        {/* Logo */}
        <img src="/K.png" alt="KM Logo" className="logo-img" />

        {/* Navbar */}
        <nav className="nav-bar">
          <Link to="/"><IoHomeOutline /> Home</Link>
          <Link to="/about"><MdOutlinePermIdentity /> About</Link>
          <Link to="/education"><IoSchoolOutline /> Education</Link>
          <Link to="/services"><LuFileUser /> Services</Link>
          <Link to="/projects"><FaLaptopCode /> Projects</Link>
          <Link to="/contact"><GrContact /> Contact</Link>
          {/* Only show Admin link if logged in AND role is admin */}
{jwt && jwt.user && jwt.user.role === "admin" && (
  <Link to="/admin/dashboard">Admin</Link>
)}

          {/* Sign In / Sign Out */}
          {!jwt && <Link to="/signin">Sign In</Link>}

          {jwt && (
            <Link 
  to="#" 
  onClick={(e) => {
    e.preventDefault();
    handleLogout();
  }}
  className="nav-bar-link"
>
  Sign Out
</Link>
          )}
        </nav>
      </div>
    </header>
  );
}