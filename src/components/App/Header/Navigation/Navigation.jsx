import React, { useContext } from 'react';
import './Navigation.css';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';
import NotLoggedNavigation from '../NotLoggedNavigation/NotLoggedNavigation';
import LoggedNavigation from '../LoggedNavigation/LoggedNavigation';

function Navigation() {
  const [currentUser] = useContext(CurrentUserContext);

  if (!currentUser) {
    return (<NotLoggedNavigation />);
  }

  return (<LoggedNavigation />);
}

export default Navigation;
