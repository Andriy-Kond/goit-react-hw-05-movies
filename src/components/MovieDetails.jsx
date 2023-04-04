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
    console.log(error.message);
    return (
      <>
        <h2>{`Помилка: ${error.message}`}</h2>
        <Link to={backLinkLocationRef.current}>
          <p>Повернутись назад</p>
        </Link>
      </>
    );
  }
  const {
    original_title,
    poster_path,
    overview,
    release_date,
    production_countries,
    original_language,
    runtime,
    vote_average,
    vote_count,
    homepage,
  } = currentMovieResp;
  // Щоб не блимало спочатку заглушка-зображення роблю перевірку чи є об'єкт пустий
  return (
    <>
      {Object.keys(currentMovieResp).length !== 0 && (
        <div>
          <h1>Details of "{original_title}" movie</h1>
          <Link to={backLinkLocationRef.current}>
            <p>Повернутись назад</p>
          </Link>

          <div className="card" style={{ width: '28rem' }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
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
              <h5 className="card-title">{original_title}</h5>
              <p>{overview ? overview : 'No review'}</p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h4>
                  <strong>Release date:</strong>
                  <p style={{ margin: 0 }}>{release_date}</p>
                </h4>

                <p style={{ marginBottom: '5px' }}>
                  Original country:{' '}
                  <strong>
                    {production_countries[0].iso_3166_1.toUpperCase()}
                  </strong>
                </p>

                <p style={{ marginBottom: '5px' }}>
                  Original language:{' '}
                  <strong>{original_language.toUpperCase()}</strong>
                </p>
                <p style={{ marginBottom: '5px' }}>
                  Runtime: <strong>{runtime}min</strong>
                </p>
                <p>
                  <strong>Rating:</strong> <br />
                  <span>
                    Average vote: <strong>{vote_average}</strong>
                  </span>
                  <br />
                  <span>
                    Total votes: <strong>{vote_count}</strong>
                  </span>
                </p>
              </div>

              <Link
                to={homepage ? homepage : '*'}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Go to the movie page
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