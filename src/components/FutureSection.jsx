import React, { useState } from 'react';
import { MessageSquare, Users, Bell, Zap, Settings, Database } from 'lucide-react';
import toolImage from '../assets/tool.png'; // Keep this import

const FutureSection = () => {
  const [expandedCards, setExpandedCards] = useState(['collaboration-tools']);

  const toggleExpand = (cardId) => {
    setExpandedCards((prevExpandedCards) => {
      if (cardId === 'collaboration-tools') {
        return prevExpandedCards.includes(cardId) ? prevExpandedCards : [...prevExpandedCards, cardId];
      } else {
        if (prevExpandedCards.includes(cardId)) {
          return prevExpandedCards.filter((id) => id !== cardId);
        } else {
          return [...prevExpandedCards, cardId];
        }
      }
    });
  };

  const solutionText = {
    'ai-chat-bots': `
      * Trustless Escrow for Payments
      * Immutable On-chain Reputation
      * DAO-based Governance
      * Transparent Low Fees (0–5%)
      * User Data Ownership & Sovereignty
    `,
    'automated-notifications': `
      * Trustless Escrow with Smart Contracts
      * On-chain Immutable Reputation
      * DAO-led Fair Dispute Handling
      * Transparent, Minimal Fees
      * True Data Portability
    `,
    'high-performance-solutions': `
      * Secure On-chain Payment Holding
      * Decentralized Reputation Ledger
      * Community-driven Governance
      * Reduced Transaction Costs
      * User-controlled Data Models
    `,
    'global-customisation': `
      * Smart Contract-based Escrow System
      * Tamper-proof On-chain Reviews
      * Decentralized Platform Decisions
      * Transparent 0–5% Fees
      * Full Data Portability & Ownership
    `,
    'data-integration': `
      * Blockchain-powered Escrow Engine
      * Transparent Reputation History
      * DAO Dispute Mediation
      * Minimal Platform Fees
      * Sovereign Identity System
    `,
    'collaboration-tools': `
      The freelance world is ready for a new foundation built on trust, ownership, and autonomy.
    `, // Simplified text for collaboration-tools
  };

  const renderCard = (id, IconComponent, title, description, isCollaborationCard = false) => {
    const isExpanded = expandedCards.includes(id);
    const isTopRowCard = ['ai-chat-bots', 'collaboration-tools', 'automated-notifications'].includes(id);
    const collapsedHeight = isCollaborationCard ? 'max-h-[220px]' : 'max-h-[200px]';
    const expandedHeight = isCollaborationCard ? 'max-h-[2000px]' : 'max-h-[1000px]';

    const showImage = id === 'collaboration-tools';

    return (
      <div
        key={id}
        className={`bg-[#070714] rounded-xl ${isCollaborationCard ? 'p-4 pb-12' : 'p-3 pb-10'} border border-[#2F3440] flex flex-col items-center text-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] cursor-pointer overflow-hidden ${isExpanded ? expandedHeight : collapsedHeight}`}
        onClick={() => toggleExpand(id)}
        style={id === 'collaboration-tools' ? {
          backgroundImage: 'url(/tools_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          zIndex: 1,
        } : {}}
      >
        {id === 'collaboration-tools' && (
          <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-xl"></div>
        )}
        <div className="p-3 rounded-xl bg-white/10 mb-4 flex items-center justify-center z-10">
          <IconComponent size={24} className="text-cyan-300 hover:text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 z-10">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 z-10">{description}</p>

        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'} ${isTopRowCard ? (isExpanded ? 'translate-y-0' : 'translate-y-full') : ''} z-10`}>
          {showImage && (
            <img
              src={toolImage}
              alt={`${title} Tool`}
              className="mt-4 mb-4 rounded-lg max-w-full h-auto"
            />
          )}
          {isExpanded && id !== 'collaboration-tools' && (
            <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
          )}
          <div className="flex flex-wrap gap-2 text-xs font-medium justify-center whitespace-pre-wrap text-gray-400">
            {id === 'collaboration-tools' ? (
              <span className="block px-3 py-1 text-center">{solutionText[id].trim()}</span>
            ) : (
              <div className="text-center w-full">
                {solutionText[id] && solutionText[id].split('\n').map((line, idx) => (
                  <span key={idx} className="block px-3 py-1" dangerouslySetInnerHTML={{ __html: line.trim() }}>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="future-section-id" className="relative py-20 px-4 lg:px-6 text-white text-center overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium bg-[#1A2536] text-gray-400 border border-[#2F3440]">
          Function
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Problems and Solutions
        </h2>

        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
          ICP Work redefines freelancing by eliminating intermediaries and empowering users with immutable reputations, trustless escrow, and full data ownership—on-chain and censorship-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end mb-8">
          {renderCard(
            'ai-chat-bots',
            MessageSquare,
            'Problem: Freelance Centralization',
            'High fees, platform control, vendor lock-in, and poor dispute handling.'
          )}
          {renderCard(
            'collaboration-tools',
            Users,
            'The Shift Towards Decentralized Work',
            "Web3 is not a trend — it's a transformation.",
            true
          )}
          {renderCard(
            'automated-notifications',
            Bell,
            'Problem: Payment Friction & Trust Issues',
            'Delays, centralized payment risks, and opaque policies create friction.'
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {renderCard(
            'high-performance-solutions',
            Zap,
            'Problem: Limited Transparency & Control',
            'Central authority over data, reputation, and resolution erodes trust.'
          )}
          {renderCard(
            'global-customisation',
            Settings,
            'Problem: Vendor Lock-in & High Costs',
            'Users lose autonomy with rigid rules, locked data, and high fees.'
          )}
          {renderCard(
            'data-integration',
            Database,
            'Problem: Centralized Reputation & Data',
            'Reputation is non-portable and data remains under platform control.'
          )}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;