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

const SpesializeServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Specialized Banking Services
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="Investment Banking Solutions"
          services={[
            "Mergers and acquisitions advisory",
            "Capital raising (debt and equity financing)",
            "Underwriting and syndication services",
            "Market research and IPO preparation",
          ]}
        />
        <ServiceSection
          title="Business & Commercial Banking"
          services={[
            "Business checking and savings accounts",
            "Commercial real estate financing",
            "Equipment leasing and financing solutions",
          ]}
        />
        <ServiceSection
          title="Merchant Finance & Cash Advance"
          services={[
            "Advances against future credit card or sales revenue",
            "Customizable repayment schedules",
            "IFee structures based on daily sales",
            "Quick approval process",
          ]}
        />
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-2 gap-8 mt-12">
        <ServiceSection
          title="Buy Now, Pay Later (BNPL) Solutions"
          services={[
            "Flexible repayment options for retail customers",
            "Integration with e-commerce platforms",
            "Low-interest installment plans",
          ]}
        />
        <ServiceSection
          title="Real Estate Financing Services"
          services={[
            "Structured debt investments",
            "Financing solutions for property developers",
            "Mortgage real estate-backed lending products",
            "Portfolio management of income-producing properties",
          ]}
        />
      </div>
    </section>
  );
};

export default SpesializeServices;
