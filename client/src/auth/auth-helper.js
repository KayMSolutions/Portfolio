// client/src/auth/auth-helper.js

import { signout } from "./api-auth";

const auth = {
  // Check if a user is logged in (JWT in sessionStorage)
  isAuthenticated() {
    if (typeof window === "undefined") return false;

    const stored = sessionStorage.getItem("jwt");
    if (!stored) return false;

    try {
      return JSON.parse(stored); // { token, user: { _id, name, email, role } }
    } catch (err) {
      console.log("Error parsing stored jwt:", err);
      return false;
    }
  },

  // Save JWT after successful signin
  authenticate(jwt, cb) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    }
    if (cb) cb();
  },

  // Clear JWT on signout
  clearJWT(cb) {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("jwt");
    }
    if (cb) cb();

    // Notify backend (optional)
    signout().then(() => {
      // nothing else needed for now
    });
  },
};

export default auth;