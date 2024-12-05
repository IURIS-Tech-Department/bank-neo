import React from "react";

const AboutSupport: React.FC = () => {
  return (
    <header
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/img/support.jpg)' }}
    >
      <div className="absolute inset-0 bg-gray-200 opacity-40"></div>
      <h1 className="relative text-4xl md:text-5xl font-bold text-center">Support</h1>
    </header>
  );
};

export default AboutSupport;
