import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let temp = {};

    if (!email.trim()) {
      temp.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      temp.email = "Enter a valid email.";
    }

    if (!password.trim()) {
      temp.password = "Password is required.";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      alert("Login successful (dummy)!");
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          background: #000;
          min-height: 100vh;
          padding-top: 60px;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .login-title {
          font-size: 48px;
          margin-bottom: 40px;
        }

        .login-form {
          width: 40%;
          min-width: 300px;
        }

        .input-group {
          margin-bottom: 25px;
        }

        .login-form input {
          width: 100%;
          padding: 18px;
          background: transparent;
          border: 1px solid #888;
          color: #fff;
          font-size: 20px;
          outline: none;
        }

        .input-error {
          border-color: #ff4444 !important;
        }

        .error-text {
          color: #ff4444;
          margin-top: 6px;
          font-size: 14px;
        }

        .forgot-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #bbb;
          text-decoration: underline;
          font-size: 16px;
        }

        .login-btn {
          width: 200px;
          padding: 18px;
          background: #333;
          color: #fff;
          font-size: 22px;
          border: none;
          cursor: pointer;
          display: block;
          margin: 20px auto;
        }

        .login-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .create-account {
          display: block;
          text-align: center;
          color: #ccc;
          font-size: 18px;
          margin-top: 15px;
          text-decoration: underline;
        }
      `}</style>

      <div className="login-container">
        <h1 className="login-title">Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={submitted && errors.email ? "input-error" : ""}
            />
            {submitted && errors.email && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={submitted && errors.password ? "input-error" : ""}
            />
            {submitted && errors.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          
          
        </form>
      </div>
    </>
  );
}