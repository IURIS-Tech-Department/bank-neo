import React from "react";
import AboutHeader from "../components/about-us/AboutHeader";
import VisionMission from "../components/about-us/VisionMission";
import CompanyValues from "../components/about-us/CompanyValues";


const AboutUs: React.FC = () => {
  return (
    <div className="bg-black">
      <AboutHeader />
      <VisionMission />
      <CompanyValues />
    </div>
  );
};

export default AboutUs;
