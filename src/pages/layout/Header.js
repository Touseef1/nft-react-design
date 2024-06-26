import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-lg-5 pt-3">
      <div className="container-fluid logo">
        <Link to="/landingPage">
          <img src="assets/minnies/RuyuiLogo.png" alt="Ruyui Logo" />
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ms-2">
              <Link className="nav-link" aria-current="page" to="/thelore">THE LORE</Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/minnies">MINNIES</Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/team">TEAM</Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/studio">THE STUDIO</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center ms-3">
            <Link to="/farm" className="navbar_button">FARM $ROW</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
