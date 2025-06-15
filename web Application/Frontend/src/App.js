import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AssessmentResult from './pages/AssessmentResult';
import './styles/App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<AssessmentResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;