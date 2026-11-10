import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "Services", path: "#services" },
    { name: "Our Fleet", path: "#fleet" },
    { name: "Tour Packages", path: "#tours" },
    { name: "Contact", path: "#contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">A</span>
          <span className="brand-text">
            <strong>ALISHA</strong>
            <small>TRAVELS MANGALORE</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/blog/mangalore-to-bekal-taxi-service"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <a
            className="nav-call"
            href="tel:+918151843165"
            onClick={closeMenu}
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;