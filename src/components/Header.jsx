import React from "react";
import { Link } from "react-scroll";
import "../css/Header.css";
function Header() {
  return (
    <div>
      <header className="mb-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container ">
            <button
              className="navbar-toggler bg-body-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarNav"
            >
              <ul className="navbar-nav gap-4 fs-5">
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  to="about"
                >
                  <li className="nav-item">About</li>
                </Link>
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  to="exp"
                >
                  <li className="nav-item">Experience</li>
                </Link>
                <Link
                  className="nav-link"
                  smooth={true}
                  duration={200}
                  to="contact"
                >
                  <li className="nav-item">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
