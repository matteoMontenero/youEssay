import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container d-flex align-items-center justify-content-center">

          <div className="d-flex align-items-start me-auto">
            <NavLink to="/videos" className="navbar-brand fs-1">
              You<span style={{ color: "red" }}>Essay</span>
            </NavLink>
          </div>

          <div className="d-flex align-items-center me-0 ms-auto">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/videos" className="nav-link fs-4 mx-3">Essays</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link fs-4 mx-3">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/lucky" className="btn btn-danger fs-4">I feel Lucky!</NavLink>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
