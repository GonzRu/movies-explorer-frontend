import React from 'react';
import './MoviesCardLike.css';
import classNames from 'classnames';


const MoviesCardLike = ({isLiked, onChange}) => {

    const onClick = () => {
        onChange(!isLiked);
    };

    return (
        <button
            type='button'
            className={classNames(
                'moviesCardLike',
                isLiked && 'moviesCardLike_liked'
            )}
            onClick={onClick}
        />
    );
};

export default MoviesCardLike;
