import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getQuery } from 'services/fetch';
import defaultImg from '../images/noPoster.webp';

// Пошук фільмів за ключовим словом
const Movies = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  // Стейт параметрів адресного рядку
  const [searchParams, setSearchParams] = useSearchParams({}); //?Масив чи пустий рядок?
  // Стейт для фільтру Input
  const movieName = searchParams.get('query') ?? ''; // для запису у input.value
  const URL_QUERY_OPTIONS = `search/movie`; // рядок запиту згідно з API
  const [foundMovies, setFoundMovies] = useState([]); // масив знайдених фільмів

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS, searchParams)
      .then(response => {
        console.log('getQuery >> response:', response);
        // console.log(response.results);
        setFoundMovies(response.results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [URL_QUERY_OPTIONS, movieName]);

  // Для кнопки повернення з дочірніх елементів
  const location = useLocation();
  // console.log('Movies >> location:', location);

  // const moviesFilter = movies.filter(movie => movie.includes(movieId));

  // Встановлення в адресний рядок значення з Input.onChange
  const updateInputSearch = ({ target: { value } }) => {
    const searchObj = value === '' ? {} : { query: value };
    setSearchParams(searchObj);
  };

  if (status === 'rejected') {
    return <h1>{`Помилка: ${error.message}`}</h1>;
  }

  return (
    <>
      <h2>Here you can search movies</h2>
      <h4>Start enter movie name below</h4>
      <input type="text" onChange={updateInputSearch} value={movieName} />

      {foundMovies.length !== 0 && (
        <div className="accordion" id="accordionExample">
          {foundMovies.map(movie => {
            return (
              <div key={movie.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseTwo-${movie.id}`}
                      aria-expanded="false"
                      aria-controls={`collapseTwo-${movie.id}`}
                      style={{ fontSize: '1.2rem' }}
                    >
                      Movie title: &nbsp;
                      <strong> {`${movie.title}`} </strong>
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo-${movie.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      className="accordion-body"
                      style={{
                        width: '100%',
                        display: 'flex',
                      }}
                    >
                      <img
                        // src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : defaultImg
                        }
                        className="card-img-top"
                        alt="..."
                        style={{
                          minWidth: '200px',
                          maxWidth: '200px',
                          height: '100%',
                          marginRight: '20px',
                        }}
                      />
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <h4>
                          <strong>Release date:</strong>
                          <p>{movie.release_date}</p>
                        </h4>
                        <h5>
                          <strong>Overview: </strong>
                          <p style={{ fontSize: '1rem' }}>
                            {movie.overview ? movie.overview : 'No review'}
                          </p>
                        </h5>

                        <Link
                          to={`${movie.id}`}
                          className="btn btn-primary"
                          state={location}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* <ul>
        {moviesFilter.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Movies;