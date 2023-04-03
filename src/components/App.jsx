import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import Home from '../pages/Home';
const NotFoundPage = lazy(() => import('../components/NotFoundPage'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:currentMovie" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};
