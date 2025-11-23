const API_URL = "http://localhost:5000/api/auth";

// Call backend to sign in
const signin = async (user) => {
  try {
    const response = await fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (err) {
    console.log("Signin error:", err);
    return { error: "Signin request failed" };
  }
};

// Call backend to register (signup)
const signup = async (user) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (err) {
    console.log("Signup error:", err);
    return { error: "Signup request failed" };
  }
};

// Call backend to sign out
const signout = async () => {
  try {
    const response = await fetch(`${API_URL}/signout`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log("Signout error:", err);
    return { error: "Signout request failed" };
  }
};

export { signin, signup, signout };