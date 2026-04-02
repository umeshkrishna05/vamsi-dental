import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaDirections } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.662584102!2d81.5248!3d16.822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ5JzE5LjIiTiA4McKwMzEnMjkuMyJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Visit Our Clinic</h2>
        <p className="contact-subtitle">Expert dental care is just a visit away. Located in the heart of Tadepalligudem.</p>
      </div>

      <div className="contact-container">
        {/* LEFT: INFO CARD */}
        <div className="contact-info-card">
          <div className="card-header">
            <h3>Vamsi Dental Hospital</h3>
            <span className="status-badge">Open Now</span>
          </div>

          <div className="info-list">
            <div className="info-item">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div className="text-box">
                <label>Location</label>
                <p>K N Road, opposite to the Bus Stand, MVR Complex, Tadepalligudem - 534101</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaPhoneAlt /></div>
              <div className="text-box">
                <label>Call Us</label>
                <a href="tel:+919440979595">+91 94409 79595</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="text-box">
                <label>Email</label>
                <a href="mailto:info@vamsidental.com">info@vamsidental.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><FaClock /></div>
              <div className="text-box">
                <label>Timings</label>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open("https://goo.gl/maps/YOUR_REAL_MAP_LINK", "_blank")}
            className="directions-btn"
          >
            <FaDirections /> Get Directions
          </button>
        </div>
        
      </div>
    </section>
  );
}