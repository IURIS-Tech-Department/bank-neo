import Link from "next/link";
import React from "react";

const OrganizationStructure = () => {
  const sections = [
    {
      title: "Board of Directors (Partners)",
      roles: [
        {
          name: "Partners",
          description:
            "Guide strategic decision-making and ensure the company meets its objectives. Provide oversight, contribute expertise, and monitor the organization's long-term sustainability.",
        },
      ],
    },
    {
      title: "Executive Management",
      roles: [
        {
          name: "CEO (Chief Executive Officer)",
          description:
            "Provides strategic leadership, sets the company’s vision, and ensures overall business performance. Oversees all departments and builds partnerships to achieve organizational goals.",
        },
        {
          name: "CFO (Chief Financial Officer)",
          description:
            "Manages the company's finances, including planning, risk management, record-keeping, and financial reporting. Develops strategies for financial growth and ensures compliance with regulations.",
        },
        {
          name: "CLO (Chief Legal Officer)",
          description:
            "Leads the company’s legal strategies, ensures compliance with laws, and mitigates legal risks. Advises on contracts, governance, and other legal matters.",
        },
        {
          name: "CMO (Chief Marketing Officer)",
          description:
            "Oversees marketing strategies and campaigns to drive brand awareness, customer acquisition, and revenue growth. Manages the marketing team and analyzes market trends.",
        },
      ],
    },
    {
      title: "Inhouse Legal Team",
      roles: [
        {
          name: "General Counsel",
          description:
            "As the General Counsel, you will be leading the legal department and advising on critical legal matters.",
        },
        {
          name: "Associate Attorney",
          description:
            "We are looking for a talented Associate Attorney to join our legal team. The role requires excellent legal research and communication skills.",
        },
        {
          name: "Paralegal",
          description:
            "The Paralegal will assist with legal research, documentation preparation, and case management support for the legal team.",
        },
      ],
    },
    {
      title: "Department Managers",
      roles: [
        {
          name: "Credit Manager",
          description:
            "Oversees credit evaluation processes, ensures sound credit policies, and minimizes risk in lending operations.",
        },
        {
          name: "Loans Manager",
          description:
            "Manages loan processes, supervises loan officers, and ensures regulatory compliance in lending practices.",
        },
        {
          name: "Treasury/Accounting Manager",
          description:
            "Oversees cash flow, budgeting, and financial reporting. Manages investments and ensures fiscal accountability.",
        },
        {
          name: "HR Manager",
          description:
            "Manages recruitment, employee relations, benefits, and training programs to ensure workforce effectiveness and compliance.",
        },
        {
          name: "Compliance Officer",
          description:
            "Ensures the organization adheres to laws, regulations, and internal policies. Conducts audits, identifies risks, and provides compliance training.",
        },
      ],
      
    },
    {
      title: "Banking Department",
      roles: [
        {
          name: "Banking Relationship Manager",
          description:
            "Builds and manages client relationships by providing personalized financial solutions, including loans, savings, and investment products. Assesses client needs, evaluates loan applications, and ensures a seamless banking experience while maintaining compliance with regulations.",
        },
      ],
    },
    {
      title: "Administration",
      roles: [
        {
          name: "Administrative Assistant",
          description:
            "Supports office operations by managing schedules, correspondence, and clerical tasks. Ensures efficient daily operations.",
        },
        {
          name: "Office Manager",
          description:
            "Oversees administrative functions, manages office resources, and coordinates internal processes to maintain organizational efficiency.",
        },
      ],
    },
    {
      title: "Customer Relations",
      roles: [
        {
          name: "Customer Relations Teller",
          description:
            "Serves as the primary point of contact for clients, handling inquiries, transactions, and account-related services. Ensures excellent customer service and builds client trust.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl font-bold text-center border-2 border-black rounded-full inline-block px-6 py-3">
            Organization Structure
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-black p-4 rounded-lg bg-white"
            >
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.roles.map((role, idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold">{role.name}</h3>
                    <p className="text-sm">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Tombol Join Us */}
        <div className="text-center mt-10">
          <p className="text-lg mb-4">Interested in joining our team?</p>
          <Link href="/support">
            <button className="border-2 border-black text-black py-2 px-6 rounded-lg text-lg hover:bg-black hover:text-white">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationStructure;
