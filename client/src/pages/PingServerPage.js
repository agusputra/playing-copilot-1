import React, { useState } from 'react';
import axios from 'axios';

const PingServerPage = () => {
  const [responseTime, setResponseTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pingHistory, setPingHistory] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('idle');

  // Get the API URL based on environment
  const getApiUrl = () => {
    return '/api/ping';
  };

  const pingServer = async () => {
    setLoading(true);
    setError(null);
    setConnectionStatus('connecting');
    
    try {
      const startTime = Date.now();
      const response = await axios.get(getApiUrl());
      const endTime = Date.now();
      
      if (response.status === 200) {
        const time = endTime - startTime;
        setResponseTime(time);
        setConnectionStatus('connected');
        
        // Add to ping history
        const newPing = {
          id: Date.now(),
          time,
          timestamp: new Date().toLocaleTimeString(),
          status: 'success'
        };
        setPingHistory(prevHistory => [newPing, ...prevHistory].slice(0, 5));
      }
    } catch (err) {
      setError('Failed to ping the server. Please check your connection and try again.');
      setConnectionStatus('failed');
      
      // Add failed ping to history
      const newPing = {
        id: Date.now(),
        time: null,
        timestamp: new Date().toLocaleTimeString(),
        status: 'failed'
      };
      setPingHistory(prevHistory => [newPing, ...prevHistory].slice(0, 5));
      
      console.error('Error pinging server:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = () => {
    switch (connectionStatus) {
      case 'connecting':
        return 'status-connecting';
      case 'connected':
        return 'status-connected';
      case 'failed':
        return 'status-failed';
      default:
        return 'status-idle';
    }
  };

  const getResponseQuality = (time) => {
    if (!time) return null;
    if (time < 100) return { label: 'Excellent', class: 'response-excellent' };
    if (time < 300) return { label: 'Good', class: 'response-good' };
    if (time < 600) return { label: 'Fair', class: 'response-fair' };
    return { label: 'Slow', class: 'response-slow' };
  };

  return (
    <>
      <div className="card">
        <h1>Ping Server</h1>
        
        <div className="server-status-container">
          <div className={`connection-status ${getStatusClass()}`}>
            <div className="status-indicator"></div>
            <span className="status-text">
              {connectionStatus === 'idle' && 'Ready to connect'}
              {connectionStatus === 'connecting' && 'Connecting...'}
              {connectionStatus === 'connected' && 'Connected'}
              {connectionStatus === 'failed' && 'Connection Failed'}
            </span>
          </div>
          
          <button 
            className="button-primary ping-button"
            onClick={pingServer}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Pinging...
              </>
            ) : 'Ping Server'}
          </button>
        </div>
        
        {responseTime !== null && (
          <div className={`response-info ${getResponseQuality(responseTime)?.class}`}>
            <h2>Response received!</h2>
            <div className="response-details">
              <div className="response-metric">
                <span className="metric-value">{responseTime}</span>
                <span className="metric-unit">ms</span>
              </div>
              <div className="response-quality">
                {getResponseQuality(responseTime)?.label}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {error}
          </div>
        )}
      </div>
      
      {pingHistory.length > 0 && (
        <div className="card">
          <h2>Recent Pings</h2>
          <div className="ping-history">
            <div className="ping-history-header">
              <span>Time</span>
              <span>Response Time</span>
              <span>Status</span>
            </div>
            {pingHistory.map(ping => (
              <div key={ping.id} className="ping-history-item">
                <span>{ping.timestamp}</span>
                <span>{ping.time ? `${ping.time} ms` : '—'}</span>
                <span className={`ping-status ${ping.status}`}>
                  {ping.status === 'success' ? 'Success' : 'Failed'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PingServerPage;
