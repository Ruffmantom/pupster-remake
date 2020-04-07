import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/about" className="navbar-brand">
        Pupster
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
        </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
            >
              Discover
        </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Search
        </Link>
          </li>

        </ul>
      </div>
    </nav>

  );
}

export default NavTabs;
