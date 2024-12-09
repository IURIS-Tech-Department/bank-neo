import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="border border-gray-300 p-6 rounded-lg bg-white">
          <p className="text-black text-lg mb-4">
            <strong>1. Data Collection</strong><br />
            BankNeo collects personal information, including but not limited to:<br />
            - Identifiable details (name, date of birth, address)<br />
            - Financial information (account numbers, transaction history)<br />
            - Behavioral data (usage patterns, preferences)
          </p>
          <p className="text-black text-lg mb-4">
            <strong>2. Purpose of Data Use</strong><br />
            Your data may be used for:<br />
            - Verifying identity and maintaining account security.<br />
            - Enhancing service offerings through analytics.<br />
            - Communicating updates, promotional offers, or required notices.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>3. Data Sharing and Disclosure</strong><br />
            Data may be shared with trusted third parties, including payment processors, IT service providers, and regulatory bodies. BankNeo does not sell personal data to third parties for marketing purposes.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>4. Data Security</strong><br />
            State-of-the-art encryption protocols and intrusion detection systems protect your data. Users are encouraged to use strong passwords and secure their accounts.
          </p>
          <p className="text-black text-lg mb-4">
            <strong>5. User Rights</strong><br />
            You have the right to:<br />
            - Access a copy of your data.<br />
            - Request corrections for inaccurate data.<br />
            - Request deletion of your data, subject to legal and operational limitations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
