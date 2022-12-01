import React from 'react';
import './MenuIcon.css';

function MenuIcon({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="menuIcon"
    />
  );
}

export default MenuIcon;
