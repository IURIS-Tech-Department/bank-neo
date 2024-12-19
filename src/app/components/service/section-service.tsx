import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  videoSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, videoSrc }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center relative">
      {/* Video background */}
      <div className="w-full relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        {/* Content overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute bottom-20 left-0 w-full flex flex-col items-start z-10 text-left text-white px-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-200 text-sm mt-2">{description}</p>
          <button className="mt-4 bg-white text-black px-5 py-3 rounded-full hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-in-out">
            {buttonText}
          </button>
        </div>
      </div>
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
          videoSrc="/video/Neo bank - video 2.mp4"
        />
        <Card
          title="Earn unlimited 1.5% cashback on all spend"
          description="Unlock credit cards earlier with industry-low deposit minimums."
          buttonText="Credit Cards"
          videoSrc="/video/Neo bank - video 3.mp4"
        />
        <Card
          title="Extend your runway"
          description="Accelerate your growth with Treasury and financing options integrated directly."
          buttonText="Treasury"
          videoSrc="/video/Neo bank Video 4.mp4"
        />
      </div>
    </section>
  );
};

export default SectionService;
