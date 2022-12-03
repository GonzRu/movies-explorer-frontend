import React, { useState } from 'react';
import './MoviesSearchForm.css';
import Switch from '../Switch/Switch';

function MoviesSearchForm({ onSubmit, filter }) {
  const [search, setSearch] = useState(filter?.search ?? '');
  const [shortOnly, setShortOnly] = useState(filter?.shortOnly ?? false);
  const [error, setError] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!search) {
      setError('Нужно ввести ключевое слово');
      return;
    }
    setError('');
    onSubmit({ search, shortOnly });
  };

  return (
    <form className="searchForm" onSubmit={onSubmitHandler}>
      <div className="searchForm__mainContent">
        <div className="searchForm__icon" />
        <input
          className="searchForm__input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="searchForm__searchBtn"
        />
        <div className="searchForm__wideSliderWrapper">
          <Switch
            checked={shortOnly}
            onChange={(value) => setShortOnly(value)}
            label="Короткометражки"
          />
        </div>
      </div>

      {error && <span className="searchForm__error">{error}</span>}

      <div className="searchForm__shotSlideWrapper">
        <Switch
          checked={shortOnly}
          onChange={(value) => setShortOnly(value)}
          label="Короткометражки"
        />
      </div>
    </form>
  );
}

export default MoviesSearchForm;
