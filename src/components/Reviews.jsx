import { useEffect } from 'react';
const { useParams } = require('react-router-dom');

// Для приймання динамич. параметрів використовуємо useParams

// інформація про огляди
// ^ Варіант якщо експорт не default
export const Reviews = () => {
  const { movieId } = useParams();
  useEffect(() => {
    // інформація про огляди.
    // Рендериться на сторінці MovieDetails.
  }, []);

  return (
    <>
      <div>Reviews of {movieId}</div>
    </>
  );
};

// export default Reviews;
