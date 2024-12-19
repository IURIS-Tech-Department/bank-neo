import React from "react";
import ContactForm from "../components/support/ContactForm";
import FAQSection from "../components/support/FAQ";


const SupportPage: React.FC = () => {
  return (
    <div className="bg-gray-200 text-black">
      <ContactForm />
      <FAQSection />
      
    </div>
  );
};

export default SupportPage;
