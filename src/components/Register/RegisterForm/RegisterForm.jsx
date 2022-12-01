import React, { useCallback, useState } from 'react';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './RegisterForm.css';

function RegisterForm() {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('qwertyu');

  const onNameChanged = useCallback((value) => setName(value), [setName]);
  const onEmailChanged = useCallback((value) => setEmail(value), [setEmail]);
  const onPasswordChanged = useCallback((value) => setPassword(value), [setPassword]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="registerForm" onSubmit={onSubmit}>
      <InputWithLabel
        label="Имя"
        value={name}
        onValueChanged={onNameChanged}
      />
      <InputWithLabel
        label="E-mail"
        value={email}
        onValueChanged={onEmailChanged}
      />
      <InputWithLabel
        className="registerForm__lastInput"
        label="Пароль"
        value={password}
        onValueChanged={onPasswordChanged}
        type="password"
        error="Что-то пошло не так..."
      />
      <Button
        type="submit"
        className="registerForm__submitBtn"
      >
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegisterForm;
