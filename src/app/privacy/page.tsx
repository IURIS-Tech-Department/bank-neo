import React from "react";
import Privacy from "../components/terms/privacy";

const PrivacyPage: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-100 text-center text-black p-6">
        <h1 className="text-4xl font-bold">
          <span className="border-b-2 border-black pb-1">Privacy Policy</span>
        </h1>         
      </header>
      <Privacy />
    </div>
  );
};

export default PrivacyPage;
