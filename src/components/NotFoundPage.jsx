import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>Такої сторінки не знайдено</h2>
      <Link to="/">На головну</Link>
    </>
  );
};

export default NotFoundPage;
