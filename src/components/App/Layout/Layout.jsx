import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MAIN_ROUTE } from '../../../consts/routes';

function Layout({ children }) {
  const location = useLocation();
  const [isMainPage, setIsMainPage] = useState(false);

  useEffect(() => {
    setIsMainPage(location.pathname === MAIN_ROUTE);
  }, [location]);

  return (
    <>
      <Header isAccent={isMainPage} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
