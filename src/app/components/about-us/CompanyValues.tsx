// components/CompanyValues.tsx
import React from "react";

const values = [
  { title: "Integrity", description: "We value honesty and transparency." },
  { title: "Innovation", description: "We embrace creativity and new ideas." },
  { title: "Excellence", description: "We strive for the highest standards." },
];

const CompanyValues: React.FC = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-gray-300 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-white">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
