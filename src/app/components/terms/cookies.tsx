import React from "react";

const TermsConditionsPrivacy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border border-gray-300 p-6 rounded-lg bg-white">
          <p className="text-black text-lg mb-4">
            <strong>1. Introduction</strong><br />
            BankNeo uses cookies to: <br />
              - Optimize user experiences. <br />
              - Provide secure sessions. <br />
              - Analyze and improve website functionality.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>2.Types of Cookies</strong><br />
            Strictly Necessary Cookies: Essential for navigation and core functionalities.
            Performance Cookies: Help analyze website usage and improve efficiency.
            Targeting Cookies: Used for delivering tailored content and advertisements.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>3. User Control </strong><br />
            Users can adjust cookie settings through their browser or disable cookies altogether. Note that this may impact website functionality.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>4. Third-Party Cookies</strong><br />
            BankNeo may use cookies from third-party analytics and advertising services. These cookies are governed by their respective privacy policies.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>5. Changes to Policy</strong><br />
            BankNeo reserves the right to amend this Cookies Policy and will notify users of significant changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPrivacy;
