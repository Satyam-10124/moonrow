import React from 'react';

const HeroSection = ({ bgImage }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Black overlay fading from full black at top to transparent at bottom */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 100%)',
        }}
      ></div>

      <div className="relative z-10 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Welcome to{' '}
          <span className="text-green-300">Alvis Agro Chem</span>
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Reviving & Strengthening Organic Agriculture
        </p>
        {/* Add call-to-action buttons or other content here */}
      </div>
    </section>
  );
};

export default HeroSection;
