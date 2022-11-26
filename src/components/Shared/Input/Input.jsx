import React from 'react';
import classNames from 'classnames';
import './Input.css';

const Input = (props) => {

    const {
        value,
        onValueChanged,
        className,
        style,
        ...otherProps
    } = props;

    return (
        <input
            className={classNames(
                'input',
                `input_style_${style}`,
                className
            )}
            value={value}
            onChange={(e) => onValueChanged?.(e.target.value)}
            {...otherProps}
        />
    );
};

export default Input;
