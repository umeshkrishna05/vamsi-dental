import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Doctors from "./components/Doctors/Doctors";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import AboutHospital from "./components/About Hospital/AboutHospital";
import Chatbot from "./components/Chatbot/Chatbot";
import Information from "./components/Information/Information";
import "./index.css";
import { Helmet } from "react-helmet";



function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}> 
      <div className="main-wrapper"></div>
      <Helmet>
        <title>Vamsi Dental Hospital | Best Dental Care & Implants</title>
        <meta name="description" content="Vamsi Dental Hospital offers world-class dental infrastructure, OPG, CBCT imaging, and painless treatments. Book your appointment today!" />
        <meta name="keywords" content="Dental Clinic, Dentist, Dental Implants, OPG X-ray, CBCT, Vamsi Dental, Teeth Whitening" />
        <meta property="og:title" content="Vamsi Dental Hospital - Your Smile, Our Priority" />
        <meta property="og:description" content="Advanced dental treatments with modern technology and gentle care." />
        <meta property="og:image" content="/logo.jpeg" /> 
        <link rel="canonical" href="https://www.vamsidental.com" />
      </Helmet>
      <ScrollReveal />
      <Navbar />
      <Hero /><AboutHospital />
      <Services />
      <Doctors />
      <Information />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App;