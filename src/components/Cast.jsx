import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Інформація про акторський склад
const Cast = () => {
  const { movieId } = useParams();

  useEffect(() => {
    //  інформація про акторський склад.
    //  Рендериться на сторінці MovieDetails.
  }, []);

  return (
    <>
      <div>Cast of {movieId}</div>
    </>
  );
};

export default Cast;
