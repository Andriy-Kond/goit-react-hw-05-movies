import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Container';
import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
