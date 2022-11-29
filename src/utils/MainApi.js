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
}

const mainApi = new MainApi();

export default mainApi;
