import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getQuery } from 'services/fetch';
import defaultImg from '../images/noPoster.webp';

// Сторінка з детальною інформацією про фільм
const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const { currentMovie } = useParams(); // забираю з адресного рядку ID фільму

  const location = useLocation();
  // console.log('MovieDetails >> location:', location);
  const backLinkLocationRef = useRef(location.state ?? '/movies');
  // console.log('MovieDetails >> backLinkLocationRef:', backLinkLocationRef);
  const URL_QUERY_OPTIONS = `movie/${currentMovie}`;
  const [currentMovieResp, setCurrentMovieResp] = useState({});

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS)
      .then(response => {
        // console.log(response);
        setCurrentMovieResp(response);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [URL_QUERY_OPTIONS]);

  if (status === 'rejected') {
    return (
      <>
        <h1>{`Помилка: ${error.message}`}</h1>
        <Link to={backLinkLocationRef.current}>
          <p>Повернутись назад</p>
        </Link>
      </>
    );
  }

  // Щоб не блимало спочатку заглушка-зображення роблю перевірку чи є об'єкт пустий
  return (
    <>
      {Object.keys(currentMovieResp).length !== 0 && (
        <div>
          <h1>Movie Details of "{currentMovieResp.original_title}"</h1>
          <Link to={backLinkLocationRef.current}>
            <p>Повернутись назад</p>
          </Link>

          <div className="card" style={{ width: '18rem' }}>
            <img
              src={
                currentMovieResp.poster_path
                  ? `https://image.tmdb.org/t/p/w500${currentMovieResp.poster_path}`
                  : defaultImg
              }
              className="card-img-top"
              alt="..."
              style={{
                height: '100%',
                width: '100%',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{currentMovieResp.original_title}</h5>
              <p className="card-text">{currentMovieResp.overview}</p>
              <Link
                to={currentMovieResp.homepage ? currentMovieResp.homepage : '*'}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to movie page
              </Link>
            </div>
          </div>

          <ul>
            <li>
              <Link to="cast">to Cast the movie</Link>
            </li>
            <li>
              <Link to="reviews">to Review the movie</Link>
            </li>
          </ul>
        </div>
      )}
      <Suspense
        fallback={
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
