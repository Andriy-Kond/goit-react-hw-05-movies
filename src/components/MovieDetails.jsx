import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>
        <p>Details</p>
        <ul>
          <li>
            <Link to="cast">to Cast the movie</Link>
          </li>
          <li>
            <Link to="reviews">to Review the movie</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
