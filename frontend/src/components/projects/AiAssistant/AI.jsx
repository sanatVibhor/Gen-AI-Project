import React from 'react';
import './AI.css';

const AI = ({ onBack }) => {
  return (
    <div className="ai-fullscreen">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h1>This is from AI</h1>
      <p>Project description or features can go here.</p>
    </div>
  );
};

export default AI;
