import React, {memo} from 'react';
import {NavLink} from 'react-router-dom';
import './AppLink.css'

const AppLink = (props) => {

    const {
        to,
        children,
        className
    } = props;

    const rootClasses = className ? `appLink ${className}` : 'appLink';

    return (
        <NavLink
            className={rootClasses}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default memo(AppLink);
