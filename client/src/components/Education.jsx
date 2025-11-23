import React from "react";
import "./education.css";

/*  Education Page */

export default function Education() {
  const education = [
    {
      school: "Centennial College – Toronto, ON",
      program: "Advanced Diploma, Health Informatics Technology",
      dates: "2025 – Present",
      details: [
        "Coursework in software engineering, databases, C#, JavaScript, and health informatics systems.",
        "Hands-on projects: OpenEMR clinic simulation, Ontario health data dashboards.",
      ],
    },
    {
      school: "Coursera (IBM / Google / Other Providers)",
      program: "Online Certificates in Data Analytics & Web Development",
      dates: "2025 – Ongoing",
      details: [
        "Introduction to Data Analytics (IBM) – covering statistical analysis, data mining, and visualization.",
        "Web Development with React – beginner to intermediate front-end development.",
      ],
    },
  ];

  return (
    <main className="education">
      <h1>Education</h1>
      <section className="education-list">
        {education.map((edu) => (
          <article key={edu.program} className="education-item">
            <h2>{edu.school}</h2>
            <h3>{edu.program}</h3>
            <p className="dates">{edu.dates}</p>
            <ul>
              {edu.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}