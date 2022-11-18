import React from 'react';
import './DurationStage.css';

const DurationStage = ({text, name, color}) => {

    const durationClasses = color
        ? `durationStage__duration durationStage__duration_color_${color}`
        : 'durationStage__duration';

    return (
        <div className='durationStage'>
            <div className={durationClasses}>{text}</div>
            <div className='durationStage__name'>{name}</div>
        </div>
    );
};

export default DurationStage;
