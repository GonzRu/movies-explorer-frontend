import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import {
  ADD_MOVIES_COUNT_FOR_DOWN_LIMIT3_WIDTH,
  ADD_MOVIES_COUNT_FOR_LIMIT1_WIDTH, ADD_MOVIES_COUNT_FOR_LIMIT2_WIDTH, ADD_MOVIES_COUNT_FOR_LIMIT3_WIDTH,
  INITIAL_MOVIES_COUNT_FOR_DOWN_LIMIT3_WIDTH,
  INITIAL_MOVIES_COUNT_FOR_LIMIT1_WIDTH, INITIAL_MOVIES_COUNT_FOR_LIMIT2_WIDTH, INITIAL_MOVIES_COUNT_FOR_LIMIT3_WIDTH,
  MOVIES_WIDTH_LIMIT1,
  MOVIES_WIDTH_LIMIT2,
  MOVIES_WIDTH_LIMIT3,
} from '../consts/movies';

function getInitialCountByWidth(width) {
  if (width >= MOVIES_WIDTH_LIMIT1) return INITIAL_MOVIES_COUNT_FOR_LIMIT1_WIDTH;
  if (width >= MOVIES_WIDTH_LIMIT2) return INITIAL_MOVIES_COUNT_FOR_LIMIT2_WIDTH;
  if (width >= MOVIES_WIDTH_LIMIT3) return INITIAL_MOVIES_COUNT_FOR_LIMIT3_WIDTH;

  return INITIAL_MOVIES_COUNT_FOR_DOWN_LIMIT3_WIDTH;
}

function getAddMoreCountByWidth(width) {
  if (width >= MOVIES_WIDTH_LIMIT1) return ADD_MOVIES_COUNT_FOR_LIMIT1_WIDTH;
  if (width >= MOVIES_WIDTH_LIMIT2) return ADD_MOVIES_COUNT_FOR_LIMIT2_WIDTH;
  if (width >= MOVIES_WIDTH_LIMIT3) return ADD_MOVIES_COUNT_FOR_LIMIT3_WIDTH;

  return ADD_MOVIES_COUNT_FOR_DOWN_LIMIT3_WIDTH;
}

function getCurrentWidth() {
  return window.screen.width;
}

export default function usePagedMovies(movies) {
  const [pagedMovies, setPagedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [width, setWidth] = useState(getCurrentWidth());
  const timeoutRef = useRef();

  const addMore = useCallback(() => {
    const addMoreCount = getAddMoreCountByWidth(width);
    const newMovies = movies.slice(pagedMovies.length, pagedMovies.length + addMoreCount);
    const newPagedMovies = [...pagedMovies, ...newMovies];

    if (newPagedMovies.length === movies.length) {
      setHasMore(false);
    }

    setPagedMovies(newPagedMovies);
  }, [pagedMovies, movies, width]);

  const resizeHandler = useCallback(() => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setWidth(getCurrentWidth());
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (!movies) return;

    const initialCount = getInitialCountByWidth(width);
    const tmp = movies.slice(0, initialCount);
    setPagedMovies(tmp);

    if (initialCount < movies.length) {
      setHasMore(true);
    }
  }, [movies, width]);

  return {
    pagedMovies,
    hasMore,
    addMore,
  };
}
