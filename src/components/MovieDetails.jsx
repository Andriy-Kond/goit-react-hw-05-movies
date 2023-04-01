import { Suspense, useRef } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// Сторінка з детальною інформацією про фільм
const MovieDetails = () => {
  // Стейт
  const { movieId } = useParams();

  const newLocation = useLocation();
  const backLinkLocation = useRef(newLocation.state?.from ?? '/movies');

  useEffect(() => {
    // Запит на детальну інформацію по вибраному фільму
    // запис у стейт
    // is Loading
    // error
  }, []);

  // Рендер стейту згідно розмітки
  return (
    <>
      <div>
        <h1>Movie Details of {movieId}</h1>
        {/* <Link to={(newLocation.state && newLocation.state.from) || '/movies'}> */}
        {/* Або такий запис: */}
        <Link to={backLinkLocation.current}>
          <p>Повернутись до списку фільмів</p>
        </Link>

        <ul>
          <li>
            <Link to="cast">to Cast the movie</Link>
          </li>
          <li>
            <Link to="reviews">to Review the movie</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
