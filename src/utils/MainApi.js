import responseProcessor from './httpResponseProcessor';
import { getToken } from './jwt';

const baseUrl = 'http://localhost:5000';
// const baseUrl = 'ttps://api.dsmirnov-diplom.nomoredomains.icu';

class MainApi {
  // eslint-disable-next-line class-methods-use-this
  signup(data) {
    return fetch(
      `${baseUrl}/signup`,
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
      `${baseUrl}/signin`,
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
      `${baseUrl}/users/me`,
      {
        headers: this.getHeaders(),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  updateCurrentUser(data) {
    return fetch(
      `${baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  getSavedMovies() {
    return fetch(
      `${baseUrl}/movies`,
      {
        headers: this.getHeaders(),
      },
    )
      .then(responseProcessor);
  }

  // eslint-disable-next-line class-methods-use-this
  saveMovie(data) {
    return fetch(
      `${baseUrl}/movies`,
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
      `${baseUrl}/movies/${id}`,
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
