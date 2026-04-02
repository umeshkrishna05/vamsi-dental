import { FaTooth, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-col">
          <div className="footer-logo">
            <FaTooth />
            <span>Vamsi Dental</span>
          </div>
          <p>
            Providing advanced dental care with modern technology and gentle treatment for a confident smile.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <div className="footer-info">
            <FaMapMarkerAlt />
            <span>K N Road, opposite to the Bus Stand, MVR Complex, Tadepalligudem - 534101</span>
          </div>
          <div className="footer-info">
            <FaPhoneAlt />
            <span>+91 94409 79595 </span>
          </div>
          <div className="footer-info">
            <FaEnvelope />
            <span>info@vamsidental.com</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
             <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.twitter.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Vamsi Dental Hospital | All Rights Reserved
      </div>
    </footer>
  );
}


