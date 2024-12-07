import React from "react";

interface ServiceSectionProps {
  title: string;
  services: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, services }) => {
  return (
    <div className="p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
      <h3 className="text-lg font-semibold text-black text-center mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-black">
        {services.map((service, index) => (
          <li key={index} className="text-center">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SupplementaryServices: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
            Supplementary Services
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="E-Money Services"
          services={[
            "E-Money Services",
            "Network-wide instant transfers",
            "Secure online checkout systems",
   
          ]}
        />
        <ServiceSection
          title="Merchant Services"
          services={[
            "Point-of-sale (POS) systems and software",
            "Credit card and debit card payment processing",
            "Contactless payment options",
            "Sales analytics and reporting tools",
          ]}
        />
        <ServiceSection
          title="Digital Asset Management"
          services={[
            "Multi-currency accounts for global transactions",
            "Freelance platform payment integration",
            "ISeamless currency conversion",
          ]}
        />
      </div>
    </section>
  );
};

export default SupplementaryServices;
