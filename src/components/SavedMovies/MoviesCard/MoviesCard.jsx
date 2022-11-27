import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <li className="savedMoviesCard">
      <img
        src={movie.img}
        alt={movie.name}
      />
      <div className="savedMoviesCard__nameContainer">
        <span className="savedMoviesCard__name">
          {movie.name}
        </span>

        <button
          className="savedMoviesCard__removeBtn"
          type="button"
          onClick={() => {}}
        />
      </div>
      <span className="savedMoviesCard__duration">
        {movie.duration}
      </span>
    </li>
  );
}

export default MoviesCard;
