import React, {useCallback, useContext, useState} from 'react';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './LoginForm.css';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import {useHistory} from 'react-router-dom';
import {MOVIES_ROUTE} from '../../../consts/routes';

const LoginForm = () => {

    const history = useHistory();
    const [_, setCurrentUser] = useContext(CurrentUserContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onEmailChanged = useCallback((value) => setEmail(value), [setEmail]);
    const onPasswordChanged = useCallback((value) => setPassword(value), [setPassword]);

    const onSubmit = (e) => {
        e.preventDefault();

        setCurrentUser({
            name: 'Денис',
            email: 'test@mail.ru'
        })

        history.push(MOVIES_ROUTE);
    }

    return (
        <form className='loginForm' onSubmit={onSubmit}>
            <InputWithLabel
                label='E-mail'
                value={email}
                onValueChanged={onEmailChanged}
            />
            <InputWithLabel
                label='Пароль'
                value={password}
                onValueChanged={onPasswordChanged}
                type='password'
            />
            <Button type='submit'
                    className='registerForm__submitBtn'
            >
                Войти
            </Button>
        </form>
    );
};

export default LoginForm;
