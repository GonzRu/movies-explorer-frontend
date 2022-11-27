import React, { memo } from 'react';
import classNames from 'classnames';
import Input from '../Input/Input';
import './InputWithLabel.css';

function InputWithLabel(props) {
  const {
    id,
    label,
    value,
    onValueChanged,
    error,
    className,
    ...otherProps
  } = props;

  return (
    <div className={classNames(
      'inputWithLabel',
      className,
    )}
    >
      <label
        className="inputWithLabel__label"
        id={id}
      >
        {label}
      </label>
      <Input
        value={value}
        onValueChanged={onValueChanged}
        hasError={!!error}
        {...otherProps}
      />
      {error && <span className="inputWithLabel_error">{error}</span>}
    </div>
  );
}

export default memo(InputWithLabel);
