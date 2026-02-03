import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">We operate without borders.</h1>
          <p className="lead mt-3">
            Sahel Hive Tradelinks is a remote-first procurement and marketing company
            enabling global access to suppliers, markets, and opportunities.
          </p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-primary btn-lg me-3">
              Get Started
            </a>
            <a href="#contact" className="btn btn-outline-dark btn-lg">
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Who We Are</h2>
              <p className="mt-3">
                As an emerging remote-first procurement and marketing company,
                Sahel Hive Tradelinks connects markets, suppliers, and buyers beyond
                physical locations—making trade truly borderless.
              </p>
            </div>
            <div className="col-md-6">
              <div className="bg-secondary text-white p-4 rounded">
                <h5>Remote-First Advantage</h5>
                <p className="mb-0">
                  Technology-driven sourcing, strategic partnerships, and market intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

