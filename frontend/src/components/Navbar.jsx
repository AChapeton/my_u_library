import React from "react";
import { Link, NavLink } from "react-router-dom";
import useSessionStore from "../store/useSessionStore";
import useLogout from "../api/useLogout";

const Navbar = () => {
  const {fetchLogout} = useLogout()
  const {account} = useSessionStore()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My U Library
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {
              account.role === "librarian"
              ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-book">
                      Create Book
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register a new Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/check-returns">
                      Check Returns
                    </Link>
                  </li>
                </>
              )
              : null
            }
            <li className="nav-item">
              <Link className="nav-link" to="/requests">
                Check Requests
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={fetchLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
