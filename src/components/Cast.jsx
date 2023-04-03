import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuery } from 'services/fetch';

import defaultImg from '../images/noUser.jpg';

// Інформація про акторський склад
// Рендериться на сторінці MovieDetails.

const Cast = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const { currentMovie } = useParams();
  const URL_QUERY_OPTIONS = `movie/${currentMovie}/credits`;
  const [currentMovieCast, setCurrentMovieCast] = useState([]);
  // console.log('Cast >> currentMovieCast:', currentMovieCast);

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS)
      .then(response => {
        // console.log('getQuery >> response:', response);
        setCurrentMovieCast(response.cast);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [URL_QUERY_OPTIONS]);

  if (status === 'rejected') {
    return <h1>{`Помилка: ${error.message}`}</h1>;
  }

  return (
    <>
      {/* <div>THE CAST</divstyle=> */}

      {currentMovieCast.length !== 0 ? (
        <div className="accordion" id="accordionExample">
          {currentMovieCast.map(actor => {
            return (
              <div key={actor.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseTwo-${actor.id}`}
                      aria-expanded="false"
                      aria-controls={`collapseTwo-${actor.id}`}
                      style={{ fontSize: '1.2rem' }}
                    >
                      {actor.name}
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo-${actor.id}`}
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
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                            : defaultImg
                        }
                        className="card-img-top"
                        alt="..."
                        style={{
                          minWidth: '150px',
                          maxWidth: '150px',
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
                        <h2>
                          <strong>Name: </strong>
                          <p>{actor.original_name}</p>
                        </h2>
                        <h3>
                          <strong>Role: </strong>
                          <p>{actor.character}</p>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        'The cast is unknown :('
      )}
    </>
  );
};

export default Cast;
