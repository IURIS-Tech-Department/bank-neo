"use client";
import React, { useState } from "react";
import CoreBankingServices from "../service/CoreBankingServices";
import SpesializeServices from "../service/SpesializeServices";
import PrivateServices from "../service/PrivateServices";
import PremiumService from "../service/PremiumService";
import InnovativeServices from "../service/InnovativeServices";
import SupplementaryServices from "../service/SupplementaryServices";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: "Core Banking Service", component: <CoreBankingServices /> },
    { label: "Specialized Banking Services", component: <SpesializeServices /> },
    { label: "Private Client Services", component: <PrivateServices /> },
    { label: "Premium Services For Enterprises", component: <PremiumService /> },
    { label: "Innovative Financial Solutions", component: <InnovativeServices /> },
    { label: "Supplementary Services", component: <SupplementaryServices /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-10">
      <div className="flex border-b border-gray-300 mb-4 max-w-5xl w-full overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mb-5 text-sm font-medium whitespace-nowrap ${
              activeTab === index
                ? "border-b-2 border-black text-black mb"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center w-full bg-white p-6 rounded-lg shadow-md">
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

export default Tabs;
