import React, { useCallback, useMemo, useState } from 'react';
import SavedMoviesContext from '../../../contexts/SavedMoviesContext';
import mainApi from '../../../utils/MainApi';

function SavedMoviesProvider({ children }) {
  const [savedMovies, setSavedMovies] = useState();

  const fetchSavedMovies = useCallback(() => {
    if (savedMovies) return Promise.resolve();

    return mainApi.getSavedMovies()
      .then((movies) => {
        const data = movies.reduce((obj, value) => {
          // eslint-disable-next-line no-param-reassign
          obj[value.movieId] = value;
          return obj;
        }, []);
        setSavedMovies(data);
      });
  }, [savedMovies, setSavedMovies]);

  const saveMovie = useCallback((data) => {
    mainApi.saveMovie(data)
      .then((movie) => {
        const newState = { ...savedMovies };
        newState[movie.movieId] = movie;
        setSavedMovies(newState);
      });
  }, [savedMovies]);

  const removeMovie = useCallback((id) => {
    mainApi.removeMovie(id)
      .then((movie) => {
        const newState = { ...savedMovies };
        delete newState[movie.movieId];
        setSavedMovies(newState);
      });
  }, [savedMovies]);

  const value = useMemo(() => ({
    savedMovies,
    fetchSavedMovies,
    saveMovie,
    removeMovie,
  }), [fetchSavedMovies, removeMovie, saveMovie, savedMovies]);

  return (
    <SavedMoviesContext.Provider value={value}>
      {children}
    </SavedMoviesContext.Provider>
  );
}

export default SavedMoviesProvider;
