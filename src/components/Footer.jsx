
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Camera,
  ExternalLink,
} from "lucide-react";

function Footer() {
  const links = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Our Fleet", "/fleet"],
    ["Tour Packages", "/tour-packages"],
    ["Book Now", "/contact"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <span className="brand-icon">A</span>
            <span className="brand-text">
              <strong>ALISHA</strong>
              <small>TRAVELS MANGALORE</small>
            </span>
          </Link>

          <p>
            Alisha Travels Mangalore – Your Trusted Travel Partner.
            Comfortable journeys, convenient bookings, and travel options
            for every occasion.
          </p>

          <a
            className="footer-whatsapp"
            href="https://wa.me/918151843165"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Booking <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          {links.map(([name, path]) => (
            <Link key={path} to={path}>
              {name}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <a href="tel:+918151843165">
            <Phone size={17} /> +91 81518 43165
          </a>

          <a
            href="https://wa.me/918151843165"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={17} /> WhatsApp Us
          </a>

          <p>
            <MapPin size={17} /> Mangalore, Karnataka, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Alisha Travels Mangalore.
            All rights reserved.
          </p>

          <p>EVERY JOURNEY, A BETTER EXPERIENCE.</p>

          <a
            className="zelvix-credit"
            href="https://zelvixmedia.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed & Developed by
            <strong>Zelvix Media</strong>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
