import React, { useState } from 'react';
import './MoviesSearchForm.css';
import searchBtn from '../../../images/search-btn.svg';
import Switch from '../Switch/Switch';

function MoviesSearchForm() {
  const [shortFilmOnly, setShortFilmOnly] = useState(false);

  return (
    <div className="searchForm">
      <div className="searchForm__mainContent">
        <div className="searchForm__icon" />
        {/* <div style={{ */}
        {/*    height: 20, */}
        {/*    backgroundColor: 'red' */}
        {/* }}></div> */}
        <input
          className="searchForm__input"
          type="text"
        />
        <img
          className="searchForm__searchBtn"
          src={searchBtn}
        />
        <div className="searchForm__wideSliderWrapper">
          <Switch
            value={shortFilmOnly}
            onChange={(value) => setShortFilmOnly(value)}
            label="Короткометражки"
          />
        </div>
      </div>

      <div className="searchForm__shotSlideWrapper">
        <Switch
          value={shortFilmOnly}
          onChange={(value) => setShortFilmOnly(value)}
          label="Короткометражки"
        />
      </div>
    </div>
  );
}

export default MoviesSearchForm;
