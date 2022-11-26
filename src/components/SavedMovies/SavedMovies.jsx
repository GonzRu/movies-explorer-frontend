import React from 'react';
import MoviesSearchForm from '../Shared/MoviesSearchForm/MoviesSearchForm';
import './SavedMovies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = () => {
    return (
        <div className='savedMovies'>
            <MoviesSearchForm/>
            <div className='movies__separator'/>
            <MoviesCardList/>
        </div>
    );
};

export default SavedMovies;
