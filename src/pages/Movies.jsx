import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getQuery } from 'services/fetch';
import defaultImg from '../images/noPoster.webp';

// Пошук фільмів за ключовим словом
const Movies = () => {
  // Стейти для помилки
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  // Стейт параметрів адресного рядку
  const [searchParams, setSearchParams] = useSearchParams({}); //? Об'єкт чи пустий рядок?

  // Стейт для фільтру Input
  const movieName = searchParams.get('query') ?? ''; // для запису у input.value
  const URL_QUERY_OPTIONS = `search/movie`; // рядок запиту згідно з API
  const [foundMovies, setFoundMovies] = useState([]); // масив знайдених фільмів

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS, searchParams)
      .then(response => {
        // console.log('getQuery >> response:', response);
        // console.log(response.results);
        setFoundMovies(response.results);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [URL_QUERY_OPTIONS, searchParams]);

  // Для кнопки повернення з дочірніх елементів
  const location = useLocation();
  // console.log('Movies >> location:', location);

  // Встановлення в адресний рядок значення з Input.onChange
  const updateInputSearch = ({ target: { value } }) => {
    const searchObj = value === '' ? {} : { query: value };
    setSearchParams(searchObj);
  };

  if (status === 'rejected') {
    return <h2>{`Помилка: ${error.message}`}</h2>;
  }

  return (
    <>
      <h2
        style={{
          marginTop: '20px',
        }}
      >
        It is the Movie Page
      </h2>
      <h3>Here you can search movies</h3>
      <h4
        style={{
          marginBottom: '20px',
        }}
      >
        Start enter movie name below
      </h4>
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
                          <p style={{ margin: 0 }}>{movie.release_date}</p>
                        </h4>

                        <p style={{ marginBottom: '5px' }}>
                          Original language:{' '}
                          <strong>
                            {movie.original_language.toUpperCase()}
                          </strong>
                        </p>

                        <p>
                          <strong>Rating:</strong>
                          <span>Average vote: {movie.vote_average}</span>
                          <span>Total votes: {movie.vote_count}</span>
                        </p>

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
                          See more movie's details
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
    </>
  );
};

export default Movies;
