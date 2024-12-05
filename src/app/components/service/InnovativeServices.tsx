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

const InnovativeServices: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Innovative Financial Solutions
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="FinTech Partnerships"
          services={[
            "Digital checking and savings accounts",
            "No/low-fee banking options",
            "Peer-to-peer (P2P) transfers",
            "Round-up savings programs",
            "Personal budgeting and financial tools",
          ]}
        />
        <ServiceSection
          title="Blockchain-Based Payment Systems"
          services={[
            "Term loans for capital investments",
            "Lines of credit for operational expenses",
            "Mortgage-backed securities (MBS)",
            "Flexible personal and business loan structures",
          ]}
        />
        <ServiceSection
          title="Digital Asset Management"
          services={[
            "Online payment gateway services",
            "Cross-border payments (freelancer and SME-focused)",
            "International remittances",
            "ACH and wire transfer services",
          ]}
        />
      </div>
      <div className="flex justify-center items-center m-5 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full max-w-2xl">
            <ServiceSection
            title="Financial Technology Advisory"
            services={[
                "Mobile app banking experience",
                "Crypto wallet integration",
                "Open banking API solutions",
                "Real-time account updates and alerts",
            ]}
            />
        </div>
      </div>
    </section>
  );
};

export default InnovativeServices;
