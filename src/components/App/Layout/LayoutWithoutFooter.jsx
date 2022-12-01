import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { MAIN_ROUTE } from '../../../consts/routes';

function LayoutWithoutFooter({ children }) {
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    setIsMainPage(location.pathname === MAIN_ROUTE);
  }, [location]);

  return (
    <>
      <Header isAccent={isMainPage} />
      {children}
    </>
  );
}

export default LayoutWithoutFooter;
