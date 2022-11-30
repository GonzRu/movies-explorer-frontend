import React from 'react';
import classNames from 'classnames';
import Input from '../../Shared/Input/Input';
import './InputWithLabel.css';

function InputWithLabel(props) {
  const {
    id,
    label,
    value,
    onValueChanged,
    className,
    error,
    ...otherProps
  } = props;

  return (
    <div className={classNames(
      'profileInputWithLabel',
      className,
    )}
    >
      <label
        className="profileInputWithLabel__label"
        id={id}
      >
        {label}
      </label>
      <Input
        theme="profile"
        value={value}
        onValueChanged={onValueChanged}
        {...otherProps}
      />
      {error && <span className="profileInputWithLabel__error">{error}</span>}
    </div>
  );
}

export default InputWithLabel;
