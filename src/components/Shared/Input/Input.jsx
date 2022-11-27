import React from 'react';
import classNames from 'classnames';
import './Input.css';

function Input(props) {
  const {
    value,
    onValueChanged,
    className,
    theme,
    ...otherProps
  } = props;

  return (
    <input
      className={classNames(
        'input',
        `input_style_${theme}`,
        className,
      )}
      value={value}
      onChange={(e) => onValueChanged?.(e.target.value)}
      {...otherProps}
    />
  );
}

export default Input;
