import React from "react";
import TermsConditions from "../components/terms/terms-conditions";

const TermsConditionsPage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-100 text-center text-black p-6">
        <h1 className="text-4xl font-bold">
          <span className="border-b-2 border-black pb-1">Terms and Conditions</span>
        </h1>         
      </header>
      <TermsConditions />
    </div>
  );
};

export default TermsConditionsPage;
