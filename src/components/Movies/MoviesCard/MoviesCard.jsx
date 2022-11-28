import React from 'react';
import './MoviesCard.css';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';

function MoviesCard({ movie }) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;
  return (
    <li className="moviesCard">
      <img
        className="moviesCard__image"
        src={imageUrl}
        alt={movie.nameRU}
      />
      <div className="moviesCard__nameContainer">
        <span className="moviesCard__name">
          {movie.nameRU}
        </span>
        <MoviesCardLike
          isLiked={movie.liked}
          onChange={() => {}}
        />
      </div>
      <span className="moviesCard__duration">
        {duration}
      </span>
    </li>
  );
}

export default MoviesCard;
