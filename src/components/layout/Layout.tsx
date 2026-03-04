import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-[6.5rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
