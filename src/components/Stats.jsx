import React, { useState } from 'react';
import './Stats.css';

const tabData = [
  {
    tabTitle: 'Client Journey',
    tabDescription: 'The client journey on ICP Work is a seamless, secure process.',
    contentParagraph: 'Clients begin by registering through Internet Identity, creating a secure and anonymous profile which can be enriched with company information, payment preferences, and project history. They then post their project requirements, detailing skills needed, budget, and deadlines, which are processed and listed via the Project Management Canister. Once freelancers submit bids, clients evaluate proposals by reviewing profiles, portfolios, and reputation scores, and can communicate directly using the Messaging System Canister. After selecting a freelancer, a smart contract is automatically created, and the client deposits funds into the Payment Escrow Canister. Upon completion and review of the deliverables, clients approve the work, triggering the release of funds from escrow. If disputes arise, clients can initiate resolution through the decentralized governance mechanism. Finally, feedback is provided, contributing to the freelancer’s on-chain reputation score.'
  },
  {
    tabTitle: 'Freelancer Journey',
    tabDescription: 'Showcase, collaborate, and earn — the decentralized way',
    contentParagraph: 'Freelancers begin by registering with Internet Identity and creating detailed profiles that highlight their skills, experience, portfolio, and preferred rates. They can then explore available projects, filtering opportunities based on relevant criteria like skills, budget, and deadlines, and submit proposals through the Project Management Canister. Communication and negotiation with clients take place via the secure Messaging System Canister, allowing freelancers to clarify requirements and finalize terms. Once a contract is agreed upon, freelancers carry out the work and submit deliverables through the platform. Upon client approval, payments are automatically released from the Payment Escrow Canister to the freelancer’s wallet. In cases of disputes, freelancers can engage in a decentralized resolution process. Finally, they receive client feedback, which contributes to their permanent on-chain reputation.'
  },
  {
    tabTitle: 'Core Features and Benefits',
    tabDescription: 'Power-packed tools. Real ownership. Seamless work',
    contentParagraph: 'ICP Work offers a comprehensive suite of features designed to enhance the freelancing experience for all participants, built on the robust foundation of the Internet Computer Protocol. These features provide both technical advantages for developers and tangible business benefits for clients and freelancers.'
  },
  {
    tabTitle: 'Key Platform Features',
    tabDescription: 'Built for speed, trust, and true decentralization',
    contentParagraph: 'Users on ICP Work retain full control over their decentralized profiles and portfolios, which are securely stored on-chain and accessible globally—eliminating the risk of censorship or data loss tied to centralized platforms. Smart contract-powered escrow ensures secure, timely, and trustless payments by automatically releasing funds upon verified project completion and client approval. A transparent, immutable on-chain reputation system builds trust by recording every completed project and review, fostering a merit-based environment. Seamless communication and collaboration are enabled through end-to-end encrypted messaging and file sharing, all stored on-chain for auditability and security. Disputes are handled by a community-governed DAO, offering a fair and transparent resolution process that replaces centralized decision-making. To enhance accessibility, ICP Work supports a variety of cryptocurrencies and aims to integrate traditional payment systems in the future, enabling smooth global transactions. Looking ahead, AI-powered matching algorithms will be introduced to intelligently connect clients with the most suitable freelancers, improving project outcomes and overall platform efficiency.'
  },
  {
    tabTitle: 'Technical Advantages of ICP:',
    tabDescription: 'Decentralized backend meets real-time performance',
    contentParagraph: 'The Internet Computer Protocol (ICP) offers foundational technical advantages that power the design and efficiency of ICP Work, making it a next-generation decentralized platform. Its infinite scalability, enabled by subnet architecture and chain-key cryptography, allows the network to grow seamlessly with increased demand—supporting massive user activity without compromising performance. With web-speed performance, ICP finalizes transactions in just 1–2 seconds, ensuring real-time responsiveness essential for platforms that require smooth communication and rapid processing. The reverse gas model shifts transaction costs from users to developers, enabling a gas-free experience that lowers entry barriers and improves usability. ICP’s canisters can directly serve web content, allowing the entire ICP Work application—from backend logic to frontend interface—to run on-chain without reliance on centralized cloud providers. Chain-key cryptography further enhances interoperability, paving the way for future multi-chain support and asset transfers. Additionally, orthogonal persistence simplifies development by automatically saving canister states, allowing developers to focus on building features instead of managing databases—streamlining development and boosting reliability.'
  }
];

const Stats = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="stats-section" className="stats-section relative">
      {/* Removed the div with className="stats-glow" which was causing the bright top */}
      {/* <div className="stats-glow"></div> */}

      <div className="stats-container relative z-20">

        <h2 className="stats-heading">
          How ICP Work Functions
        </h2>
        <p className="stats-subheading">
          ICP Work is designed for intuitive user experience, mirroring the familiarity of traditional web platforms while delivering the unparalleled benefits of decentralization. Our streamlined workflows ensure that both clients and freelancers can navigate the platform with ease, from project initiation to successful completion and payment. The process is transparent, with each step recorded on-chain to ensure accountability and trust.
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <p className="stat-number">$2.5M+</p>
            <p className="stat-label">Total Value Locked</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">10K+</p>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">5K</p>
            <p className="stat-label">Active Freelancers</p>
          </div>
        </div>

        <div className="tab-section">
          <div className="tab-navigation">
            {tabData.map((tab, index) => (
              <button
                key={tab.tabTitle}
                onMouseEnter={() => setActiveTab(index)}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
              >
                <p className="tab-title">{tab.tabTitle}</p>
                <p className="tab-description">{tab.tabDescription}</p>
              </button>
            ))}
          </div>

          <div className="tab-content">
            <p className="tab-content-text text-slate-200 leading-relaxed text-lg">
              {tabData[activeTab]?.contentParagraph}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;