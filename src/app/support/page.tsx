import React from "react";
import FAQ from "../components/support/FAQ";
import ContactForm from "../components/support/ContactForm";
import SupportContactInfo from "../components/support/SupportContactInfo";


const SupportPage: React.FC = () => {
  return (
    <div className="bg-gray-200 text-black">
      <FAQ />
      <ContactForm />
      <SupportContactInfo />
    </div>
  );
};

export default SupportPage;
