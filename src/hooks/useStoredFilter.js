import { useCallback, useState } from 'react';
import { MOVIES_FILTER_LOCALSTORAGE_KEY } from '../consts/localStorage';

const getStoredFilter = () => {
  const str = localStorage.getItem(MOVIES_FILTER_LOCALSTORAGE_KEY);
  if (str) {
    return JSON.parse(str);
  }

  return {
    search: '',
    shortOnly: false,
  };
};

const useStoredFilter = () => {
  const [filter, setFilter] = useState(getStoredFilter());

  const setFilterWrapper = useCallback((newFilter) => {
    localStorage.setItem(MOVIES_FILTER_LOCALSTORAGE_KEY, JSON.stringify(newFilter));
    setFilter(newFilter);
  }, [setFilter]);

  return [filter, setFilterWrapper];
};

export default useStoredFilter;
