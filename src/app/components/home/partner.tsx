import React from "react";

const partners = [
  "/img/partner1.png",
  "/img/partner2.png",
  "/img/partner3.png",
  "/img/partner4.png",
  "/img/partner5.png",
  "/img/partner6.png",
];

const OurPartner: React.FC = () => {
  return (
    <section className="py-16 bg-gray-700">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Technology and service partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={partner} alt={`Partner ${index + 1}`} className="h-12 md:h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
