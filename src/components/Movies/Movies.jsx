import React from 'react';
import MoviesSearchForm from '../Shared/MoviesSearchForm/MoviesSearchForm';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../Shared/Button/Button';

function Movies() {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="movies">
      <MoviesSearchForm />
      <MoviesCardList />
      <Button className="movies__moreBtn" color="grey">
        Ещё
      </Button>
    </div>
  );
}

export default Movies;
