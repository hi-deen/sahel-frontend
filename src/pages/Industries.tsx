import React from 'react';

const industries = [
  "Agriculture",
  "Manufacturing",
  "Healthcare",
  "Government / NGOs",
  "Consumer Goods",
  "Infrastructure"
];

const Industries: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Industries We Serve</h2>

      <div className="row g-4">
        {industries.map((industry, idx) => (
          <div className="col-6 col-md-4" key={idx}>
            <div className="border rounded p-4 text-center h-100">
              <strong>{industry}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
