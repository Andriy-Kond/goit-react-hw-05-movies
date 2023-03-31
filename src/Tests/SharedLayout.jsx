import { Container } from 'Tests/pages/Container';
import { Header } from 'Tests/pages/Header';
import { Logo } from 'Tests/pages/Logo';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
