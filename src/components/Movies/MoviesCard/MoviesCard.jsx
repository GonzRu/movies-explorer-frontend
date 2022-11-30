import React from 'react';
import './MoviesCard.css';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';
import mainApi from '../../../utils/MainApi';

function MoviesCard({ movie }) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  const thumbnailUrl = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;

  const like = async () => {
    console.log(movie);
    const data = {
      movieId: movie.id,
      country: movie.country,
      description: movie.description,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      image: imageUrl,
      trailerLink: movie.trailerLink,
      thumbnail: thumbnailUrl,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    await mainApi.saveMovie(data);
  };

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
          onChange={() => like()}
        />
      </div>
      <span className="moviesCard__duration">
        {duration}
      </span>
    </li>
  );
}

export default MoviesCard;
