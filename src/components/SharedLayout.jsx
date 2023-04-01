import { Link, NavLink, Outlet } from 'react-router-dom';
import { Container } from './Container';
import { Header } from './Header';
import { Logo } from './Logo';

import styled from 'styled-components';
import Footer from './Footer';
import { Suspense } from 'react';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          <h1>All Movies</h1>
        </Logo>

        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </ul>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </Container>
  );
};

export default SharedLayout;
