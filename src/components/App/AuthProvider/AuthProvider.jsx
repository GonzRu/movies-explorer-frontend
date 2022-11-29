import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import mainApi from '../../../utils/MainApi';
import { JWT_LOCALSTORAGE_KEY } from '../../../consts/localStorage';
import { MAIN_ROUTE } from '../../../consts/routes';

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const login = useCallback(async (data) => {
    const response = await mainApi.signin(data);
    const { token } = response;

    localStorage.setItem(JWT_LOCALSTORAGE_KEY, token);

    const user = await mainApi.getCurrentUser(token);
    setCurrentUser(user);

    history.push(MAIN_ROUTE);
  }, [history]);

  const logout = useCallback(() => {
    localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
    history.push(MAIN_ROUTE);
  }, [history]);

  const value = useMemo(() => ({
    currentUser,
    login,
    logout,
  }), [currentUser, login]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export default AuthProvider;
