import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/authContext";
import { useDataContext } from "../contexts/dataContext";

export default function Nav() {
  const { token, logoutHandler } = useAuth();
  const { state } = useDataContext();

  return (
    <nav className="nav">
      <div className="nav-title">
        <p>
          <a href="/"> Plethora </a>
          <span className="text-sm">v2.0</span>
        </p>
      </div>
      <div className="nav-search">
        <input className="nav-search-input" type="text" />
        <svg
          className="nav-search-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="nav-pills">
        <Link className="alert-badge" to="/wishlist">
          <svg
            className="nav-badge-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            ></path>
          </svg>
          {state.wishlistData.length > 0 && (
            <span className="badge">{state.wishlistData.length}</span>
          )}
        </Link>
        <Link className="alert-badge" to="/cart">
          <svg
            className="nav-badge-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          {state.cartData.length > 0 && (
            <span className="badge">{state.cartData.length}</span>
          )}
        </Link>
        {token ? (
          <a onClick={logoutHandler} className="btn-filled">
            Logout
          </a>
        ) : (
          <Link to="/login" className="btn-filled">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
