import React from 'react';
import './Switch.css';

function Switch({ checked, onChange, label }) {
  const changeHandler = (e) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className="container">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={changeHandler}
        />
        <div className="slider round" />
        <span className="switch__text">{label}</span>
      </label>
    </div>
  );
}

export default Switch;
