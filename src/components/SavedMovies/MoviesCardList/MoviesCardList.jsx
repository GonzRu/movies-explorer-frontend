import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, onRemove }) {
  return (
    <ul className="saveMoviesCardList">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
