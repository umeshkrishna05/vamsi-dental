import "./Information.css";
import { FaTooth, FaBaby, FaShieldAlt } from "react-icons/fa";

export default function Information() {
  return (
    <section id="information" className="info-section">
      <div className="info-container">
        
        {/* Header */}
        <div className="info-header">
          <h2 className="section-title">Patient Education & Care</h2>
          <p className="section-description">
            Great smiles are built at home. Explore our comprehensive guide to maintaining 
            optimal oral health for you and your family.
          </p>
        </div>

        {/* Section 1: Why Dental Care is Important */}
        <div className="info-card highlight-card">
          <div className="card-icon"><FaShieldAlt /></div>
          <div className="card-text">
            <h3>Why is Dental Care Important?</h3>
            <p>
              Your mouth is the gateway to your body. Poor oral health is linked to 
              cardiovascular disease, diabetes complications, and digestive issues. 
              Routine brushing, flossing, and professional checkups not only save 
              your teeth but protect your overall systemic health.
            </p>
          </div>
        </div>

        {/* Section 2: Pediatric Care (1 to 15 Years) */}
        <h3 className="sub-title"><FaBaby className="inline-icon"/> Child Dental Care Journey</h3>
        <div className="pediatric-timeline">
          <div className="timeline-item">
            <div className="age-badge">Ages 1 - 3</div>
            <div className="timeline-content">
              <h4>The Foundation Years</h4>
              <p>Schedule the first dental visit by their first birthday. Use a smear of fluoride toothpaste (size of a grain of rice). Avoid putting the baby to bed with a bottle to prevent "bottle caries".</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="age-badge">Ages 4 - 7</div>
            <div className="timeline-content">
              <h4>Developing Habits</h4>
              <p>Transition to a pea-sized amount of toothpaste. Teach them to spit, not swallow. Begin flossing as soon as two teeth touch. Monitor brushing to ensure they are reaching all areas.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="age-badge">Ages 8 - 15</div>
            <div className="timeline-content">
              <h4>Prevention & Orthodontics</h4>
              <p>As permanent teeth come in, consider dental sealants to protect molars. Schedule an orthodontic evaluation around age 7. Emphasize mouthguards for sports to prevent dental trauma.</p>
            </div>
          </div>
        </div>

        {/* Section 3: General Precautions */}
        <div className="info-card basic-card">
          <div className="card-icon blue-icon"><FaTooth /></div>
          <div className="card-text">
            <h3>Daily Dental Precautions</h3>
            <div className="precautions-grid">
              <ul>
                <li>Brush twice a day for a full two minutes.</li>
                <li>Floss at least once daily before bedtime.</li>
                <li>Replace your toothbrush every 3-4 months.</li>
              </ul>
              <ul>
                <li>Drink plenty of water after meals to rinse acids.</li>
                <li>Don't use your teeth as tools (e.g., opening bottles).</li>
                <li>Visit the clinic every 6 months for professional cleaning.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}