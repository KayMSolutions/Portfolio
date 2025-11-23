import React, { useEffect, useState } from "react";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
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

  // Load all projects
  const loadProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      console.log("Error loading projects:", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Handle field changes
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      error: "",
      success: "",
    });
  };

  // Create or update (same form)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.title.trim()) {
      setValues({ ...values, error: "Project title is required." });
      return;
    }

    const projectData = {
      title: values.title,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      completion: values.completion,
      description: values.description,
    };

    const method = values._id ? "PUT" : "POST";
    const url = values._id ? `/api/projects/${values._id}` : "/api/projects";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      const data = await response.json();

      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          _id: "",
          title: "",
          firstname: "",
          lastname: "",
          email: "",
          completion: "",
          description: "",
          success: values._id ? "Project updated!" : "Project created!",
          error: "",
        });

        loadProjects();
      }
    } catch (err) {
      setValues({ ...values, error: "Server error. Try again." });
    }
  };

  // Load a project into the form for editing
  const editProject = (p) => {
    setValues({
      _id: p._id,
      title: p.title || "",
      firstname: p.firstname || "",
      lastname: p.lastname || "",
      email: p.email || "",
      completion: p.completion || "",
      description: p.description || "",
      error: "",
      success: "",
    });
  };

  // Delete project
  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      loadProjects();
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <main style={{ padding: "32px" }}>
      <h1>Admin – Projects</h1>

      {/* Success/Error messages */}
      {values.success && <p style={{ color: "lightgreen" }}>{values.success}</p>}
      {values.error && <p style={{ color: "salmon" }}>{values.error}</p>}

      {/* CRUD Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "12px",
          maxWidth: "500px",
          marginBottom: "40px",
        }}
      >
        <input
          name="title"
          placeholder="Project Title"
          value={values.title}
          onChange={handleChange}
          required
        />

        <input
          name="firstname"
          placeholder="First Name (optional)"
          value={values.firstname}
          onChange={handleChange}
        />

        <input
          name="lastname"
          placeholder="Last Name (optional)"
          value={values.lastname}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email (optional)"
          value={values.email}
          onChange={handleChange}
        />

        <input
          name="completion"
          placeholder="Completion (e.g. 2024)"
          value={values.completion}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
        />

        <button type="submit">
          {values._id ? "Update Project" : "Create Project"}
        </button>
      </form>

      {/* List of projects */}
      <section>
        <h2>All Projects</h2>

        {projects.length === 0 && <p>No projects found.</p>}

        {projects.map((p) => (
          <div
            key={p._id}
            style={{
              borderBottom: "1px solid #555",
              padding: "12px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{p.title}</strong>
              <p style={{ fontSize: "14px" }}>{p.description}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => editProject(p)}>Edit</button>
              <button onClick={() => deleteProject(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}