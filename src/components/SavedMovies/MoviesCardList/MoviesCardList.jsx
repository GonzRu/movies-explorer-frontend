import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <ul className="saveMoviesCardList">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
