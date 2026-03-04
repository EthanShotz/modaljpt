import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import MarketsPage from '@/pages/MarketsPage';
import AboutPage from '@/pages/AboutPage';
import TrackingPage from '@/pages/TrackingPage';
import ContactPage from '@/pages/ContactPage';
import QuotePage from '@/pages/QuotePage';
import LoginPage from '@/pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="markets" element={<MarketsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
