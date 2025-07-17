import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url('/moonrow.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="layout-container flex flex-col flex-grow bg-transparent relative z-10">
        <Helmet>
          <title>Alvis Agro Chem | Organic Fertilizers & Plant Growth Boosters</title>
          <meta name="description" content="Alvis Agro Chem is a leading manufacturer of organic fertilizers and soil conditioners based in Lucknow. Discover Protax, Wonder Combi, Black Diamond & more." />
          <link rel="canonical" href="https://www.alvisagrochem.com/" />
          
          <meta property="og:title" content="Alvis Agro Chem" />
          <meta property="og:description" content="Explore innovative organic solutions like Gel Black Diamond, Protax, Sparkle & more." />
          <meta property="og:image" content="https://www.alvisagrochem.com/cover.jpg" />
          <meta property="og:url" content="https://www.alvisagrochem.com/" />
          <meta property="og:type" content="website" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <Header />
      </div>
    </div>
  );
}

export default App;
