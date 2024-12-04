import React from "react";

const FAQ: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">How do I reset my password?</h3>
            <p className="text-gray-300">
              To reset your password, go to the login page and click on Forgot Password. You will be guided through the process to reset your password via email.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
            <p className="text-gray-300">
              We accept all major credit cards, PayPal, and bank transfers for payments. Please contact us if you have any specific payment questions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">How can I contact customer support?</h3>
            <p className="text-gray-300">
              You can contact customer support through the contact form below, or reach us at support@yourcompany.com for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
