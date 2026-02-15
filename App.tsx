import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Portfolio from './components/Portfolio';
import Plan from './components/Plan';
import Contact from './components/Contact';
import ProjectInitiation from './components/ProjectInitiation';
import Footer from './components/Footer';
import PlansPage from './components/PlansPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import Meeting from './components/Meeting';
import CaseStudiesHome from './components/pages/Home';
import ArticleDetail from './components/pages/ArticleDetail';
import Reviews from './components/Reviews';
import { Tracker } from './components/Tracker';
import { Service } from './types';
import CookieConsent from './components/CookieConsent';
import { executeTrackingScripts } from './lib/consent';

// ScrollToTop component to ensure navigation resets scroll position
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Component to handle scrolling to a hash on the page
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure page content is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC<{
  onSelectService: (service: Service) => void
}> = ({ onSelectService }) => (
  <>
    <Header />
    <main>
      <Hero />
      <Services onSelectService={onSelectService} />
      <Brand />
      <Portfolio />
      <Reviews />
      <Plan />
      <Contact />
    </main>
    <Footer />
  </>
);

const CaseStudiesPageWrapper: React.FC = () => (
  <>
    <Header />
    <CaseStudiesHome />
    <Footer />
  </>
);

const ArticleDetailPageWrapper: React.FC = () => (
  <>
    <Header />
    <ArticleDetail />
    <Footer />
  </>
);

const App: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    console.log("YodaDayo Portfolio Loaded");
    executeTrackingScripts(); // Attempt to load trackers if already granted
    if (activeService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Tracker />
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={
            <HomePage
              onSelectService={setActiveService}
            />
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/start" element={<ProjectInitiation />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/case-studies" element={<CaseStudiesPageWrapper />} />
          <Route path="/case-studies/:slug" element={<ArticleDetailPageWrapper />} />
        </Routes>

        {/* Service Detail View */}
        <AnimatePresence>
          {activeService && (
            <ServiceDetail
              service={activeService}
              onClose={() => setActiveService(null)}
            />
          )}
        </AnimatePresence>

        <CookieConsent />

        {/* Global Grain Overlay for Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </BrowserRouter>
  );
};

export default App;
