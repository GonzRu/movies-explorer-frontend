import React from 'react';
import './AboutProjectItem.css';

function AboutProjectItem({ title, text }) {
  return (
    <div className="aboutProjectItem">
      <h3 className="aboutProjectItem__title">{title}</h3>
      <p className="aboutProjectItem__text">{text}</p>
    </div>
  );
}

export default AboutProjectItem;
