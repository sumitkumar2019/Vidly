import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning fixed-top p">
      <Link className="navbar-brand bg-dark p-3" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark text-dark-50 font-weight-bold"
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark text-dark-50 font-weight-bold"
              to="/customers"
            >
              Customers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark text-dark-50 font-weight-bold"
              to="/rentals"
            >
              Rentals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark text-dark-50 font-weight-bold"
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link text-dark text-dark-50 font-weight-bold"
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
