import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
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
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">A</span>

          <span className="brand-text">
            <strong>ALISHA</strong>
            <small>TRAVELS MANGALORE</small>
          </span>
        </a>

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

          <a
            className="nav-call"
            href="#booking"
            onClick={closeMenu}
          >
            <Phone size={16} />
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;