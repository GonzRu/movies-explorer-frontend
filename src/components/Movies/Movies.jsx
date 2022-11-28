import React from 'react';
import MoviesSearchForm from '../Shared/MoviesSearchForm/MoviesSearchForm';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../Shared/Button/Button';
import Preloader from './Preloader/Preloader';
import useMovies2 from '../../hooks/useMovies';
import usePagedMovies from '../../hooks/usePagedMovies';

function Movies() {
  const {
    isLoading,
    filter,
    setFilter,
    movies,
    error,
  } = useMovies2();

  const {
    pagedMovies,
    hasMore,
    addMore,
  } = usePagedMovies(movies);

  const onSubmit = (data) => setFilter(data);

  if (error) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
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

  if (movies && movies.length === 0) {
    return (
      <main className="movies">
        <MoviesSearchForm onSubmit={onSubmit} filter={filter} />
        <span className="movies_noResult">Ничего не найдено</span>
      </main>
    );
  }

  if (!pagedMovies) {
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

export default Movies;
