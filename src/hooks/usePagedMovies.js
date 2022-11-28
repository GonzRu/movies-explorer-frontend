import {
  useCallback, useEffect, useRef, useState,
} from 'react';

function getInitialCountByWidth(width) {
  if (width >= 1280) return 12;
  if (width >= 930) return 9;
  if (width >= 630) return 8;

  return 5;
}

function getAddMoreCountByWidth(width) {
  if (width >= 1280) return 4;
  if (width >= 930) return 3;
  if (width >= 630) return 2;

  return 2;
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
