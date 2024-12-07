import React from "react";
import { Typography } from "@mui/material";
import TechnologyPartners from "./technology-partners";

const SectionDedicated: React.FC = () => {
  return (
    <>
      <div
        className="relative flex flex-col justify-center mt-20 bg-cover bg-center min-h-screen p-20"
      >
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gray-300" 
          style={{
            backgroundImage: "url('img/section-dedicated.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        
        {/* Teks utama */}
        <div className="relative z-2">
          <Typography variant="h2" className="font-bold text-white">
            Your dedicated finance
          </Typography>
          <Typography variant="h2" className="font-bold mb-4 text-white">
            and acounting team.
          </Typography>
          <Typography variant="h2" className="font-medium mb-4 text-gray-300">
            Earning your trust everyday.
          </Typography>
          <Typography className="mt-4 text-gray-400 text-base">
            BankNeo Delivers Value  to our clients by offering comprehensive accounting and strategic finance <br />
            services. <span className="font-bold">Neo</span> management reports  deliver candid and actionable insights all focused on your <br />
            business growth and success.
          </Typography>
          {/* edit */}
        </div>
        
      </div>
      <TechnologyPartners />
      <div className="text-center mt-20">
        <h2 className="relative text-2xl w-full p-4 md:text-3xl font-bold text-center text-black">
          Our Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 block w-40 border-b-4 border-black"></span>
        </h2>
      </div>
    </>
  );
};

export default SectionDedicated;
