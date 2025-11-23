import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/components/Home.jsx";
import Layout from "./src/components/Layout.jsx";
import Footer from "./src/components/Footer.jsx";

import About from "./src/components/About.jsx";
import Education from "./src/components/Education.jsx";
import Project from "./src/components/Project.jsx";
import Contact from "./src/components/Contact.jsx";
import Services from "./src/components/Services.jsx";

import Signin from "./src/auth/Signin.jsx";
import Signup from "./src/auth/Signup.jsx";

import AdminContacts from "./src/admin/AdminContacts.jsx";
import AdminProjects from "./src/admin/AdminProjects.jsx";
import AdminQualifications from "./src/admin/AdminQualifications.jsx";
import AdminDashboard from "./src/admin/AdminDashboard.jsx";

import PrivateRoute from "./src/auth/PrivateRoute.jsx";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Pages (Protected) */}
        <Route
          path="/admin/contacts"
          element={
            <PrivateRoute>
              <AdminContacts />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <PrivateRoute>
              <AdminProjects />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/qualifications"
          element={
            <PrivateRoute>
              <AdminQualifications />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}