import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/components/Home.jsx";
import Layout from "./src/components/Layout.jsx";
import Footer from "./src/components/Footer.jsx";

import About from "./src/components/About.jsx";
import Education from "./src/components/Education.jsx";
import Project from "./src/components/Project.jsx";   // filename is Project.jsx
import Contact from "./src/components/Contact.jsx";
import Services from "./src/components/Services.jsx";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}