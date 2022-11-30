import { useMemo } from 'react';

const movieFilter = (movie, filter) => {
  if (filter.shortOnly && movie.duration > 40) {
    return false;
  }

  if (!filter.search) {
    return true;
  }

  return (movie.nameRU.includes(filter.search) || movie.nameEN.includes(filter.search));
};

const useFilteredMovies = (movies, filter) => {
  const filteredMovies = useMemo(() => movies.filter((movie) => movieFilter(movie, filter)), [movies, filter]);

  return filteredMovies;
};

export default useFilteredMovies;
