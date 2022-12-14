import React from 'react';
import TechItem from '../TechItem/TechItem';
import './TechItems.css';

const techs = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

function TechItems() {
  return (
    <ul className="techItems">
      {techs.map((item) => (
        <TechItem
          key={item}
          name={item}
        />
      ))}
    </ul>
  );
}

export default TechItems;
