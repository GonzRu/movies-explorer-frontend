import responseProcessor from './httpResponseProcessor';
import { getToken } from './jwt';

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
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  getCurrentUser() {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/users/me',
      {
        headers: this.getHeaders(),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  getSavedMovies() {
    return fetch(
      'https://api.dsmirnov-diplom.nomoredomains.icu/movies',
      {
        headers: this.getHeaders(),
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
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  removeMovie(id) {
    return fetch(
      `https://api.dsmirnov-diplom.nomoredomains.icu/movies/${id}`,
      {
        method: 'DELETE',
        headers: this.getHeaders(),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    };
  }
}

const mainApi = new MainApi();

export default mainApi;
