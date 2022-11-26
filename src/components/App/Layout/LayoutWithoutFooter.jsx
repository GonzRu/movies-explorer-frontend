import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import {useLocation} from 'react-router-dom';
import {MAIN_ROUTE} from '../../../consts/routes';

const LayoutWithoutFooter = ({children}) => {

    const location = useLocation();
    const [isMainPage, setIsMainPage] = useState(false);

    useEffect(() => {
        setIsMainPage(location.pathname === MAIN_ROUTE);
    }, [location]);

    return (
        <>
            <Header isAccent={isMainPage}/>
            {children}
        </>
    );
};

export default LayoutWithoutFooter;
