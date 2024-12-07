import React from "react";

const AboutBankNeo: React.FC = () => {
  return (
    <section
      className="relative py-16 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/about.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">BankNeo</h1>
        <h2 className="text-lg font-medium mb-8 text-white text-center">
          The Premiere Digital-Only Bank
        </h2>
        <p className="text-white leading-relaxed mb-6">
          BankNeo is a groundbreaking digitally-only bank designed to cater to
          startups, entrepreneurs, and modern professionals. With a focus on
          leveraging innovative banking structures, artificial intelligence,
          and a SaaS-driven business model, BankNeo will provide streamlined
          financial services while adhering to stringent compliance standards.
          The bank&apos;s operations will initially be based in Vietnam, offering
          neobank services and eventually expanding globally through
          partnerships, innovative fintech solutions, and robust online
          presence.
        </p>
        <p className="text-white leading-relaxed">
          BankNeo aims to lead the digital banking revolution with a focus on
          innovation, completeness, and exceptional service delivery. By
          leveraging partnerships, cutting-edge technology, and a strategic
          operational model, we will position ourselves as a trusted financial
          partner for startups, entrepreneurs, and modern businesses globally.
        </p>
      </div>
    </section>
  );
};

export default AboutBankNeo;
