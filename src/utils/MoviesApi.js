class MoviesApi {
  // eslint-disable-next-line class-methods-use-this
  getMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies')
      .then((res) => res.json());
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
