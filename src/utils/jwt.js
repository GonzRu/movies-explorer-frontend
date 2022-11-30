import { JWT_LOCALSTORAGE_KEY } from '../consts/localStorage';

export const getToken = () => localStorage.getItem(JWT_LOCALSTORAGE_KEY);

export const setToken = (token) => {
  localStorage.setItem(JWT_LOCALSTORAGE_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
};
