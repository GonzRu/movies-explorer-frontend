import React from 'react';
import Input from '../../Shared/Input/Input';
import './InputWithLabel.css';

function InputWithLabel(props) {
  const {
    id,
    label,
    value,
    onValueChanged,
    ...otherProps
  } = props;

  return (
    <div className="profileInputWithLabel">
      <label
        className="profileInputWithLabel__label"
        id={id}
      >
        {label}
      </label>
      <Input
        style="profile"
        value={value}
        onValueChanged={onValueChanged}
        {...otherProps}
      />
    </div>
  );
}

export default InputWithLabel;
