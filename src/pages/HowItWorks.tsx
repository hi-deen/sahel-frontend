import React from 'react';

const steps = [
  {
    title: "Discover",
    text: "We understand your requirements, timelines, and compliance needs."
  },
  {
    title: "Source",
    text: "We identify and verify suppliers that meet quality and cost benchmarks."
  },
  {
    title: "Procure",
    text: "Contracts, documentation, and transactions are handled transparently."
  },
  {
    title: "Deliver",
    text: "Logistics coordination and delivery tracking until final handover."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-5">How It Works</h2>

      <div className="row text-center g-4">
        {steps.map((step, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="p-4 border rounded h-100">
              <div className="mb-3">
                <span className="badge bg-primary rounded-circle p-3">
                  {idx + 1}
                </span>
              </div>
              <h5>{step.title}</h5>
              <p className="text-muted">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
