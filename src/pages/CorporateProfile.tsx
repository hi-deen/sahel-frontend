import React from 'react';

const CorporateProfile: React.FC = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Corporate Profile</h2>

      <section className="mb-4">
        <h4>Company Overview</h4>
        <p>
          <strong>Company Name:</strong> Sahel Hive Tradelinks Limited<br/>
          <strong>Legal Status:</strong> Private Company Limited by Shares<br/>
          <strong>Incorporation Jurisdiction:</strong> Federal Republic of Nigeria<br/>
          <strong>Governing Law:</strong> Companies and Allied Matters Act (CAMA) 2020<br/>
          <strong>Registered Office:</strong> Nigeria
        </p>

        <p>
          Sahel Hive Tradelinks Limited is a Nigerian-based trading and procurement company
          established to facilitate efficient, ethical, and scalable trade across multiple sectors.
          The company operates as a link between manufacturers, suppliers, and end-users,
          delivering value through reliability, transparency, and market intelligence.
        </p>
      </section>

      <section className="mb-4">
        <h4>Core Business Activities</h4>
        <ul>
          <li>Trade, procure, buy, sell, import, export, and distribute all categories of goods.</li>
          <li>Act as traders, suppliers, distributors, agents, stockists, and representatives.</li>
          <li>Provide consultancy services related to procurement and supply-chain optimization.</li>
        </ul>
      </section>

      <section>
        <h4>Operating Model</h4>
        <p>
          Sahel Hive Tradelinks Limited operates as a remote-first procurement and marketing company,
          enabling access to services from any location. Through technology, partnerships,
          and market intelligence, we provide borderless trade solutions.
        </p>
      </section>
    </div>
  );
};

export default CorporateProfile;
