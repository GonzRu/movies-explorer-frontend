import React from 'react';
import './MoviesCard.css';
import mainApi from '../../../utils/MainApi';

function MoviesCard({ movie }) {
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;

  const onRemove = () => mainApi.removeMovie(movie._id);

  return (
    <li className="savedMoviesCard">
      <img
        src={movie.image}
        alt={movie.nameRU}
      />
      <div className="savedMoviesCard__nameContainer">
        <span className="savedMoviesCard__name">
          {movie.nameRU}
        </span>

        <button
          className="savedMoviesCard__removeBtn"
          type="button"
          onClick={onRemove}
        />
      </div>
      <span className="savedMoviesCard__duration">
        {duration}
      </span>
    </li>
  );
}

export default MoviesCard;
