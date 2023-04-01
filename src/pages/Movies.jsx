import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

// Пошук фільмів за ключовим словом
const Movies = () => {
  // з бекенду:
  const moviesAPI = [
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
    'movie-6',
  ];

  // Стейт для фільтру Input
  const [movies, setmovies] = useState(moviesAPI);

  // Стейт параметрів адресного рядку
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? ''; // для запису у input.value

  // СТЕЙТ З ПЕРЕЛІКОМ ФІЛЬМІВ

  // Форма пошуку по слову
  useEffect(() => {
    // фільтр пошуку
    // ПОВЕРТАЮ СТЕЙТ
  }, []);

  // Рендер знайдених фільмів
  // РЕНДЕР СТЕЙТУ!

  // Для кнопки повернення з дочірніх елементів
  const location = useLocation();
  const moviesList = useRef();

  const moviesFilter = movies.filter(movie => movie.includes(movieId));

  // Встановлення в адресний рядок значення з Input.onChange
  const updateInput = ({ target: { value } }) => {
    const searchParamsObj = value === '' ? {} : { movieId: value };
    setSearchParams(searchParamsObj);
  };

  return (
    <>
      <input type="text" onChange={updateInput} value={movieId} />
      <h2>Movies</h2>
      <ul>
        {moviesFilter.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
