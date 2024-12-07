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

const PremiumService: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Premium Services For Entreprises
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="Corporate Treasury Management"
          services={[
            "Cash flow management and liquidity planning",
            "Treasury and cash management solutions",
            "Integration with ERP systems",
          
          ]}
        />
        <ServiceSection
          title="Mergers & Acquisitions Advisory"
          services={[
            "Financial preparation for mergers and acquisitions",
            "Deal negotiation and structuring",
            "Post-transaction integration strategies",
          ]}
        />
        <ServiceSection
          title="Capital Market Solutions"
          services={[
            "IPO preparation and readiness",
            "Debt and equity financing for enterprises",
            "Corporate restructuring services",
          ]}
        />
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-2 gap-8 mt-12">
        <ServiceSection
          title="Custom Financing Structures"
          services={[
            "Project-based funding solutions",
            "Non-traditional credit assessment models",
            "Flexible repayment terms tailored to business needs",
          ]}
        />
        <ServiceSection
          title="Risk Management & Hedging"
          services={[
            "Advanced benchmarking tools",
            "Financial risk assessment and scenario modeling",
            "Strategies to mitigate exposure in volatile markets",
          ]}
        />
      </div>
    </section>
  );
};

export default PremiumService;
