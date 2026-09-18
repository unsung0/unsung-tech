import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
          Let's Talk
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <div>
          <h3>UNSUNG<span>.</span></h3>
          <p>Technology that sets ideas free.</p>
        </div>

        <p>© 2026 Unsung Technologies. All rights reserved.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;