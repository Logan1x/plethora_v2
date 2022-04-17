import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/authContext";

export default function Signup() {
  const [udata, setUdata] = useState({ name: "", email: "", password: "" });

  const { signupHandler } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signupHandler(udata);
    setUdata({ name: "", email: "", password: "" });
  };

  return (
    <main className="container-auth">
      <div className="container-paint text-center">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Ex: Khushal"
            value={udata.name}
            onChange={(e) => {
              setUdata({ ...udata, name: e.target.value });
            }}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Ex: Khush@plethora.app"
            value={udata.email}
            onChange={(e) => {
              setUdata({ ...udata, email: e.target.value });
            }}
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
            onChange={(e) => {
              setUdata({ ...udata, password: e.target.value });
            }}
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
