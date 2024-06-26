import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Lore from './pages/Lore';
import Team from './pages/Team';
import Studio from './pages/Studio';
import Farm from './pages/Farm';
import Minnies from './pages/Minnies';
import Nftcollection from './pages/Nft-Collection';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import LandingPage from './pages/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Minnies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thelore" element={<Lore />} />
        <Route path="/team" element={<Team />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/minnies" element={<Minnies />} />
        <Route path="/nft-collection" element={<Nftcollection />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
  
}

export default App;
