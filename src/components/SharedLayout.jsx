import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Container';
import { Header } from './Header';
import { Logo } from './Logo';

import styled from 'styled-components';

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
          All Movies
        </Logo>

        <ul>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </ul>

        <Outlet />
      </Header>
    </Container>
  );
};

export default SharedLayout;
