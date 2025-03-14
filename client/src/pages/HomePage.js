import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="card">
        <h1>Welcome to the Dashboard</h1>
        <div className="dashboard-welcome">
          <div className="welcome-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
              <circle cx="12" cy="10" r="3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <p className="welcome-message">
            Welcome to your dashboard! This is a clean, modern interface for managing your tasks and utilities. 
            Use the sidebar navigation to explore different features.
          </p>
        </div>
      </div>
      
      <div className="card">
        <h2>Available Features</h2>
        <ul className="feature-list">
          <li>
            <strong>Home:</strong> Get an overview of the dashboard and available features
          </li>
          <li>
            <strong>Ping Server:</strong> Test server connection and measure response time
          </li>
          <li>
            <strong>Calculator:</strong> Perform quick calculations with an interactive calculator
          </li>
        </ul>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3>Real-time Performance</h3>
          <p>Monitor your server's response time and performance metrics in real-time.</p>
        </div>
        
        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="8" y1="12" x2="16" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
          </div>
          <h3>Utility Tools</h3>
          <p>Access powerful utility tools like the calculator to simplify your daily tasks.</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Modern UI</h3>
          <p>Experience a clean and responsive interface designed for optimal user experience.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
