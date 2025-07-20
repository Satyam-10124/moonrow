import React from 'react';
import './Ready.css';

const Ready = () => {
  return (
    <div className="bg-transparent font-sans py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {/* --- BACKGROUND CHANGED HERE --- */}
        {/* Removed the inline style with the gradient and added the solid background color class */}
        <div 
          className="rounded-2xl p-8 md:p-12 text-center text-white bg-[#070714]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Future of Work?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 mb-8">
            Join the decentralized revolution with ICP Work. Whether you're a Web3 developer, enterprise, or freelancer, ICP Work is your gateway to a more equitable, efficient, and transparent work ecosystem.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <button className="glow-button font-semibold text-white rounded-full px-6 py-3 flex items-center gap-2">
              <span role="img" aria-label="link">🔗</span>
              Join ICP Work Today
            </button>
            <button className="glow-button font-semibold text-white rounded-full px-6 py-3 flex items-center gap-2">
              <span className="font-mono text-lg">&lt;/&gt;</span>
              Start Building
            </button>
            <button className="glow-button font-semibold text-white rounded-full px-6 py-3 flex items-center gap-2">
              <span role="img" aria-label="email">✉️</span>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;