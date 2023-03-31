import { Link, Outlet } from 'react-router-dom';

export const About = () => {
  // to="mission" буде вести на /about/mission
  // Якщо необхідно зробити посилання на іншу сторінку, тоді треба вказувати шлях повністю, наприклад to="/products".
  return (
    <div>
      <h1>About page</h1>
      <ul>
        <li>
          <Link to="mission">Read about our mission</Link>
        </li>
        <li>
          <Link to="team">Get to know the team</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
