import { useEffect, useState } from 'react';
import { getQuery } from 'services/fetch';

import defaultImg from '../images/noUser.jpg';
// console.log('defaultImg:', defaultImg);

const { useParams, Link } = require('react-router-dom');

// Для приймання динамич. параметрів використовуємо useParams

// інформація про огляди
// Рендериться на сторінці MovieDetails.
const Reviews = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const { currentMovie } = useParams();
  const URL_QUERY_OPTIONS = `movie/${currentMovie}/reviews`;
  const [currentMovieReviews, setCurrentMovieReviews] = useState([]);
  // console.log('Reviews >> currentMovieReviews:', currentMovieReviews);

  useEffect(() => {
    getQuery(URL_QUERY_OPTIONS)
      .then(response => {
        // console.log('getQuery >> response:', response);
        setCurrentMovieReviews(response.results);
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
      {/* <div>THE REVIEWS</div> */}

      {currentMovieReviews.length !== 0 ? (
        <div className="accordion" id="accordionExample">
          {currentMovieReviews.map(review => {
            let currentSrc = review.author_details.avatar_path;
            // console.log('currentSrc 1:', currentSrc);

            if (currentSrc) {
              if (currentSrc.includes('www')) {
                currentSrc = currentSrc
                  .replace('/https://www.', 'https://')
                  .trim();
              } else {
                currentSrc = `https://image.tmdb.org/t/p/w500/${currentSrc}`;
              }
            } else {
              currentSrc = defaultImg;
              // currentSrc = 'images/noUser.jpg'; // ??? чомусь не завантажується такий шлях
            }

            // console.log('currentSrc 2:', currentSrc);

            return (
              <div key={review.id}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseTwo-${review.id}`}
                      aria-expanded="false"
                      aria-controls={`collapseTwo-${review.id}`}
                      style={{ fontSize: '1.2rem' }}
                    >
                      Review from: &nbsp;
                      <strong> {`${review.author}`} </strong>
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo-${review.id}`}
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
                        src={currentSrc}
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
                        <h4>
                          <strong>Name: </strong>
                          <p>{review.author_details.username}</p>
                        </h4>
                        <h5>
                          <strong>Message: </strong>
                          <p
                            style={{ fontSize: '1rem' }}
                          >{`${review.content.slice(0, 300)}...`}</p>
                        </h5>

                        <Link to={`${review.url}`} className="btn btn-primary">
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
      ) : (
        'No any review yet'
      )}
    </>
  );
};

export default Reviews;
