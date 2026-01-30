// src/pages/Home.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <header className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-5 fw-bold">We operate without borders.</h1>
              <p className="lead">
                Sahel Hive Tradelinks is a remote-first procurement and marketing company, enabling global access to suppliers, markets, and opportunities—anytime, from anywhere.
              </p>
              <p>
                Connecting producers, suppliers, and buyers across regions through smart sourcing, trade facilitation, and market-driven solutions.
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary">Get Started</button>
                <a className="btn btn-outline-secondary" href="#contact">Partner With Us</a>
              </div>
            </div>

            <div className="col-md-5">
              <div id="contact">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h3>Who We Are</h3>
          <p>
            As one of the emerging remote-first procurement & marketing companies, Sahel Hive Tradelinks connects markets, suppliers, and buyers beyond physical locations—making trade truly borderless.
            We leverage technology, strategic partnerships, and market intelligence to deliver efficient procurement, supplier access, and product marketing services across local, regional, and international markets.
          </p>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h4>Clients</h4>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="border p-3 text-center">Client Logo</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border p-3 text-center">Client Logo</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border p-3 text-center">Client Logo</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border p-3 text-center">Client Logo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
