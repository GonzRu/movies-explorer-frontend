import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import { MAIN_ROUTE } from '../../../consts/routes';

function ProtectedRoute({ children, ...props }) {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return (
      <Redirect to={MAIN_ROUTE} />
    );
  }

  return (
    <Route {...props}>
      {children}
    </Route>
  );
}

export default ProtectedRoute;
