import React, { useState } from "react";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [clicked, setClicked] = useState(false);

  const styles = {
    container: {
      background: "#000",
      minHeight: "100vh",
      paddingTop: "60px",
      color: "#fff",
      textAlign: "center",
    },
    title: { 
      fontSize: "48px", 
      marginBottom: "40px" 
    },
    form: { 
      width: "40%", 
      minWidth: "300px", 
      margin: "0 auto" 
    },
    input: {
      width: "100%",
      padding: "16px",
      marginBottom: "10px",
      border: "1px solid #888",
      background: "transparent",
      color: "#fff",
      fontSize: "18px",
    },
    errorText: { 
      color: "#ff4444", 
      marginBottom: "10px" 
    },
    button: {
      width: "200px",
      padding: "16px",
      background: "#333",
      color: "#fff",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
      marginTop: "15px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    switchText: {
      marginTop: "20px",
      color: "#bbb",
      textDecoration: "underline",
      cursor: "pointer",
    },
  };

  const validate = () => {
    let temp = {};
    if (!email) 
      temp.email = "Email required";
    if (!password) 
      temp.password = "Password required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSignup = async () => {
    setClicked(true);
    if (!validate()) 
      return;

    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      alert("Signup successful!");
      setEmail("");
      setPassword("");
      setErrors({});
      setClicked(false);
      setIsSignup(false); 
    } catch {
      alert("Signup failed.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setClicked(true);
    if (!validate()) 
      return;

    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      localStorage.setItem("loggedInUser", JSON.stringify(found));
      alert("Login successful!");
      window.location.href = "/"; // redirect to home
    } else {
      alert("Invalid email or password");
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleSignup();
    } else {
      handleLogin(e);
    }
  };


  return (
    <div style={styles.container}>
      
      {/* PAGE TITLE */}
      <h1 style={styles.title}>{isSignup ? "Sign Up" : "Login"}</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >
        {/* Email */}
        <input
          style={styles.input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {clicked && errors.email && (
          <p style={styles.errorText}>{errors.email}</p>
        )}

        {/* Password */}
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {clicked && errors.password && (
          <p style={styles.errorText}>{errors.password}</p>
        )}

        {/* BUTTONS */}
        {!isSignup ? (
          <>
            <button type="submit" style={styles.button}>
              Login
            </button>

            <p
              style={styles.switchText}
              onClick={() => {
                setIsSignup(true);
                setClicked(false);
                setErrors({});
              }}
            >
              Create a new account
            </p>
          </>
        ) : (
          <>
            <button
              type="button"
              style={styles.button}
              onClick={handleSignup}
            >
              Sign Up
            </button>

            <p
              style={styles.switchText}
              onClick={() => {
                setIsSignup(false);
                setClicked(false);
                setErrors({});
              }}
            >
              Already have an account? Login
            </p>
          </>
        )}
      </form>
    </div>
  );
}
