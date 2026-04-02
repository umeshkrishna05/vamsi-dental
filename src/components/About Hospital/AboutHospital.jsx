import "./AboutHospital.css";
import download from "../../assets/download.jpg";
import img from "../../assets/img.png";
import digital from "../../assets/digital.png";
import sterilization from "../../assets/sterilization.png";
import environment from "../../assets/environment.png";

export default function AboutHospital() {
  return (
    <section className="hospital-section">
      <div className="hospital-container">
        {/* LEFT CONTENT AREA */}
        <div className="hospital-left">
          <h2 className="section-title">World Class Dental Infrastructure</h2>
          <p className="section-description">
            We provide advanced dental care with modern equipment, sterilized
            environment, and patient-friendly treatment rooms.
          </p>

          <ul className="hospital-features">
            <li><span>✔</span> Digital X-Ray Technology</li>
            <li><span>✔</span> Advanced Sterilization Units</li>
            <li><span>✔</span> Modern Treatment Chairs</li>
            <li><span>✔</span> Serene and Bright Environment</li>
          </ul>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="hospital-right">
          <div className="img-grid">
            <div className="img-card"><img src={img} alt="Dental Clinic" /></div>
            <div className="img-card"><img src={download} alt="Dental Equipment" /></div>
            <div className="img-card"><img src="https://via.placeholder.com/250x150" alt="Dental Room" /></div>
            <div className="img-card"><img src="https://via.placeholder.com/250x150" alt="Dental Tech" /></div>
          </div>
        </div>
      </div>

      {/* --- NEW: PERMANENT FACILITIES SHOWCASE --- */}
      <div className="facilities-showcase">
        <h3 className="facilities-title">Our Premium Facilities</h3>
        
        <div className="facilities-grid">
          {/* 1. Digital X-Ray Section */}
          <div className="facility-card">
            <div className="facility-img-wrapper">
              <img src={digital} alt="Digital X-Ray" />
            </div>
            <div className="facility-info">
              <h4>Digital X-Ray Technology</h4>
              <p>State-of-the-art imaging for precise diagnosis with 90% less radiation.</p>
              <div className="tech-specs">
                <p><strong>OPG (Orthopantomogram):</strong> Provides a 360-degree panoramic view of the upper and lower jaws.</p>
                <p><strong>CBCT (Cone Beam Computed Tomography):</strong> Advanced 3D imaging for precise dental implants and complex surgeries.</p>
              </div>
            </div>
          </div>

          {/* 2. Sterilization Section */}
          <div className="facility-card">
            <div className="facility-img-wrapper">
              <img src={sterilization} alt="Sterilization" />
            </div>
            <div className="facility-info">
              <h4>Advanced Sterilization Units</h4>
              <p>Your safety is our priority. We follow international Class-B sterilization protocols to ensure a 100% bacteria-free environment for every procedure.</p>
            </div>
          </div>

          {/* 3. Serene Environment Section */}
          <div className="facility-card">
            <div className="facility-img-wrapper">
              <img src={environment} alt="Clinic Environment" />
            </div>
            <div className="facility-info">
              <h4>Serene Environment</h4>
              <p>A calm, bright, and hygienic atmosphere designed to reduce dental anxiety. Our patient-friendly rooms ensure you feel relaxed throughout your visit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}