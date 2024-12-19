import React from "react";

const StepsComponent: React.FC = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Technology and Service Partners</h2>
        <p className="text-sm text-gray-600">
          Our partners are leading solutions that automate and extend our accounting operations. Our clients benefit from our
          preferred partner discounts and from the speed and efficiency of trusted point solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-5">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">02</h3>
            <h4 className="text-lg font-medium mb-2 text-gray-800">Create an account</h4>
            <p className="text-sm text-gray-600 mb-6">Playstore & App store</p>
            <div className="w-full h-[500px] mx-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src="/placeholder-image.png"
                alt="Download app"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">01</h3>
            <h4 className="text-lg font-medium mb-2 text-gray-800">Download app</h4>
            <p className="text-sm text-gray-600 mb-6">Playstore & App store</p>
            <div className="w-full h-[500px] mx-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src="/placeholder-image.png"
                alt="Create an account"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">03</h3>
            <h4 className="text-lg font-medium mb-2 text-gray-800">Start controlling your finance</h4>
            <p className="text-sm text-gray-600 mb-6">Playstore & App store</p>
            <div className="w-full h-[500px] mx-auto bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src="/placeholder-image.png"
                alt="Start controlling your finance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
