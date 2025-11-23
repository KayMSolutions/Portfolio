import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "./api-auth";
import auth from "./auth-helper";

export default function Signin() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirect: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: values.email,
      password: values.password,
    };

    const data = await signin(user);

    if (data.error) {
      setValues({ ...values, error: data.error });
    } else {
      auth.authenticate(data, () => {
        navigate("/"); // redirect home after login
      });
    }
  };

  return (
    <main style={{ padding: "32px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Sign In</h1>

      {values.error && (
        <p style={{ color: "red", marginBottom: "12px" }}>{values.error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "12px", marginTop: "20px" }}
      >
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

        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}