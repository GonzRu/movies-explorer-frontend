import React, { useState } from 'react';
import './MoviesSearchForm.css';
import Switch from '../Switch/Switch';
import Error from '../Error/Error';

function MoviesSearchForm({ onSubmit, filter, allowEmptySearch = false }) {
  const [search, setSearch] = useState(filter?.search ?? '');
  const [shortOnly, setShortOnly] = useState(filter?.shortOnly ?? false);
  const [error, setError] = useState('');

  const submit = (data) => {
    if (!allowEmptySearch && !search) {
      setError('Нужно ввести ключевое слово');
      return;
    }
    setError('');
    onSubmit(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submit({ search, shortOnly });
  };

  const onShortOnlyChangeHandler = (value) => {
    setShortOnly(value);
    submit({ search, shortOnly: value });
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
            onChange={onShortOnlyChangeHandler}
            label="Короткометражки"
          />
        </div>
      </div>
      <Error text={error} />
      <div className="searchForm__shotSlideWrapper">
        <Switch
          checked={shortOnly}
          onChange={onShortOnlyChangeHandler}
          label="Короткометражки"
        />
      </div>
    </form>
  );
}

export default MoviesSearchForm;
