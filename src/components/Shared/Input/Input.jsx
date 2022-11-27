import React from 'react';
import classNames from 'classnames';
import './Input.css';

function Input(props) {
  const {
    value,
    onValueChanged,
    className,
    theme,
    hasError,
    ...otherProps
  } = props;

  return (
    <input
      className={classNames(
        'input',
        `input_style_${theme}`,
        className,
        hasError && 'input_error',
      )}
      value={value}
      onChange={(e) => onValueChanged?.(e.target.value)}
      {...otherProps}
    />
  );
}

export default Input;
