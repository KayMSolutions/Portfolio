import React from "react";

import "./contact.css";

/*  Contact Page */

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for reaching out! This demo form isn’t wired yet.");
  }

  return (
    <main className="contact-page" style={{ padding: "32px 20px", maxWidth: 600, margin: "0 auto" }}>
      <h1>Contact</h1>

      <form className="contact-form" onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" required />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" required />
        </div>

        <div>
          <label htmlFor="reason">Reason for Contact</label>
          <select id="reason" required>
            <option value="">-- Please choose an option --</option>
            <option value="networking">Networking</option>
            <option value="job">Job Opportunity</option>
            <option value="school">School Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Say hello..." required />
        </div>

        <button type="submit">Send</button>
      </form>

      <div style={{ marginTop: "20px", fontSize: "14px" }}>
        
      </div>
    </main>
  );
}