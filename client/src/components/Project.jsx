import React from "react";
import "./project.css";

const Projects = () => {
  const items = [
    {
      title: "Measles Dashboard (Tableau)",
      img: "/Tableau.png", 
      url: "https://public.tableau.com/views/Project2_17543392585400/OntarioMeaslesTrendsAndPatterns2024-2025?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      blurb:
        "An exploratory dashboard using Ontario health data, showing case trends by EpiWeek, immunization status, and hospitalization metrics. Built with Tableau to highlight my skills in data visualization and analytics.",
    },
    {
      title: "CampusConnect (Software Engineering Project)",
      img: "/CampusConnect.png",
      url: "/CampusConnect-Project.docx",
      blurb:
        "A team project that focused on breaking down a student event and RSVP platform. I created detailed use case tables, stakeholder analysis, functional and non-functional requirements, and supporting UML diagrams.",
    },
    {
  title: "Premier Viewer (C# WinForms)",
  img: "/github-logo.png",
  url: "https://github.com/KayMSolutions/premier-viewer/tree/main",
  blurb:
    "A Windows Forms app that loads Ontario premiers from a Dictionary and displays name, life, term, and photo with list-driven UI. Built with C# to practice object-oriented programming and GUI design.",
},
    {
      title: "Real Estate Website (HTML/CSS/JavaScript)",
      img: "/Weston.png",
      url: "http://studentweb.cencol.ca/kmoskal/Final%20Project/Home.html",
      blurb:
        "A first semester project where I built a responsive real estate website using HTML, CSS, and JavaScript. The site featured multiple property listings, a contact form, and clean layout styling.",
    },
  ];

  return (
    <main className="projects-page">
      <h1 className="projects-title">Projects</h1>

      <section className="projects-grid">
        {items.map((p) => {
          const inner = (
            <div className="project-card-inner">
              {p.img && <img className="project-image" src={p.img} alt={p.title} />}
              <div className="project-details">
                <h2 className="project-card-title">{p.title}</h2>
                <p className="project-card-blurb">{p.blurb}</p>
              </div>
            </div>
          );

          return (
            <article key={p.title} className="project-card">
              {p.url ? (
                <a
                  className="project-card-link"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;