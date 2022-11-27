import React from 'react';
import AppLink from '../../../Shared/AppLink/AppLink';
import {LOGIN_ROUTE, REGISTER_ROUTE} from '../../../../consts/routes';
import Button from '../../../Shared/Button/Button';
import './NotLoggedNavigation.css';
import {useHistory} from 'react-router-dom';

const NotLoggedNavigation = () => {

    const history = useHistory();

    const onLoginClickHandler = () => {
        history.push(LOGIN_ROUTE)
    }

    return (
        <div className='notLoggedNavigation'>
            <AppLink
                to={REGISTER_ROUTE}
                className='notLoggedNavigation__registration'
            >
                Регистрация
            </AppLink>
            <Button
                className='notLoggedNavigation__login'
                onClick={onLoginClickHandler}
            >
                Войти
            </Button>
        </div>
    );
};

export default NotLoggedNavigation;
