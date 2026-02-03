import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 


import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import HowItWorks from './pages/HowItWorks';
import CorporateProfile from './pages/CorporateProfile';
import ChatWidget from './components/ChatWidget';


// function App() {
//   return <h1>Hello world</h1>
// }

// export default App

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Sahel Hive</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/industries">Industries</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/how">How it works</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/profile">Corporate Profile</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/profile" element={<CorporateProfile />} />
      </Routes>

      <ChatWidget />  
    </BrowserRouter>
  );
}

export default App;
