import React from 'react';
import './TechItem.css';

const TechItem = ({name}) => {
    return (
        <div className='techItem'>
            {name}
        </div>
    );
};

export default TechItem;
