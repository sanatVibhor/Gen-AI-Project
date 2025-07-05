import React from 'react';
import './AI.css';

const AI = ({ onBack }) => {
  return (
    <div className="ai-background">
      <button className="back-button" onClick={onBack}>← Back</button>
      <div className="ai-content">
        <h1>This is from AI</h1>
        <p>Your project details go here.</p>
      </div>
    </div>
  );
};

export default AI;
