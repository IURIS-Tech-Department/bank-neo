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

const PrivateServices: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Private Client Services
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="Wealth Management Solutions"
          services={[
            "Personalized financial planning",
            "Tax-efficient investment strategies",
            "High-net-worth individual (HNWI) portfolio management",
            "Risk profiling and asset rebalancing",
          ]}
        />
        <ServiceSection
          title="Personalized Asset Management"
          services={[
            "Portfolio diversification and optimization",
            "ETF, mutual fund, and alternative investment options",
            "Exclusive investment opportunities",
          ]}
        />
        <ServiceSection
          title="Family Office Services"
          services={[
            "Retirement and estate planning services",
            "Private equity and venture capital advisory",
            "Philanthropic investment strategies",
          ]}
        />
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-2 gap-8 mt-12">
        <ServiceSection
          title="Private Banking & Advisory"
          services={[
            "Tailored credit and lending products",
            "Specialized advisory for personal financial goals",
            "Multi-currency account management",
          ]}
        />
        <ServiceSection
          title="Global Investment Portfolios"
          services={[
            "International market investment strategies",
            "Cross-border wealth preservation",
            "Hedging and risk management",
            "Premium Services for Enterprises",
          ]}
        />
      </div>
    </section>
  );
};

export default PrivateServices;
