import { FaSeedling, FaIndustry, FaHospital, FaBuilding, FaShoppingCart, FaRoad } from 'react-icons/fa';

const industries = [
  { icon: <FaSeedling />, name: 'Agriculture' },
  { icon: <FaIndustry />, name: 'Manufacturing' },
  { icon: <FaHospital />, name: 'Healthcare' },
  { icon: <FaBuilding />, name: 'Government & NGOs' },
  { icon: <FaShoppingCart />, name: 'Consumer Goods' },
  { icon: <FaRoad />, name: 'Infrastructure' }
];

export default function Industries() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">Industries We Serve</h1>

      <div className="row g-4">
        {industries.map((industry, i) => (
          <div key={i} className="col-6 col-md-4">
            <div className="border rounded text-center p-4 h-100">
              <div className="display-6 mb-3 text-primary">
                {industry.icon}
              </div>
              <h6 className="fw-semibold">{industry.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
