import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { MOVIES_ROUTE } from '../../../consts/routes';

function UnauthorizedOnlyRoute({ children, ...props }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser) {
    return (
      <Redirect to={MOVIES_ROUTE} />
    );
  }

  return (
    <Route {...props}>
      {children}
    </Route>
  );
}

export default UnauthorizedOnlyRoute;
