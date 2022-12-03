import React, { useCallback, useEffect, useState } from 'react';
import MoviesSearchForm from '../Shared/MoviesSearchForm/MoviesSearchForm';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import Preloader from '../Movies/Preloader/Preloader';
import useFilteredMovies from '../../hooks/useFilteredMovies';
import Error from '../Shared/Error/Error';
import { GET_MOVIES_ERROR } from '../../utils/errors';

function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({});
  const filteredMovies = useFilteredMovies(movies, filter);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (data) => {
    setFilter(data);
  };

  const onRemove = useCallback((id) => {
    mainApi.removeMovie(id)
      .then(() => {
        setMovies(movies.filter((x) => x._id !== id));
      })
      .catch((err) => console.log(err));
  }, [movies]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((values) => setMovies(values))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <main className="savedMovies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        <Preloader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="savedMovies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        <Error text={error} />
      </main>
    );
  }

  return (
    <main className="savedMovies">
      <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
      <MoviesCardList movies={filteredMovies} onRemove={onRemove} />
    </main>
  );
}

export default SavedMovies;
