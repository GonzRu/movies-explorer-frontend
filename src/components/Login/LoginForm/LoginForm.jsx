import React, { useContext, useState } from 'react';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './LoginForm.css';
import useForm from '../../../hooks/useForm';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import Error from '../../Shared/Error/Error';
import { emailValidatorRegexp } from '../../../utils/validatros';

function LoginForm() {
  const { login } = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    onChange,
  } = useForm({ email: '', password: '' }, false);

  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setPending(true);
      setError('');
      await login(values);
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <InputWithLabel
        label="E-mail"
        name="email"
        value={values.email}
        error={errors.email}
        onValueChanged={onChange}
        pattern={emailValidatorRegexp}
      />
      <InputWithLabel
        className="loginForm__lastInput"
        label="Пароль"
        name="password"
        value={values.password}
        error={errors.password}
        onValueChanged={onChange}
        type="password"
      />
      <Error text={error} />
      <Button
        type="submit"
        className="loginForm__submitBtn"
        disabled={!isValid || pending}
      >
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
