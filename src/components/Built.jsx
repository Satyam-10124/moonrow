import React from 'react';
import './Built.css'; // Import the stylesheet
import builtImage from '../assets/built-image.png'; // 👈 UPDATE THIS PATH TO YOUR IMAGE

// Data for the feature sections to keep the code clean
const featuresData = [
  {
    title: 'Infinite Scalability',
    description: 'ICP enables smart contracts to scale without bounds, handling vast amounts of data and computation directly on-chain.',
  },
  {
    title: 'Chain-Key Cryptography',
    description: 'A breakthrough in cryptography that allows ICP to have a single public key, enabling seamless integrations and enhanced security.',
  },
  {
    title: 'Direct Web Serving',
    description: 'Smart contracts can serve web experiences directly to users, eliminating the need for traditional, centralized cloud services.',
  },
];

const Built = () => {
  return (
    <section className="built-section">
      <div className="built-container">
        {/* Left Column: Text Content */}
        <div className="built-content-left">
          <h2 className="built-title">Built on the Internet Computer</h2>
          <p className="built-subtitle">
            Leveraging the full potential of a decentralized public network that provides a limitless environment for Web3 dApps.
          </p>
          <div className="built-features">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="built-content-right">
          <img src={builtImage} alt="Internet Computer Architecture" className="built-image" />
        </div>
      </div>
    </section>
  );
};

export default Built;