const steps = [
  {
    title: 'Discover',
    text: 'Understand client needs, specifications, timelines, and budget.'
  },
  {
    title: 'Source',
    text: 'Identify and vet reliable suppliers and manufacturers.'
  },
  {
    title: 'Procure',
    text: 'Negotiate pricing, manage documentation, and execute procurement.'
  },
  {
    title: 'Deliver',
    text: 'Coordinate logistics and ensure timely, compliant delivery.'
  }
];

export default function HowItWorks() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-5">How It Works</h1>

      <div className="row g-4">
        {steps.map((step, i) => (
          <div key={i} className="col-md-3">
            <div className="text-center p-4 border rounded h-100">
              <div className="display-6 fw-bold text-primary mb-2">
                {i + 1}
              </div>
              <h5 className="fw-semibold">{step.title}</h5>
              <p className="mt-2">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
