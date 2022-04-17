import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/authContext";

export default function Login() {
  const [udata, setUdata] = useState({ email: "", password: "" });

  const { loginHandler } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginHandler(udata);
    setUdata({ email: "", password: "" });
  };

  return (
    <main className="container-auth">
      <div className="container-paint text-center">
        <h1>Login</h1>
        <form action="" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Ex: example@example.com"
            value={udata.email}
            onChange={(e) => setUdata({ ...udata, email: e.target.value })}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Ex: *******"
            value={udata.password}
            onChange={(e) => setUdata({ ...udata, password: e.target.value })}
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
            <label className="text-small" htmlFor="remember">
              Remember me
            </label>
            <small className="text-small">Forgot your password?</small>
          </div>
          <button type="submit" className="auth-btn">
            Login
          </button>

          <button
            className="auth-test-btn"
            onClick={() => loginHandler("khu@gmail.com", "khush")}
          >
            Test Credentials
          </button>
          <div className="form-redirect">
            <Link to="/signup">Dont have account? Sign up here</Link>
          </div>
        </form>
      </div>
    </main>
  );
}
