// useGSAP Hooks
import { useGSAP } from "@gsap/react";
// import GSAP
import gsap from "gsap";

import "../CSS/navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  useGSAP(() => {
    // final to initial position
    gsap.from(".linkAnimation", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });

    gsap.from(".nav-right-container", {
      y: 10,
      delay: 1,
      duration: 1.5,
      opacity: 0,
    });
  });
  return (
    <div className="nav-main-container">
      <div className="nav-sub-container">
        <div className="nav-logo">
          <img src="logo.png" alt="loading.." />
        </div>
        <div className="nav-left-container">
          <div className="linkAnimation">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/packages">
              Packages
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/domestic">
              Domestics
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/international">
              International
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/booknow">
              Book
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/review">
              Review
            </Link>
          </div>
          <div className="linkAnimation">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="nav-right-container">
          <div className="login">Login</div>

          <div className="input-box">
            <input type="text" placeholder="search the palce" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
