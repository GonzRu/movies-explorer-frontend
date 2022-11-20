import React from 'react';
import './Register.css';
import Logo from '../Shared/Logo/Logo';
import AppLink from '../Shared/AppLink/AppLink';
import {LOGIN_ROUTE} from '../../consts/routes';
import RegisterForm from './RegisterForm/RegisterForm';

const Register = () => {
    return (
        <div className='register'>
            <Logo className='register__logo'/>
            <h1 className='register__header'>Добро пожаловать!</h1>
            <RegisterForm/>
            <div className='register__alreadyRegisteredRow'>
                <span className='register__alreadyRegisteredText'>Уже зарегистрированы?</span>
                <AppLink to={LOGIN_ROUTE}>Войти</AppLink>
            </div>
        </div>
    );
};

export default Register;
