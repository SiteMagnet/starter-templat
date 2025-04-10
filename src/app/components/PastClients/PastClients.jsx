// components/PastClients.js
import React from 'react';
import './PastClients.css'; // Import the global CSS file

export default function PastClients() {
  return (
    <div className="past-clients-container">
      <p className="past-clients-heading">Some of our past clients</p>
      <div className="client-names">
        <div className="client-name">
          <p>Google</p>
        </div>
        <div className="client-name">
          <p>Amazon</p>
        </div>
        <div className="client-name">
          <p>Facebook</p>
        </div>
        <div className="client-name">
          <p>Twitter</p>
        </div>
        <div className="client-name">
          <p>Apple</p>
        </div>
      </div>
    </div>
  );
}
