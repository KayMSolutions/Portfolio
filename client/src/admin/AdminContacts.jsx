import React, { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts
  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error loading contacts:", err));
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    try {
      const response = await fetch(`/api/contacts/${id}`, { method: "DELETE" });

      if (response.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <main style={{ padding: "32px" }}>
      <h1>Admin: Contacts</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          background: "#65755cff",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Reason</th>
            <th style={thStyle}>Message</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <tr key={c._id}>
                <td style={tdStyle}>{c.firstname}</td>
                <td style={tdStyle}>{c.lastname}</td>
                <td style={tdStyle}>{c.email}</td>
                <td style={tdStyle}>{c.reason}</td>
                <td style={tdStyle}>{c.message}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => handleDelete(c._id)}
                    style={{
                      background: "red",
                      color: "white",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={tdStyle} colSpan="6">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}

// Styling
const thStyle = {
  padding: "10px",
  border: "1px solid #696242ff",
  background: "#47514aff",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ccc",
};