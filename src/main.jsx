import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Preloader from './components/Preloader.jsx'; // Import the Preloader component

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the preloader
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : <Router><App /></Router>;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
