import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIOfferingsSection from './components/Offering';
import FutureSection from './components/FutureSection';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Stats from './components/Stats';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">

      {/* 🟦 Background visible only behind first 3 components */}
      <div className="relative">
        {/* 🔵 Background image only for top section */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/MoonRow.jpeg')`,
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>

        {/* 🔵 Components with background */}
        <Header />
        <HeroSection />
      </div>

      {/* 🔴 Components without background */}
      <div className="bg-[#070714] relative z-10">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <AIOfferingsSection />
        <FutureSection />
        <Stats />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
}

export default App;
