import React, { useContext } from 'react';
import './MoviesCard.css';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';
import SavedMoviesContext from '../../../contexts/SavedMoviesContext';

function MoviesCard({ movie }) {
  const imageUrl = `https://api.nomoreparties.co/${movie.image.url}`;
  const thumbnailUrl = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;

  const {
    savedMovies,
    saveMovie,
    removeMovie,
  } = useContext(SavedMoviesContext);
  const savedMovie = savedMovies[movie.id];
  const isSaved = !!savedMovie;

  const onLike = (isLiked) => {
    if (isLiked) {
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
      saveMovie(data);
    } else removeMovie(savedMovie._id);
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
          isLiked={isSaved}
          onChange={onLike}
        />
      </div>
      <span className="moviesCard__duration">
        {duration}
      </span>
    </li>
  );
}

export default MoviesCard;
