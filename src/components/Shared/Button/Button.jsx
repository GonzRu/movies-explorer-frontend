import React, {memo} from 'react';
import './Button.css'

const Button = (props) => {
    const {
        className,
        onClick,
        children,
        type = 'button',
        ...otherProps
    } = props;

    const btnClassName = className ? `btn ${className}` : 'btn';

    return (
        <button
            className={btnClassName}
            type={type}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default memo(Button);
