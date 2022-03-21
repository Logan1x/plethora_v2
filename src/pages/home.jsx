import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container-hero">
      <div className="hero-card-banner">
        <img
          src="https://plethora-project.netlify.app/assets/hero-image.jpg"
          alt=""
        />
      </div>
      <div className="hero-title">
        <h1>Plethora🚴</h1>
        <p>Whole new world is waiting for you.</p>
        <Link className="btn hero-btn" to="/products">
          Go Find Out
        </Link>
      </div>
      <div className="hero-card-2">
        <div className="hero-card-new-arrivals">
          <div>
            <img
              src="https://plethora-project.netlify.app/assets/cycle-new-arrival-1.jpg"
              alt=""
            />
          </div>
          <div className="card-new-arrivals-content">
            <p className="card-new-arrivals-caption">New Arrivals</p>
            <div className="card-text-bottom">
              <p className="card-new-arrivals-title">Kids Scooter</p>
              <p>Checkout best summer collection to stay warm in the season.</p>
            </div>
          </div>
        </div>
        <div className="hero-card-new-arrivals">
          <div>
            <img
              src="https://plethora-project.netlify.app/assets/cycle-new-arrival-3.jpeg"
              alt=""
            />
          </div>
          <div className="card-new-arrivals-content">
            <p className="card-new-arrivals-caption">New Arrivals</p>
            <div className="card-text-bottom">
              <p className="card-new-arrivals-title">Kids Tricycle</p>
              <p>Checkout best summer collection to stay warm in the season.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}