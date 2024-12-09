import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border border-gray-300 p-6 rounded-lg bg-white">
          <p className="text-black text-lg mb-4">
            <strong>1. General Information</strong><br />
            The information provided on the website is "as is" and "as available." BankNeo does not guarantee the completeness, accuracy, or reliability of the information.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>2. No Financial Advice</strong><br />
            Content on the website does not constitute financial, investment, or legal advice. Users are encouraged to consult professionals for personalized advice.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>3. Limitations of Liability</strong><br />
            BankNeo is not responsible for damages resulting from interruptions, errors, or unauthorized access to the website. Users assume full responsibility for decisions made based on information provided on the site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
