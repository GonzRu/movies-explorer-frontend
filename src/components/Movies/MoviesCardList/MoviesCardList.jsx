import React from 'react';
import movieImg from '../../../images/movie_1.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const movies = [
    {
        name: "33 слова о дизайне",
        duration: '1ч42м',
        img: movieImg,
        liked: true
    },
    {
        name: "Киноальманах «100 лет дизайна»",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        name: "В погоне за Бенкси",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        name: "Бег это свобода",
        duration: '1ч42м',
        img: movieImg,
        liked: true
    },
    {
        name: "Книготорговцы",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        name: "Когда я думаю о Германии ночью",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
];

const MoviesCardList = () => {
    return (
        <ul className='moviesCardList'>
            {movies.map(movie =>
                    <MoviesCard movie={movie} />
            )}
        </ul>
    );
};

export default MoviesCardList;
