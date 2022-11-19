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

const TechItems = () => {
    return (
        <div className='techItems'>
            {techs.map(item => <TechItem key={item} name={item}/>)}
        </div>
    );
};

export default TechItems;
