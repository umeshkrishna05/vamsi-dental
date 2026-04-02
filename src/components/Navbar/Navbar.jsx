import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaPhone, FaMapMarkerAlt, FaStethoscope } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = (menuOpen || showModal) ? "hidden" : "auto";
  }, [menuOpen, showModal]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Vamsi Dental Hospital Logo" className="logo-graphic" />
          <span>Vamsi Dental</span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#services" onClick={handleLinkClick}>Services</a>
          <a href="#doctors" onClick={handleLinkClick}>Doctors</a>
          <a href="#information" onClick={handleLinkClick}>Dental Care</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>

          <button className="nav-btn" onClick={toggleModal}>
            Book Now
          </button>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Modal remains SAME (no change) */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}><FaTimes /></button>

            <div className="modal-header">
              <h3>Quick Appointment</h3>
              <p>Enter details for a priority checkup</p>
            </div>

            <form className="modal-form">
              <div className="input-field">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="input-field">
                <FaPhone className="input-icon" />
                <input type="tel" placeholder="Mobile Number" required />
              </div>

              <div className="input-field">
                <FaMapMarkerAlt className="input-icon" />
                <input type="text" placeholder="Your City / Town" required />
              </div>

              <div className="input-field textarea-field">
                <FaStethoscope className="input-icon" />
                <textarea placeholder="Describe your dental problem..." rows="3" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}