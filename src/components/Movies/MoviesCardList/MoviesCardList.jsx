import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <ul className="moviesCardList">
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
