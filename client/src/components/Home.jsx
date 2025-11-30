import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

/*  Home Page */
export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-intro">
          <h1 className="home-greeting">Hi, I’m Kaylie.</h1>
          
          <p className="home-blurb">
            I’m a Health Informatics Technology student who turns ideas into simple, useful projects. 
            Recently I’ve been building dashboards and small apps while leveling up in React and R. 
            I’m excited to grow into data analytics, dialing in the details and crafting visuals that make insights pop.
          </p>
          
          <br></br>
          <div className="home-actions">
            <Link className="home-cta" to="/about">Get to know me better </Link>
          </div>
          <p>CI/CD test update from GitHubb.</p>
        </div>

        {/* Right-side illustration */}
        <img src="/focused.webp" alt="Focused illustration" className="home-illustration" />
      </section>
    </main>
  );

}

