import React, { useState } from "react";
import { signup } from "./api-auth";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const data = await signup(user);

    if (data.error) {
      setValues({ ...values, error: data.error, success: false });
    } else {
      setValues({
        name: "",
        email: "",
        password: "",
        error: "",
        success: true,
      });
    }
  };

  return (
    <main style={{ padding: "32px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Create Account</h1>

      {values.error && (
        <p style={{ color: "red", marginBottom: "12px" }}>{values.error}</p>
      )}

      {values.success && (
        <p style={{ color: "green", marginBottom: "12px" }}>
          Account created! You can now sign in.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "12px", marginTop: "20px" }}
      >
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}