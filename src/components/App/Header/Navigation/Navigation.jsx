import React from 'react';
import './Navigation.css'
import {NavLink, useHistory} from 'react-router-dom';
import Button from '../../../Shared/Button/Button';
import {LOGIN_ROUTE, REGISTER_ROUTE} from '../../../../consts/routes';
import AppLink from '../../../Shared/AppLink/AppLink';

const Navigation = () => {
    const history = useHistory();

    const onLoginClickHandler = () => {
        history.push(LOGIN_ROUTE)
    }

    return (
        <div className='navigation'>
            <AppLink to={REGISTER_ROUTE}>
                Регистрация
            </AppLink>
            <Button
                className='navigation__login'
                onClick={onLoginClickHandler}
            >
                Войти
            </Button>
        </div>
    );
};

export default Navigation;
