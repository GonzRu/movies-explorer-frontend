import React from 'react';
import './Switch.css';

function Switch({ isChecked, onChange, label }) {
  return (
    <div className="container">
      <label className="switch">
        <input
          type="checkbox"
          value={isChecked}
          onChange={(e) => onChange?.(e.target.value)}
        />
        <div className="slider round" />
        <span className="switch__text">{label}</span>
      </label>
    </div>
  );
}

export default Switch;
