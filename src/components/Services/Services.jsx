import { useState } from "react";
import { FaTooth, FaSmile, FaSyringe, FaTeethOpen, FaMask, FaArrowRight, FaChevronUp } from "react-icons/fa";
import { FaScissors, FaTeeth } from "react-icons/fa6";
import "./Services.css";
const surgicalServices = [
  { 
    icon: <FaTeethOpen />, 
    title: "Dental Implants", 
    desc: "Permanent and natural-looking tooth replacements.",
    details: "Using titanium posts that act as tooth roots, we provide a foundation for replacement teeth that look, feel, and function like natural ones."
  },
  { 
    icon: <FaScissors />, 
    title: "Extractions", 
    desc: "Gentle tooth extractions with minimal discomfort.",
    details: "Whether it's a damaged tooth or making room for braces, our atraumatic extraction technique ensures rapid healing and zero pain." 
  },
  { 
    icon: <FaMask />, 
    title: "Flap Surgery", 
    desc: "Advanced surgical procedures for gum restoration.",
    details: "A procedure used to treat gum disease (periodontitis) by cleaning the roots of a tooth and repairing bone damage."
  },
  { 
    icon: <FaScissors />, 
    title: "Implant & 3rd Molar Surgery", 
    desc: "Specialized surgical extractions and implant placement.",
    details: "Expert removal of impacted wisdom teeth and precision placement of dental implants using 3D guided technology."
  },
  { 
    icon: <FaTeeth />, 
    title: "Jawline Fracture Repair", 
    desc: "Advanced surgical procedures for jawline restoration.",
    details: "Comprehensive trauma care for facial and jaw fractures to restore both functionality and aesthetic appearance."
  }
];

const nonSurgicalServices = [
  { 
    icon: <FaTooth />, 
    title: "Teeth Cleaning", 
    desc: "Professional dental cleaning for healthy and fresh smiles.",
    details: "Ultrasonic scaling and polishing to remove plaque, tartar, and stains, preventing gum disease and cavities."
  },
  { 
    icon: <FaSyringe />, 
    title: "Root Canal", 
    desc: "Pain-free root canal treatment using advanced technology.",
    details: "Saving your natural tooth by removing infected pulp. We use rotary endodontics for a faster, more comfortable experience."
  },
  { 
    icon: <FaSmile />, 
    title: "Braces & Aligners", 
    desc: "Straighten your teeth with modern orthodontic solutions.",
    details: "Choose from traditional metal braces, ceramic braces, or invisible aligners to achieve your perfect smile."
  },
  { 
    icon: <FaTeethOpen />, 
    title: "Dentures", 
    desc: "Custom-made dentures for a comfortable and natural fit.",
    details: "High-quality partial or full dentures designed to restore your ability to eat and speak clearly while looking natural."
  },
  { 
    icon: <FaTeeth />, 
    title: "Crowns & Bridges", 
    desc: "Custom-made crowns and bridges for natural-looking teeth.",
    details: "Durable ceramic or porcelain restorations to protect damaged teeth or replace missing ones permanently."
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("non-surgical");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const currentServices = activeTab === "surgical" ? surgicalServices : nonSurgicalServices;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="services-section reveal">
      <div className="services-header">
        <h2 className="services-title">Our <span>Services</span></h2>
        
        <div className="services-tabs">
          <button 
            className={`tab-btn ${activeTab === "non-surgical" ? "active" : ""}`}
            onClick={() => { setActiveTab("non-surgical"); setExpandedIndex(null); }}
          >
            General Care
          </button>
          <button 
            className={`tab-btn ${activeTab === "surgical" ? "active" : ""}`}
            onClick={() => { setActiveTab("surgical"); setExpandedIndex(null); }}
          >
            Surgical
          </button>
        </div>
      </div>

      <div className="services-grid">
        {currentServices.map((service, index) => (
          <div 
            className={`service-card ${expandedIndex === index ? "expanded" : ""}`} 
            key={index}
          >
            <div className="card-top">
              <div className="icon-wrapper">{service.icon}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>

            {/* Hidden Detailed Info */}
            <div className="service-details-content">
               <p>{service.details}</p>
            </div>

            <button 
              className="explore-gui-btn" 
              onClick={() => toggleExpand(index)}
            >
              <span>{expandedIndex === index ? "Close" : "Explore"}</span>
              {expandedIndex === index ? <FaChevronUp /> : <FaArrowRight />}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}