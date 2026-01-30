import React from 'react';

const services = [
  {
    title: "Sourcing & Procurement",
    text: "We identify, evaluate, and procure goods from reliable local and international suppliers with transparency and efficiency."
  },
  {
    title: "Import / Export",
    text: "End-to-end coordination of cross-border trade, documentation, compliance, and logistics."
  },
  {
    title: "Distribution",
    text: "Structured distribution of goods across regions through vetted logistics and partner networks."
  },
  {
    title: "Consulting",
    text: "Procurement strategy, supplier evaluation, cost optimization, and market intelligence advisory."
  },
  {
    title: "Supplier Vetting",
    text: "Verification, due diligence, and performance assessment of suppliers and manufacturers."
  }
];

const Services: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Our Services</h2>

      <div className="row g-4">
        {services.map((s, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text">{s.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
