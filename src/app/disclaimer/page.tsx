import React from "react";
import Disclaimer from "../components/terms/disclaimer";

const DisclaimerPage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-100 text-center text-black p-6">
        <h1 className="text-4xl font-bold">
          <span className="border-b-2 border-black pb-1">Disclaimer</span>
        </h1>  
      </header>
      <Disclaimer />
    </div>
  );
};

export default DisclaimerPage;
