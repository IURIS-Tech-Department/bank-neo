import React from "react";
import Cookies from "../components/terms/cookies";

const TermsPage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-100 text-center text-black p-6">
        <h1 className="text-4xl font-bold">
          <span className="border-b-2 border-black pb-1">Cookies Policy</span>
        </h1>      
      </header>
      <Cookies />
    </div>
  );
};

export default TermsPage;
