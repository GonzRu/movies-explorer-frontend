import React, { memo } from 'react';
import './Button.css';
import classNames from 'classnames';

function Button(props) {
  const {
    className,
    onClick,
    children,
    color,
    type = 'button',
    ...otherProps
  } = props;

  const btnClassName = classNames('btn', className, color && `btn_color_${color}`);

  return (
    <button
      type={type}
      className={btnClassName}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default memo(Button);
