import { Routes, Route, NavLink } from 'react-router-dom';
import { About } from 'Tests/pages/About/About';
import { Home } from 'Tests/pages/Home';
import { NotFound } from 'Tests/pages/NotFound';
import { Products } from 'Tests/pages/Products';
// import styled from 'styled-components';
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

// <NavLink> на відміну від <Link> може мати додаткові стилі, якщо поточний URL збігається зі значенням пропcа to (за замовчуванням елементу активного посилання додається клас active). <NavLink> і <Link> рендерять <a>, але змінюють його поведінку.
// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

// export const App = () => {
//   return (
//     <Container>
//       {/* <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>
//           GoMerch Store
//         </Logo>

//         <nav>
//             <StyledLink to="/" end>
//               Home
//             </StyledLink>
//             <StyledLink to="/about">About</StyledLink>
//             <StyledLink to="/products">Products</StyledLink>
//           </nav>
//       </Header> */}

//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route index element={<Home />} />

//           {/* Якщо поточний URL в адресному рядку браузера збігається зі значенням пропсу path вкладеного маршруту, <Outlet> відрендерить його компонент, інакше він рендерить null та не впливає на розмітку батьківського компонента. */}
//           <Route path="about" element={<About />}>
//             <Route path="mission" element={<Mission />} />
//             <Route path="team" element={<Team />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:productId" element={<ProductDetails />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>

//         <Route path="/admin" element={<AdminLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="sales" element={<Sales />} />
//           <Route path="customers" element={<Customers />} />
//         </Route>
//       </Routes>
//     </Container>
//   );
// };

export const App = () => {
  return (
    <div>
      <nav>
        <li></li>
      </nav>
      <Routes></Routes>
    </div>
  );
};
