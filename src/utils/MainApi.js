import responseProcessor from './httpResponseProcessor';

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
}

const mainApi = new MainApi();

export default mainApi;
