import { useMemo } from 'react';

const movieFilter = (movie, filter) => {
  if (filter.shortOnly && movie.duration > 40) {
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
