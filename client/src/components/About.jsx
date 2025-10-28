import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./about.css";


/*  About Page */

export default function About() {
  return (
    <main className="about-page">
      <h1>Get to know me</h1>

      <section className="about-layout">
        <div className="about-text">
          <div className="about-photo-card">
            <img className="about-photo" src="/Photo.png" alt="Kaylie headshot" />
          </div>

          <p className="about-name-centered">Hi my name is Kaylie Moskal</p>

          <p>
            I am a Health Informatics Technology student at Centennial College in
            Toronto. My academic path has introduced me to software development,
            healthcare systems, and database management, while my personal interest
            in analytics has led me to focus more closely on data visualization
            using tools like Tableau and Power BI.
          </p>

          <p>
            Beyond coursework, I’ve completed projects that combine coding with
            healthcare and data analysis. These experiences taught me how to turn
            raw information into clear insights, skills I am excited to apply in
            professional settings. I am actively seeking Winter 2026 co-op
            opportunities where I can contribute, grow, and continue developing my
            technical skills.
          </p>

          <p>
            Outside of tech, I enjoy camping and hiking in the backcountry, which
            balances the time I spend coding. I also foster senior dogs from
            shelters and neglected homes, an experience that keeps me grounded and
            motivated to work on projects that matter.
          </p>

          <h2 className="about-subheader">Find me online</h2>

          <div className="about-links">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <IoDocumentTextOutline /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/kaylie-moskal-a70172215"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/KayMSolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}