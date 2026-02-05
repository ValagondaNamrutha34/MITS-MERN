import React, { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      console.log("Signup Data:", userData);
    } else {
      console.log("Login Data:", {
        email: userData.email,
        password: userData.password,
      });
    }
  };

  return (
    <div>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </>
        )}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />

        <button type="submit">
          {isSignup ? "Create Account" : "Login"}
        </button>
      </form>

      <p>
        {isSignup ? "Already have an account?" : "New user?"}{" "}
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
