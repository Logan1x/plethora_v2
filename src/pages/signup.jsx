import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="container-auth">
      <div className="container-paint text-center">
        <h1>Signup</h1>
        <form action="" className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
          <div className="form-group-flex">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              value="1"
              checked
            />
            <label htmlFor="remember" className="text-small">
              I accept all Terms & Conditions
            </label>
          </div>
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
          <div className="form-redirect">
            <Link to="/login">Already Have an account? Login</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
