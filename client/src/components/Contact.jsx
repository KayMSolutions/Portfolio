import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    reason: "",
    message: "",
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      success: "",
      error: "",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const contactData = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      reason: values.reason,
      message: values.message,
    };

    try {
     const response = await fetch("/api/contacts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(contactData),
});

      const data = await response.json();

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          firstname: "",
          lastname: "",
          email: "",
          reason: "",
          message: "",
          success: "Message sent successfully!",
          error: "",
        });
      }
    } catch (err) {
      setValues({ ...values, error: "Server error. Try again." });
    }
  }

  return (
    <main
      className="contact-page"
      style={{ padding: "32px 20px", maxWidth: 600, margin: "0 auto" }}
    >
      <h1>Contact</h1>

      {/* Success message */}
      {values.success && (
        <p style={{ color: "lightgreen", marginBottom: "12px" }}>
          {values.success}
        </p>
      )}

      {/* Error message */}
      {values.error && (
        <p style={{ color: "salmon", marginBottom: "12px" }}>{values.error}</p>
      )}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "12px" }}
      >
        <div>
          <label>First Name</label>
          <input
            name="firstname"
            type="text"
            placeholder="Your first name"
            value={values.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            name="lastname"
            type="text"
            placeholder="Your last name"
            value={values.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Reason</label>
          <select
            name="reason"
            value={values.reason}
            onChange={handleChange}
            required
          >
            <option value="">-- Please choose an option --</option>
            <option value="networking">Networking</option>
            <option value="job">Job Opportunity</option>
            <option value="school">School Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Say hello..."
            value={values.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </main>
  );
}