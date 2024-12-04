import React from "react";

const SupportContactInfo: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Support Contact Information
        </h2>
        <p className="text-gray-300 mb-4">
          If you need immediate assistance, feel free to contact us directly.
        </p>
        <div className="space-y-4">
          <div className="text-xl font-semibold">Email:</div>
          <a href="mailto:support@yourcompany.com" className="text-blue-500 hover:text-blue-300">
            support@yourcompany.com
          </a>
          <div className="text-xl font-semibold">Phone:</div>
          <p className="text-gray-300">+1 (800) 123-4567</p>
        </div>
      </div>
    </section>
  );
};

export default SupportContactInfo;
