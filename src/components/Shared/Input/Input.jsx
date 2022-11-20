import React from 'react';
import classNames from 'classnames';
import './Input.css';

const Input = (props) => {

    const {
        value,
        onValueChanged,
        className,
        placeholder
    } = props;

    return (
        <input
            className={classNames(
                'input',
                className
            )}
            value={value}
            onChange={(e) => onValueChanged?.(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default Input;
