import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import mainApi from '../../../utils/MainApi';
import { MAIN_ROUTE, MOVIES_ROUTE } from '../../../consts/routes';
import { getToken, removeToken, setToken } from '../../../utils/jwt';
import { MOVIES_FILTER_LOCALSTORAGE_KEY } from '../../../consts/localStorage';

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const clearCurrentUser = () => {
    removeToken();
    setCurrentUser(null);
    localStorage.removeItem(MOVIES_FILTER_LOCALSTORAGE_KEY);
  };

  const getCurrentUser = () => mainApi.getCurrentUser()
    .then((user) => setCurrentUser(user))
    .catch(() => clearCurrentUser());

  const login = useCallback(async (data) => {
    const response = await mainApi.signin(data);
    const { token } = response;

    setToken(token);

    await getCurrentUser();

    history.push(MOVIES_ROUTE);
  }, [history]);

  const logout = useCallback(() => {
    clearCurrentUser();
    history.push(MAIN_ROUTE);
  }, [history]);

  const updateUser = useCallback((data) => mainApi.updateCurrentUser(data)
    .then((user) => setCurrentUser(user)), [setCurrentUser]);

  const value = useMemo(() => ({
    currentUser,
    login,
    logout,
    updateUser,
  }), [currentUser, login]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      getCurrentUser().finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={value}>
      {isLoading && <span>Загрузка...</span>}
      {!isLoading && children}
    </CurrentUserContext.Provider>
  );
}

export default AuthProvider;
