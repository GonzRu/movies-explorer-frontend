import React, {
  useContext, useEffect,
} from 'react';
import MoviesSearchForm from '../Shared/MoviesSearchForm/MoviesSearchForm';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../Shared/Button/Button';
import Preloader from './Preloader/Preloader';
import useMovies from '../../hooks/useMovies';
import usePagedMovies from '../../hooks/usePagedMovies';
import useFilteredMovies from '../../hooks/useFilteredMovies';
import useStoredFilter from '../../hooks/useStoredFilter';
import SavedMoviesProvider from './SavedMoviesProvider/SavedMoviesProvider';
import SavedMoviesContext from '../../contexts/SavedMoviesContext';

function Movies() {
  const [filter, setFilter] = useStoredFilter();

  const { fetchSavedMovies } = useContext(SavedMoviesContext);
  const {
    isLoading,
    initialized,
    error,
    movies,
    fetchMovies,
  } = useMovies();
  const filteredMovies = useFilteredMovies(movies, filter);
  const {
    pagedMovies,
    hasMore,
    addMore,
  } = usePagedMovies(filteredMovies);

  const fetchMoviesWrapper = () => Promise.all([
    fetchMovies(),
    fetchSavedMovies()]);

  const onSubmit = (data) => {
    setFilter(data);
    fetchMoviesWrapper();
  };

  useEffect(() => {
    if (filter.search || filter.shortOnly) {
      fetchMoviesWrapper();
    }
  }, []);

  if (error) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        {/* eslint-disable-next-line max-len */}
        <span className="movies_error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        <Preloader />
      </main>
    );
  }

  if (initialized && pagedMovies.length === 0) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        <span className="movies_noResult">Ничего не найдено</span>
      </main>
    );
  }

  if (!initialized) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
      </main>
    );
  }

  return (
    <main className="movies">
      <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
      <MoviesCardList movies={pagedMovies} />
      {hasMore && (
      <Button
        onClick={addMore}
        className="movies__moreBtn"
        color="grey"
      >
        Ещё
      </Button>
      )}

    </main>
  );
}

function MoviesWithContext() {
  return (
    <SavedMoviesProvider>
      <Movies />
    </SavedMoviesProvider>
  );
}

export default MoviesWithContext;
