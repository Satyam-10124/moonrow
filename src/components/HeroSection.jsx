// src/components/HeroSection.jsx
import React from 'react';
import './HeroButton.css';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <section
        id="hero"
        className="relative w-full h-full flex flex-col justify-center items-center text-white px-6 lg:px-8"
      >
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <div className="inline-block mb-10">
            <span className="text-sm font-medium text-moonflow-text-secondary bg-moonflow-purple/20 px-5 py-2.5 rounded-full border border-moonflow-purple/40">
               Decentralized Freelancing
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-moonflow-text leading-[0.9] mb-8 tracking-tight">
            The Future of Work is Decentralized.
            <br />
            <span className="gradient-text"> Welcome to ICP Work.</span>
          </h1>

          <p className="text-s md:text-m text-gray-400 max-w-3xl mx-auto mb-12">
            Transform your workflow with MoonRow intelligent AI chatbots. Automate
            interactions, improve efficiency, and deliver exceptional support effortlessly.
          </p>

          <div>
            <div className="glow-button-wrapper">
              <button className="inner-button">
                <span className="relative z-10">Join ICP Work</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-moonflow-purple rounded-full opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-moonflow-green-cyan rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-moonflow-pink rounded-full opacity-50" />
      </section>
    </div>
  );
};

export default HeroSection;
