// components/OurTeam.tsx
import React from "react";

const teamMembers = [
  { name: "Jane Doe", role: "CEO", image: "/images/jane.jpg" },
  { name: "John Smith", role: "CTO", image: "/images/john.jpg" },
  { name: "Emily Davis", role: "CMO", image: "/images/emily.jpg" },
];

const OurTeam: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
