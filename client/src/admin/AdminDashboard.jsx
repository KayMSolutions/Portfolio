import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <main style={{ padding: "32px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>

      <p style={{ marginTop: "16px" }}>
        Welcome! As an admin, you can manage all data in the system.
      </p>

      <ul style={{ marginTop: "24px", lineHeight: "2" }}>
        <li><Link to="/admin/contacts">Manage Contacts</Link></li>
        <li><Link to="/admin/qualifications">Manage Qualifications</Link></li>
        <li><Link to="/admin/projects">Manage Projects</Link></li>
      </ul>
    </main>
  );
}