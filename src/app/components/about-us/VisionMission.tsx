import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="py-16 text-black bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 relative">
          <div className="p-6 border-2 border-black h-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Vision</h3>
            <p className="text-black leading-relaxed">
              To be the most trusted and innovative provider of services in our
              industry, making a difference in the lives of people we serve.
            </p>
          </div>

          {/* Image border in the center */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-2">
            <img
              src="/img/Vector.png"
              alt="Border"
              className="h-full object-contain"
            />
          </div>

          <div className="p-6 border-2 border-black mt-12 h-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Mission</h3>
            <p className="text-black leading-relaxed">
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
