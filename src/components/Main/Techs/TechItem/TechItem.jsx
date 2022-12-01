import React from 'react';
import './TechItem.css';

function TechItem({ name }) {
  return (
    <div className="techItem">
      {name}
    </div>
  );
}

export default TechItem;
