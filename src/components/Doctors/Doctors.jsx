import { FaCalendarCheck, FaUserMd } from "react-icons/fa";
import "./Doctors.css";

const doctors = [
  
  {
    name: "Dr. Sarvesh",
    role: "Dental Surgeon",
    exp: "10+ Years Experience",
    img: "https://content.jdmagicbox.com/comp/tadepalligudem/y5/9999p8818.8818.170114101039.u6y5/catalogue/vamsi-multi-speciality-dental-hospital-tadepalligudem-g76m8k5tum.jpg"
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="doctors-section reveal">
      <div className="section-header">
        <h2 className="doctors-title">Expert <span>Specialists</span></h2>
        <p className="section-subtitle">Dedicated to your dental wellness</p>
      </div>

      <div className="doctors-list">
        {doctors.map((doc, index) => (
          <div className="doctor-profile-card" key={index}>
            <div className="doctor-image-wrapper">
              <img src={doc.img} alt={doc.name} loading="lazy" />
              <div className="verify-badge"><FaUserMd /></div>
            </div>

            <div className="doctor-details">
              <h3>{doc.name}</h3>
              <span className="specialty-tag">{doc.role}</span>
              <p className="experience-text">{doc.exp}</p>
              
              <button className="book-specialist-btn">
                <FaUserMd />
                <span>Know More</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}