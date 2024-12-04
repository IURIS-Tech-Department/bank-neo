import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <header className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white" 
    style={{ backgroundImage: 'url(/img/about-us.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <h1 className="relative text-4xl md:text-5xl font-bold text-center">
        About Us
      </h1>
    </header>
  );
};

export default AboutHeader;
