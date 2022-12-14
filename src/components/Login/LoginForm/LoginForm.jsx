import React, { useCallback, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './LoginForm.css';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { MOVIES_ROUTE } from '../../../consts/routes';

function LoginForm() {
  const history = useHistory();
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChanged = useCallback((value) => setEmail(value), [setEmail]);
  const onPasswordChanged = useCallback((value) => setPassword(value), [setPassword]);

  const onSubmit = (e) => {
    e.preventDefault();

    setCurrentUser({
      name: 'Денис',
      email: 'test@mail.ru',
    });

    history.push(MOVIES_ROUTE);
  };

  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <InputWithLabel
        label="E-mail"
        value={email}
        onValueChanged={onEmailChanged}
      />
      <InputWithLabel
        className="loginForm__lastInput"
        label="Пароль"
        value={password}
        onValueChanged={onPasswordChanged}
        type="password"
      />
      <Button
        type="submit"
        className="loginForm__submitBtn"
      >
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
