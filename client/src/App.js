import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PingServerPage from './pages/PingServerPage';
import CalculatorPage from './pages/CalculatorPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <div className="menu-header">Dashboard</div>
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
            end
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '12px'}}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </NavLink>
          <NavLink 
            to="/ping-server" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '12px'}}>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Ping Server
          </NavLink>
          <NavLink 
            to="/calculator" 
            className={({isActive}) => isActive ? "menu-item active" : "menu-item"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '12px'}}>
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="10" x2="12" y2="10"></line>
              <line x1="12" y1="14" x2="12" y2="14"></line>
              <line x1="8" y1="10" x2="8" y2="10"></line>
              <line x1="16" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="8" y2="14"></line>
              <line x1="16" y1="14" x2="16" y2="14"></line>
              <line x1="8" y1="18" x2="16" y2="18"></line>
            </svg>
            Calculator
          </NavLink>
          <div className="sidebar-footer">
            <p>© {new Date().getFullYear()} Dashboard</p>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ping-server" element={<PingServerPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
