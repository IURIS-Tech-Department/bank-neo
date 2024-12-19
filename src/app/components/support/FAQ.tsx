"use client"
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-20 rounded-lg shadow-lg">
        {/* Column 1: Title and Subtitle */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions</h2>
          <p className="text-gray-600 text-lg">
          Find answers to commonly asked questions about our cross-border payment solutions.
          </p>
        </div>

        <div>
          <div className="space-y-4">
            <div className="border-2 border-black p-5">
              <button
                onClick={() => toggleQuestion("question1")}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-600"
              >
                <span>How do I sign up?</span>
                {openQuestion === "question1" ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openQuestion === "question1" && (
                <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-300 opacity-100">
                  We offer a 30-day return policy.
                </div>
              )}
            </div>
            <div className="border-2 border-black p-5">
              <button
                onClick={() => toggleQuestion("question2")}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-600"
              >
                <span>What currencies do you support?</span>
                {openQuestion === "question2" ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openQuestion === "question2" && (
                <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-300 opacity-100">
                  Yes, we ship to most countries worldwide.
                </div>
              )}
            </div>
            <div className="border-2 border-black p-5">
              <button
                onClick={() => toggleQuestion("question3")}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-600"
              >
                <span>How secure is my money?</span>
                {openQuestion === "question3" ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openQuestion === "question3" && (
                <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-300 opacity-100">
                  You can email us at support@example.com.
                </div>
              )}
            </div>
            <div className="border-2 border-black p-5">
              <button
                onClick={() => toggleQuestion("question4")}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-600"
              >
                <span>Can I use Capital Guard cards internationally?</span>
                {openQuestion === "question3" ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openQuestion === "question4" && (
                <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-300 opacity-100">
                  You can email us at support@example.com.
                </div>
              )}
            </div>
            <div className="border-2 border-black p-5">
              <button
                onClick={() => toggleQuestion("question5")}
                className="w-full flex justify-between items-center text-left text-sm font-medium text-gray-600"
              >
                <span>How can I contact customer support?</span>
                {openQuestion === "question5" ? (
                  <FaChevronUp className="text-gray-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {openQuestion === "question5" && (
                <div className="mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 transition-opacity duration-300 opacity-100">
                  You can email us at support@example.com.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
