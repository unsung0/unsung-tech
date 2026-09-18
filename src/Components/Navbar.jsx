import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        UNSUNG<span>.</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/contact" className="nav-button">
        Let's talk
      </Link>
    </nav>
  );
}

export default Navbar;
