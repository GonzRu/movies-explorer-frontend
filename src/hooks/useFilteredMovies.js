import { useMemo } from 'react';
import { SHORT_FILM_MAX_DURATION } from '../consts/movies';

const movieFilter = (movie, filter) => {
  if (filter.shortOnly && movie.duration > SHORT_FILM_MAX_DURATION) {
    return false;
  }

  if (!filter.search) {
    return true;
  }

  const search = filter.search.toLowerCase();
  return (movie.nameRU.toLowerCase().includes(search) || movie.nameEN.toLowerCase().includes(search));
};

const useFilteredMovies = (movies, filter) => {
  const filteredMovies = useMemo(() => movies.filter((movie) => movieFilter(movie, filter)), [movies, filter]);

  return filteredMovies;
};

export default useFilteredMovies;
