import { Link } from "react-router-dom";
import logo from '../assets/icon-sahel.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        
        {/* Brand */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
          to="/"
        >
          <img
            src={logo}
            alt="Sahel Hive logo"
            width="60"
            height="60"
            className="rounded"
          />
          <span>SAHEL HIVE</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto gap-lg-3 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/industries">
                Industries
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">
                How It Works
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Corporate Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
