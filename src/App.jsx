// App.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIOfferingsSection from './components/Offering'; // Assuming this is your "Optimise Your Business" section
import FutureSection from './components/FutureSection'; // Import the new FutureSection component
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url('/moonrow.png')`,
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="layout-container flex flex-col flex-grow bg-transparent relative z-10">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <Header />
        <HeroSection />
        <AIOfferingsSection />
        <FutureSection /> {/* Added the FutureSection component here */}
         <Feedback />
        <Footer />
      </div>
    </div>
  );
}

export default App;