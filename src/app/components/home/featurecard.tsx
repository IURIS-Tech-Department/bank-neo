import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition bg-white">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const FeatureCardGrid: React.FC = () => {
  const features = [
    {
      title: 'Competitive Exchange Rates',
      description: 'Get the best exchange rates for your international transactions, saving you money.',
      icon: '📦',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Our intuitive app makes it easy for anyone to manage their cross-border payments and accounts.',
      icon: '📱',
    },
    {
      title: 'High Security Standards',
      description: 'Rest assured knowing that your transactions and personal information are protected with advanced security measures.',
      icon: '🔒',
    },
    {
      title: '24/7 Customer Support',
      description: 'Our dedicated support team is available around the clock to assist you with any inquiries or issues.',
      icon: '🕒',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          <FeatureCard
            title={features[0].title}
            description={features[0].description}
            icon={features[0].icon}
          />
          <FeatureCard
            title={features[2].title}
            description={features[2].description}
            icon={features[2].icon}
          />
        </div>

        <div className="relative space-y-6 md:pl-6 py-20">
          {/* Border Vertikal */}
          <div className="hidden md:block absolute top-1/4 left-0 h-1/2 w-px bg-black"></div>
          <FeatureCard
            title={features[1].title}
            description={features[1].description}
            icon={features[1].icon}
          />
          <FeatureCard
            title={features[3].title}
            description={features[3].description}
            icon={features[3].icon}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCardGrid;
