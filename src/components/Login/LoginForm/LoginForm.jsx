import React, {useCallback, useState} from 'react';
import InputWithLabel from '../../Shared/InputWithLabel/InputWithLabel';
import Button from '../../Shared/Button/Button';
import './LoginForm.css';

const LoginForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onEmailChanged = useCallback((value) => setEmail(value), [setEmail]);
    const onPasswordChanged = useCallback((value) => setPassword(value), [setPassword]);

    const onSubmit = (e) => {
        e.preventDefault();
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
                Зарегистрироваться
            </Button>
        </form>
    );
};

export default LoginForm;
