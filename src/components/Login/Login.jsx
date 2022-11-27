import React from 'react';
import Logo from '../Shared/Logo/Logo';
import AppLink from '../Shared/AppLink/AppLink';
import { REGISTER_ROUTE } from '../../consts/routes';
import './Login.css';
import LoginForm from './LoginForm/LoginForm';

function Login() {
  return (
    <main className="login">
      <Logo className="login__logo" />
      <h1 className="login__header">Рады видеть!</h1>
      <LoginForm />
      <div className="login__alreadyRegisteredRow">
        <span className="login__alreadyRegisteredText">Ещё не зарегистрированы?</span>
        <AppLink to={REGISTER_ROUTE}>Регистрация</AppLink>
      </div>
    </main>
  );
}

export default Login;
