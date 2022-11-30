import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import { nameValidatorRegexp } from '../../../utils/validatros';
import './FormInputs.css';

function FormInputs({
  values, errors, onChange, editMode,
}) {
  return (
    <>
      <InputWithLabel
        label="Имя"
        name="name"
        value={values.name}
        error={errors.name}
        onValueChanged={onChange}
        readOnly={!editMode}
        required
        pattern={nameValidatorRegexp}
      />
      <div className="formInputs__delimiter" />
      <InputWithLabel
        className="formInputs__lastInput"
        label="E-mail"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onValueChanged={onChange}
        readOnly={!editMode}
        required
      />
    </>
  );
}

export default FormInputs;
