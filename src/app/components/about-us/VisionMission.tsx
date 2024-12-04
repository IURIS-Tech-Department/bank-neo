import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Vision & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the most trusted and innovative provider of services in our
              industry, making a difference in the lives of people we serve.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              We aim to deliver high-quality solutions that empower our clients
              to achieve their goals while maintaining sustainability and
              integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
