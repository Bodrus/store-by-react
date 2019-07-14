/* eslint-disable no-unused-vars */
import React from 'react';
import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="ops">OPS!!!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already send enginers to fix bugs)</span>
    </div>
  );
};

export default ErrorIndicator;
