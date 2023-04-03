import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2>
        Ой, а за цією адресою нічого нема. Як би дивно це не виглядало...
        {` ¯\\_(ツ)_/¯ `}
      </h2>
      <Link to="/">На головну</Link>
    </>
  );
};

export default NotFoundPage;
