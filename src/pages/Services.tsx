const services = [
  {
    title: 'Sourcing & Procurement',
    text: 'Strategic sourcing of quality goods from verified suppliers across local and international markets.'
  },
  {
    title: 'Import & Export',
    text: 'Facilitating compliant cross-border trade, logistics coordination, and documentation support.'
  },
  {
    title: 'Distribution',
    text: 'Reliable product distribution to wholesalers, retailers, institutions, and project sites.'
  },
  {
    title: 'Consulting',
    text: 'Procurement advisory, market intelligence, and supply-chain optimization services.'
  },
  {
    title: 'Supplier Vetting',
    text: 'Background checks, quality assurance, and risk evaluation of suppliers and manufacturers.'
  }
];

export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-muted mb-5">
        End-to-end procurement and trade solutions tailored to your needs.
      </p>

      <div className="row g-4">
        {services.map((service, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="card-text mt-2">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
