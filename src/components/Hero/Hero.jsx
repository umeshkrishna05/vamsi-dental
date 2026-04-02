import { useState, useEffect } from "react";
import { FaUser, FaPhone, FaMapMarkerAlt, FaStethoscope, FaTimes } from "react-icons/fa";
import vamsi from "../../assets/vamsi.jpg";
import "./Hero.css";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    problem: ""
  });

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // --- STEP 1: SAVE TO MONGODB ---
      // Ensure your backend is running on port 5000
      const response = await fetch("http://localhost:5000/api/patient/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data saved to MongoDB successfully!");

        // Cleanup
        setShowModal(false);
        setFormData({ name: "", phone: "", city: "", problem: "" });
      } else {
        const errorText = await response.text();
          alert("REAL ERROR FROM SERVER: " + errorText);
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Database Error: Is your backend server running?");
    }
  };

  return (
    <section id="home" className="hero-modern">
      <div className="hero-bg-wrapper">
      <img
        src={vamsi}
        alt="Vamsi Dental Hospital Exterior"
        className="moving-bg-image"
      />
    </div>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-badge">✨ Trusted Dental Care Since 2010</div>
        <h1>
          Oral <span>Health..</span>
          <br className="mobile-break" />.Overall Health
        </h1>
        <p>
          Advanced dental treatments with gentle care and modern technology.
          We make your smile brighter and healthier.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={toggleModal}>Book Appointment</button>
          <a href="#services" className="secondary-btn" style={{textDecoration: 'none'}}>Explore Services</a>
        </div>
        <div className="hero-stats">
          <div><h3>20K+</h3><p>Happy Patients</p></div>
          <div><h3>15+</h3><p>Years Experience</p></div>
          <div><h3>4.9★</h3><p>Patient Rating</p></div>
        </div>
      </div>

      {/* --- Appointment Modal --- */}
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}><FaTimes /></button>
            <div className="modal-header">
              <h3>Quick Appointment</h3>
              <p>Your details will be saved and sent to the clinic</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="input-field">
                <FaUser className="input-icon" />
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="input-field">
                <FaPhone className="input-icon" />
                <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="input-field">
                <FaMapMarkerAlt className="input-icon" />
                <input type="text" name="city" placeholder="Your City" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="input-field textarea-field">
                <FaStethoscope className="input-icon" />
                <textarea name="problem" placeholder="Describe your dental problem..." value={formData.problem} onChange={handleChange} required rows="3"></textarea>
              </div>
              <button type="submit" className="submit-btn">Confirm & Book</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}