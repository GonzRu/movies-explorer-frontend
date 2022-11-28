import { useEffect, useMemo, useState } from 'react';
import moviesApi from '../utils/MoviesApi';
import { MOVIES_FILTER_LOCALSTORAGE_KEY } from '../consts/localStorage';

function getStoredFilter() {
  const str = localStorage.getItem(MOVIES_FILTER_LOCALSTORAGE_KEY);
  if (str) {
    return JSON.parse(str);
  }

  return {
    search: '',
    shortOnly: false,
  };
}

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(getStoredFilter());
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!filter.search) return;

    localStorage.setItem(MOVIES_FILTER_LOCALSTORAGE_KEY, JSON.stringify(filter));

    setIsLoading(true);
    moviesApi.getMovies()
      .then(((m) => setMovies(m)))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [filter]);

  const filteredMovies = useMemo(() => {
    if (movies.length === 0) return undefined;

    return movies.filter((movie) => (
      movie.nameRU.includes(filter.search)
      || movie.nameEN.includes(filter.search)
    ) && (
      !filter.shortOnly || movie.duration < 40
    ));
  }, [movies, filter]);

  return {
    isLoading,
    filter,
    setFilter,
    movies: filteredMovies,
    setMovies,
    error,
  };
}
