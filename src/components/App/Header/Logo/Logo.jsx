import React, {memo} from 'react';
import logo from '../../../../images/logo.svg'
import {NavLink} from 'react-router-dom';
import {MAIN_ROUTE} from '../../../../consts/routes';

const Logo = () => {
    return (
        <NavLink to={MAIN_ROUTE}>
            <img src={logo} alt='Логотип'/>
        </NavLink>
    );
};

export default memo(Logo);
