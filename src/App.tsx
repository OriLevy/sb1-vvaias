import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Auth } from './pages/Auth';
import { CreateTrip } from './pages/CreateTrip';
import { TripPlanner } from './pages/TripPlanner';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/trip/create" element={<CreateTrip />} />
          <Route path="/trip/planner" element={<TripPlanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;