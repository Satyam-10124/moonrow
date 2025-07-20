import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIOfferingsSection from './components/Offering';
import FutureSection from './components/FutureSection';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Stats from './components/Stats';
import FaqFloater from './components/FaqFloater';
import FaqPage from './components/FaqPage';
import Dashboard from './components/Dashboard';
import Built from './components/Built';      // ✅ Imported from second version
import Ready from './components/Ready';      // ✅ Imported from second version

const MainPage = () => (
  <>
    {/* 🟦 Background for Header + HeroSection */}
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/MoonRow.jpeg')`,    // ✅ Fixed syntax
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>
      <Header />
      <HeroSection />
    </div>

    {/* 🔴 Other Sections */}
    <div className="bg-[#070714] bg-grain relative z-10">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* 🔵 Offering + Future in custom background */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('/off_bg.png')`,      // ✅ Fixed syntax
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Dashboard />
        <AIOfferingsSection />
        <FutureSection />
      </div>

      <Stats />
      <Built />           {/* ✅ Added from version 2 */}
      <Feedback />
      <Ready />           {/* ✅ Added from version 2 */}
      <Footer />
    </div>

    {/* 🟡 Floating FAQ Button */}
    <FaqFloater />
  </>
);

function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (page) {
      case '/faq':
        return <FaqPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {renderPage()}
    </div>
  );
}

export default App;
