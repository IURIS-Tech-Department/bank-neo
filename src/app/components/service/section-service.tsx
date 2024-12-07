import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string; // URL gambar
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex pb-6 flex-col items-center">
      {/* Responsive Image Container with Background Image */}
      <div
        className="w-full aspect-[4/3] mb-4 bg-gray-300 flex items-center justify-center rounded-xl p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <h3 className="text-lg font-semibold text-center text-black">{title}</h3>
      <p className="text-gray-600 text-center text-sm mt-2">{description}</p>
      <button className="mt-4 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-in-out">
        {buttonText}
      </button>
    </div>
  );
};

const SectionService: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
        Manage your banking and financial <br /> operations from a single dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title="Power your financial operations"
          description="Your bank account should do more than hold your money. Now, it can."
          buttonText="Financial Workflows"
          imageSrc="/img/power-finance.jpg"
        />
        <Card
          title="Earn unlimited 1.5% cashback on all spend"
          description="Unlock credit cards earlier with industry-low deposit minimums."
          buttonText="Credit Cards"
          imageSrc="/img/cashback-finance.jpg"
        />
        <Card
          title="Extend your runway"
          description="Accelerate your growth with Treasury and financing options integrated directly."
          buttonText="Treasury"
          imageSrc="/img/integration.jpg"
        />
      </div>
    </section>
  );
};

export default SectionService;
