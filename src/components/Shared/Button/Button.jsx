import React, {memo} from 'react';
import './Button.css'
import classNames from 'classnames';

const Button = (props) => {
    const {
        className,
        onClick,
        children,
        color,
        type = 'button',
        ...otherProps
    } = props;

    const btnClassName = classNames('btn', className, color && `btn_color_${color}`)

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
