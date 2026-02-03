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
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/profile" element={<CorporateProfile />} />
      </Routes>

      <ChatWidget />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
