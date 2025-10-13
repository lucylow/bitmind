// src/ui/main.js
// Main UI component for the BitMind Smart Invoice demo

import React from 'react';
import ReactDOM from 'react-dom/client';
import InvoiceList from './components/InvoiceList.js';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>BitMind Smart Invoice Dashboard</h1>
      <InvoiceList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

