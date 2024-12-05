import React from "react";
import AboutHeader from "../components/about-us/AboutHeader";
import VisionMission from "../components/about-us/VisionMission";
import AboutBankNeo from "../components/about-us/AboutBank";


const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <AboutHeader />
      <AboutBankNeo />
      <VisionMission />
    </div>
  );
};

export default AboutUs;
