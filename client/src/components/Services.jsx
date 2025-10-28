import React from 'react';
import './service.css';

const items = [
  { icon: '/code.png', title: 'Web Development', text: 'Building websites with HTML, CSS, JavaScript, and React.' },
  { icon: '/web-development.png', title: 'Backend Development', text: 'Server-side apps with Node.js and Connect/Express.' },
  { icon: '/data-management.png', title: 'Database Management', text: 'Beginner SQL queries and organizing data effectively.' },
  { icon: '/analysis.png', title: 'Data Visualization', text: 'Charts and dashboards using Excel, Tableau, Looker Studio.' },
  { icon: '/data.png', title: 'Programming Support', text: 'C# and JavaScript help for problem solving and apps.' },
];

export default function Services() {
  return (
    <main className="services">
      <header className="services__header">
        <h1>Services</h1>
        <p>Here are some of the skills and services I can provide:</p>
      </header>

      <section className="services-grid">
        {items.map(({ icon, title, text }) => (
          <article className="service-card" key={title}>
            <img src={icon} alt={title + ' icon'} className="service-card__icon" />
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__text">{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}