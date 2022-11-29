import responseProcessor from './httpResponseProcessor';
import { JWT_LOCALSTORAGE_KEY } from '../consts/localStorage';

class MainApi {
  // eslint-disable-next-line class-methods-use-this
  signup(data) {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  signin(data) {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  getCurrentUser(token) {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/users/me',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  saveMovie(data) {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/movies',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(JWT_LOCALSTORAGE_KEY)}`,
        },
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  removeMovie(id) {
    return fetch(
      `https://api.dsmirnov-diplom.nomoredomains.icu/movies${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(JWT_LOCALSTORAGE_KEY)}`,
        },
      },
    )
      .then(responseProcessor);
  }
}

const mainApi = new MainApi();

export default mainApi;
