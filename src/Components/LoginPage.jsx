import React, { useState } from "react";
import "./styles.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleLogin = () => {
    setStatus({ 
      type: "error", 
      message: "Google login is not implemented. This is a demo button. Please use email/password login." 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus({ type: "error", message: data.message || "Login failed." });
      } else {
        setStatus({ type: "success", message: data.message });
        setPassword("");
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-root">
      {/* main container */}
      <div className="login-card" aria-labelledby="login-title">
        {/* Logo / title (top) */}
        <div className="logo-placeholder" aria-hidden="true">
          WT
        </div>

        <h1 id="login-title" className="login-title">
          Login
        </h1>

        {/* Continue with Google – demo button */}
        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          <svg className="google-icon" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
            <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.96-2.184l-2.908-2.258c-.806.54-1.837.86-3.052.86-2.347 0-4.33-1.585-5.04-3.714H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
            <path fill="#FBBC05" d="M3.96 10.704c-.18-.54-.282-1.117-.282-1.704s.102-1.164.282-1.704V4.964H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.036l3.003-2.332z"/>
            <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.964L3.96 7.296C4.67 5.167 6.653 3.58 9 3.58z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit} noValidate aria-describedby="status-message">
          {/* Email field */}
          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`field-input ${errors.email ? "field-input-error" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email}
            </p>
          )}

          {/* Password field */}
          <label className="field-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`field-input ${errors.password ? "field-input-error" : ""}`}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {errors.password && (
            <p id="password-error" className="field-error">
              {errors.password}
            </p>
          )}

          <button type="submit" className="primary-btn" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Log in"}
          </button>
        </form>

        {/* Secondary links */}
        <button className="link-btn" type="button">
          Use single sign-on
        </button>
        <button className="link-btn" type="button">
          Reset password
        </button>

        {/* Status message (accessible) */}
        <div
          id="status-message"
          className={`status-message ${status ? status.type : ""}`}
          aria-live="polite"
        >
          {status && status.message}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

