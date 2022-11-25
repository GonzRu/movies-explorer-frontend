import React from 'react';
import './Switch.css';

const Switch = ({isChecked, onChange, label}) => {
    return (
        <div className="container">
            <label className="switch">
                <input
                    type="checkbox"
                    value={isChecked}
                    onChange={(e) => onChange?.(e.target.value)}
                />
                <div className="slider round"></div>
                <span className='switch__text'>{label}</span>
                {/*<label htmlFor={}>*/}
                {/*    {<label for=""></label>}*/}
                {/*</label>*/}
            </label>
        </div>
    );
};

export default Switch;
