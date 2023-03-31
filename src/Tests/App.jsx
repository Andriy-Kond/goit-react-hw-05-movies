import { Routes, Route, NavLink } from 'react-router-dom';
import { About } from 'Tests/pages/About/About';
import { Home } from 'Tests/pages/Home';
import { NotFound } from 'Tests/pages/NotFound';
import { Products } from 'Tests/pages/Products';
import styled from 'styled-components';
import { ProductDetails } from 'Tests/pages/ProductDetails';
import { Mission } from 'Tests/pages/About/Mission';
import { Team } from 'Tests/pages/About/Team';
import { Reviews } from 'Tests/pages/About/Reviews';
import { Container } from 'Tests/pages/Container';
import { Header } from 'Tests/pages/Header';
import { Logo } from 'Tests/pages/Logo';
import { SharedLayout } from './SharedLayout';
import { AdminLayout } from 'Tests/pages/AdminLayout';
import { Dashboard } from 'Tests/pages/Dashboard';
import { Sales } from 'Tests/pages/Sales';
import { Customers } from 'Tests/pages/Customers';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/"> Домашня сторінка NavLink</NavLink>
        </li>
        <li>
          <NavLink to="/dogs"> На dogs NavLink</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Домашня div</div>}></Route>
        <Route path="/dogs" element={<div> На колекцію dogs div</div>}></Route>

        <Route
          path="/dogs/:dogId"
          element={<div> Елемент колекції dogs div</div>}
        ></Route>
      </Routes>
    </div>
  );
};

// У роутах /dogs і /dogs/:dogId буде рендиритись щось одне (АБО) - те, що більше схоже. За запитом /dogs/1 буде рендиритись /dogs/:dogId
