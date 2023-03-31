import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Cast from './Cast';
import MovieDetails from './MovieDetails';
import Reviews from './Reviews';
import SharedLayout from './SharedLayout';
import NotFound from './NotFound';

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

          <Route path="*" element={NotFound}></Route>
        </Route>
      </Routes>
    </>
  );
};

// У роутах /dogs і /dogs/:dogId буде рендиритись щось одне (АБО) - те, що більше схоже. За запитом /dogs/1 буде рендиритись /dogs/:dogId

// Кінопошук
// Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю робочого застосунку дивись за посиланням.

// themoviedb.org API
// Для бекенду використовуй themoviedb.org API. Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть використовуватися наступні ендпоінти.

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// Посилання на документацію

// Маршрути
// У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
// Code Splitting (поділ коду)
// Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.
