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
    return <h2>{`Помилка: ${error.message}`}</h2>;
  }

  return (
    <>
      <h3>THE CAST</h3>

      {currentMovieCast.length !== 0 ? (
        <div className="accordion" id="accordionExample">
          {currentMovieCast.map(actor => {
            return (
              // Такий key та id в акордеоні довелось робити через те, що трапляються випадки, коли актор у фільмі записаний два рази (помилка у базі бекенду).
              // А ще один актор може зніматись у декількох ролях і тоді його робі йдуть через косі лінії.
              <div
                key={`${actor.id}-${actor.character
                  .toLowerCase()
                  .toLowerCase()
                  .replace(/[^a-zA-Z0-9-_]/g, '')
                  .trim()}`}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${actor.id}-${actor.character
                        .toLowerCase()
                        .replace(/[^a-zA-Z0-9-_]/g, '') // видаляє всі заборонені в селекторах символи
                        .trim()}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${actor.id}-${actor.character
                        .toLowerCase()
                        .replace(/[^a-zA-Z0-9-_]/g, '')
                        .trim()}`}
                      style={{ fontSize: '1.2rem' }}
                    >
                      {actor.name}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${actor.id}-${actor.character
                      .toLowerCase()
                      .replace(/[^a-zA-Z0-9-_]/g, '')
                      .trim()}`}
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
