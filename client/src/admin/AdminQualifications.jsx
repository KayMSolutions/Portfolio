import React, { useEffect, useState } from "react";

export default function AdminQualifications() {
  const [qualifications, setQualifications] = useState([]);
  const [values, setValues] = useState({
    _id: "",
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
    error: "",
    success: "",
  });

  // Load all qualifications
  const loadQualifications = async () => {
    try {
      const response = await fetch("/api/qualifications");
      const data = await response.json();
      setQualifications(data);
    } catch (err) {
      console.log("Load error:", err);
    }
  };

  useEffect(() => {
    loadQualifications();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Create or update qualification
  const handleSubmit = async (e) => {
    e.preventDefault();

    const qData = {
      title: values.title,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      completion: values.completion,
      description: values.description,
    };

    const method = values._id ? "PUT" : "POST";
    const url = values._id
      ? `/api/qualifications/${values._id}`
      : "/api/qualifications";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(qData),
      });

      const data = await response.json();

      if (data.error) {
        setValues({ ...values, error: data.error, success: "" });
      } else {
        setValues({
          _id: "",
          title: "",
          firstname: "",
          lastname: "",
          email: "",
          completion: "",
          description: "",
          success: "Saved successfully!",
          error: "",
        });

        loadQualifications();
      }
    } catch (err) {
      setValues({ ...values, error: "Server error", success: "" });
    }
  };

  // Load qualification into form for editing
  const editQual = (q) => {
    setValues({
      _id: q._id,
      title: q.title,
      firstname: q.firstname,
      lastname: q.lastname,
      email: q.email,
      completion: q.completion,
      description: q.description,
      error: "",
      success: "",
    });
  };

  // Delete qualification
  const deleteQual = async (id) => {
    if (!window.confirm("Delete this entry?")) return;

    try {
      await fetch(`/api/qualifications/${id}`, { method: "DELETE" });
      loadQualifications();
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <main style={{ padding: "32px" }}>
      <h1>Admin – Qualifications</h1>

      {/* Success/error messages */}
      {values.success && (
        <p style={{ color: "lightgreen" }}>{values.success}</p>
      )}
      {values.error && <p style={{ color: "salmon" }}>{values.error}</p>}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "12px", maxWidth: "500px" }}
      >
        <input
          name="title"
          placeholder="Qualification Title"
          value={values.title}
          onChange={handleChange}
          required
        />
        <input
          name="firstname"
          placeholder="First Name"
          value={values.firstname}
          onChange={handleChange}
        />
        <input
          name="lastname"
          placeholder="Last Name"
          value={values.lastname}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="completion"
          placeholder="Completion Year"
          value={values.completion}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          {values._id ? "Update Entry" : "Create Entry"}
        </button>
      </form>

      {/* List of qualifications */}
      <section style={{ marginTop: "40px" }}>
        <h2>All Qualifications</h2>

        {qualifications.length === 0 && <p>No entries found.</p>}

        {qualifications.map((q) => (
          <div
            key={q._id}
            style={{
              borderBottom: "1px solid #555",
              padding: "12px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{q.title}</strong>
              <p style={{ fontSize: "14px" }}>{q.description}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => editQual(q)}>Edit</button>
              <button onClick={() => deleteQual(q._id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}