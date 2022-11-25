import React, {useState} from 'react';
import SearchForm from './SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../Shared/Button/Button';

const Movies = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className='movies'>
            <SearchForm/>
            <div className='movies__separator'/>
            <MoviesCardList/>
            <Button className='movies__moreBtn' color='grey'>
                Ещё
            </Button>
        </div>
    );
};

export default Movies;
