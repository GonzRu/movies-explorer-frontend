import React, { useMemo, useState } from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
  }), [currentUser, setCurrentUser]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default AuthProvider;
