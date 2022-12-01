import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, onRemove }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;

  const onRemoveClick = () => onRemove(movie._id);

  return (
    <li className="savedMoviesCard">
      <img
        src={movie.image}
        alt={movie.nameRU}
        className="savedMoviesCard__img"
      />
      <div className="savedMoviesCard__nameContainer">
        <span className="savedMoviesCard__name">
          {movie.nameRU}
        </span>

        <button
          className="savedMoviesCard__removeBtn"
          type="button"
          onClick={onRemoveClick}
        />
      </div>
      <span className="savedMoviesCard__duration">
        {duration}
      </span>
    </li>
  );
}

export default MoviesCard;
