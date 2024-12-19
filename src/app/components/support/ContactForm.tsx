import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <img
            src="/img/support.jpg"
            alt="Contact Us"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
        <div className="border-2 border-black rounded-lg">
          <form className="space-y-4 p-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
