import React from "react";

interface ServiceSectionProps {
  title: string;
  services: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, services }) => {
  return (
    <div className="p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slide-in">
      <h3 className="text-lg font-semibold text-center mb-4 text-white">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-200">
        {services.map((service, index) => (
          <li key={index} className="text-center">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CoreBankingServices: React.FC = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
          Core Banking Services
        </h3>
        <div className="w-full h-1 bg-white mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="Everyday Banking"
          services={[
            "Digital checking and savings accounts",
            "No/low-fee banking options",
            "Peer-to-peer (P2P) transfers",
            "Round-up savings programs",
            "Personal budgeting and financial tools",
          ]}
        />
        <ServiceSection
          title="Deposit & Lending Solutions"
          services={[
            "Term loans for capital investments",
            "Lines of credit for operational expenses",
            "Mortgage-backed securities (MBS)",
            "Flexible personal and business loan structures",
          ]}
        />
        <ServiceSection
          title="Payment & Transfers"
          services={[
            "Online payment gateway services",
            "Cross-border payments (freelancer and SME-focused)",
            "International remittances",
            "ACH and wire transfer services",
          ]}
        />
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-2 gap-8 mt-12">
        <ServiceSection
          title="Digital Banking"
          services={[
            "Mobile app banking experience",
            "Crypto wallet integration",
            "Open banking API solutions",
            "Real-time account updates and alerts",
          ]}
        />
        <ServiceSection
          title="Mobile Wallets & Apps"
          services={[
            "Digital wallets for users and businesses",
            "QR code payments",
            "Subscription and recurring payment management",
            "Integration with popular e-commerce platforms",
          ]}
        />
      </div>
    </section>
  );
};

export default CoreBankingServices;
