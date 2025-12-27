import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import EcosystemWizard from './components/EcosystemWizard';
import { Header } from './components/Header';

function App() {
  return (
    <Router>
      <div className="antialiased text-slate-900 bg-[#f4f4f0] pt-20">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/configurador" element={<EcosystemWizard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;