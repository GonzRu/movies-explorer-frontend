import React, { useState } from 'react';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './RegisterForm.css';
import useForm from '../../../hooks/useForm';
import mainApi from '../../../utils/MainApi';

function RegisterForm() {
  const {
    values,
    errors,
    isValid,
    onChange,
  } = useForm({ name: '', email: '', password: '' }, false);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setPending(true);
      setError('');
      await mainApi.signup(values);
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="registerForm" onSubmit={onSubmit}>
      <InputWithLabel
        label="Имя"
        name="name"
        value={values.name}
        onValueChanged={onChange}
        error={errors.name}
        placeholder="Имя"
        pattern="^[a-zA-Zа-яА-Я -]{2,}$"
        required
      />
      <InputWithLabel
        label="E-mail"
        name="email"
        type="email"
        value={values.email}
        onValueChanged={onChange}
        error={errors.email}
        placeholder="E-mail"
        required
      />
      <InputWithLabel
        className="registerForm__lastInput"
        label="Пароль"
        name="password"
        value={values.password}
        onValueChanged={onChange}
        error={errors.password}
        placeholder="Пароль"
        type="password"
        required
      />
      {error && <span className="registerForm_error">{error}</span>}
      <Button
        type="submit"
        className="registerForm__submitBtn"
        disabled={!isValid || pending}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegisterForm;
