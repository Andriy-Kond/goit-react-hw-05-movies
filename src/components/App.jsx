import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';

import SharedLayout from './SharedLayout';
// import MovieDetails from './MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
// import NotFoundPage from './NotFound';

// Асинхронний імпорт:
const NotFoundPage = lazy(() => import('../components/NotFoundPage'));

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));

// ^ Варіант якщо експорт не default
const Reviews = lazy(() =>
  import('../components/Reviews').then(module => {
    // console.log(module);
    return { ...module, default: module.Reviews };
  })
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={NotFoundPage}></Route>
        </Route>
      </Routes>
    </>
  );
};
