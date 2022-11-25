import React from 'react';
import './MoviesCard.css';
import MoviesCardLike from '../MoviesCardLike/MoviesCardLike';


const MoviesCard = ({movie}) => {
    return (
        <li className='moviesCard'>
            <img
                src={movie.img}
                alt={movie.name}
            />
            <div className='moviesCard__nameContainer'>
                <span className='moviesCard__name'>
                    {movie.name}
                </span>
                <MoviesCardLike
                    isLiked={movie.liked}
                    onChange={(liked) => {}}
                />
            </div>
            <span className='moviesCard__duration'>
                {movie.duration}
            </span>
        </li>
    );
};

export default MoviesCard;
