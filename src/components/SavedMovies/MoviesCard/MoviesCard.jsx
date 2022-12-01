import React from 'react';
import './MoviesCard.css';
import getDurationText from '../../../utils/durationHelper';

function MoviesCard({ movie, onRemove }) {
  const duration = getDurationText(movie.duration);

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
