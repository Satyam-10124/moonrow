// src/components/HeroSection.jsx
import React from 'react';
import './HeroButton.css'; // Import the new CSS file here

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-6 lg:px-8 overflow-hidden mb-20"
    >
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Small Label */}
        <div className="inline-block mb-12 animate-fade-in">
          <span className="text-sm font-medium text-moonflow-text-secondary bg-moonflow-purple/20 px-5 py-2.5 rounded-full border border-moonflow-purple/40">
            AI-Powered Automation
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-moonflow-text leading-[0.9] mb-10 animate-slide-up tracking-tight">
          Efficient Automation
          <br />
          <span className="gradient-text">Made Easy.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          Transform your workflow with MoonRow intelligent AI chatbots. Automate
          interactions, improve efficiency, and deliver exceptional support effortlessly.
        </p>

        {/* CTA Button with animated gradient border */}
        <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="glow-button-wrapper">
            <button className="inner-button">
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-moonflow-purple rounded-full opacity-60 animate-pulse" />
      <div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-moonflow-green-cyan rounded-full opacity-40 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-moonflow-pink rounded-full opacity-50 animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </section>
  );
};

export default HeroSection;