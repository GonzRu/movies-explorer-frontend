import React from 'react';
import movieImg from '../../../images/movie_1.png';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const movies = [
    {
        id: 1,
        name: "33 слова о дизайне",
        duration: '1ч42м',
        img: movieImg,
        liked: true
    },
    {
        id: 2,
        name: "Киноальманах «100 лет дизайна»",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        id: 3,
        name: "В погоне за Бенкси",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        id: 4,
        name: "Бег это свобода",
        duration: '1ч42м',
        img: movieImg,
        liked: true
    },
    {
        id: 5,
        name: "Книготорговцы",
        duration: '1ч42м',
        img: movieImg,
        liked: false
    },
    {
        id: 6,
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
                    <MoviesCard
                        key={movie.id}
                        movie={movie}
                    />
            )}
        </ul>
    );
};

export default MoviesCardList;
