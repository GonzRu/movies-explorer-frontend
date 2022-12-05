import {
  useCallback, useState,
} from 'react';
import moviesApi from '../utils/MoviesApi';

export default function useMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchMovies = useCallback(() => {
    setIsLoading(true);
    return moviesApi.getMovies()
      .then(((m) => {
        setMovies(m);
        setInitialized(true);
      }))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    initialized,
    error,
    movies,
    fetchMovies,
  };
}
