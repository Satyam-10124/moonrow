// src/components/FutureSection.jsx
import React, { useState } from 'react';
import { MessageSquare, Users, Bell, Zap, Settings, Database } from 'lucide-react'; // Using Lucide React for icons
import toolImage from '../assets/tool.png'; // Assuming this path is correct in your project

const FutureSection = () => {
  // State to manage which cards are currently expanded (now an array)
  const [expandedCards, setExpandedCards] = useState([]);

  // Function to toggle card expansion
  const toggleExpand = (cardId) => {
    setExpandedCards((prevExpandedCards) => {
      if (prevExpandedCards.includes(cardId)) {
        // If card is already expanded, remove it from the array to collapse
        return prevExpandedCards.filter((id) => id !== cardId);
      } else {
        // If card is not expanded, add it to the array to expand
        return [...prevExpandedCards, cardId];
      }
    });
  };

  // Define relevant options for each card
  const cardOptions = {
    'ai-chat-bots': [
      'Natural Language Processing',
      'Customizable Workflows',
      'Sentiment Analysis',
      'Multi-channel Support',
      'Automated FAQs',
    ],
    'collaboration-tools': [
      'Real-time Sync',
      'Task Automation',
      'Smart Suggestions',
      'Auto Task Assignment',
      'Cross-Platform Integration',
    ],
    'automated-notifications': [
      'Event-based Triggers',
      'Custom Alert Rules',
      'Multi-platform Delivery',
      'Scheduled Reminders',
      'Smart Filtering',
    ],
    'high-performance-solutions': [
      'Scalable Architecture',
      'Low Latency Processing',
      'Real-time Analytics',
      'Optimized Algorithms',
      'Cloud Integration',
    ],
    'global-customisation': [
      'Theme Editor',
      'Role-based Access',
      'API Integrations',
      'Workflow Builder',
      'Language Support',
    ],
    'data-integration': [
      'Unified Dashboards',
      'Real-time Sync',
      'Data Transformation',
      'Secure APIs',
      'Automated Reporting',
    ],
  };

  // Helper function to render a single card
  const renderCard = (id, IconComponent, title, description, isCollaborationCard = false) => {
    const isExpanded = expandedCards.includes(id);
    // Identify top row cards for upward animation
    const isTopRowCard = ['ai-chat-bots', 'collaboration-tools', 'automated-notifications'].includes(id);
    const collapsedHeight = isCollaborationCard ? 'max-h-[200px]' : 'max-h-[180px]'; // Define collapsed height for each card type

    return (
      <div
        key={id}
        className={`bg-[#070714] rounded-xl ${isCollaborationCard ? 'p-4' : 'p-3'} border border-[#2F3440] flex flex-col items-center text-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] cursor-pointer overflow-hidden ${isExpanded ? 'max-h-[1000px]' : collapsedHeight}`}
        onClick={() => toggleExpand(id)}
      >
        <div className="p-3 rounded-xl bg-white/10 mb-4 flex items-center justify-center">
          <IconComponent size={24} className="text-cyan-300 hover:text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p> {/* Added mb-4 for consistent spacing */}

        {/* This div will handle the expandable content and its height animation */}
        <div className={`
          transition-all duration-500 ease-in-out
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
          ${isTopRowCard ? (isExpanded ? 'translate-y-0' : 'translate-y-full') : ''}
        `}>
          <img
            src={toolImage} // Using the imported image
            alt={`${title} Tool`}
            className="mt-4 mb-4 rounded-lg max-w-full h-auto"
          />
          <div className="flex flex-wrap gap-2 text-xs font-medium justify-center">
            {/* Fixed: Accessing object property using bracket notation */}
            {cardOptions[id] && cardOptions[id].map((option, index) => (
              <span key={index} className="bg-[#0D1117] text-gray-400 px-3 py-1 rounded-full border border-[#2F3440] hover:text-white hover:bg-cyan-700 transition-colors duration-300 cursor-pointer">
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 px-4 lg:px-6 text-white text-center overflow-hidden"> {/* Removed bg-[#0A0A1F] from here */}
      {/* Background Gradients/Blobs (Optional, adjust as needed) */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* "Function" Label */}
        <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-medium bg-[#1A2536] text-gray-400 border border-[#2F3440]">
          Function
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          The Future is Happening Now
        </h2>

        {/* Subheading/Description */}
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
          Our AI chatbots continuously adapt, reducing workloads for customer support teams while
          enhancing customer satisfaction through advanced machine learning.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {renderCard(
            'ai-chat-bots',
            MessageSquare,
            'AI-Powered Chat Bots',
            'Smart chatbots streamline support and operations with customizable workflows.'
          )}
          {renderCard(
            'collaboration-tools',
            Users,
            'Collaboration Tools',
            'AI tools enhance teamwork through automated and scalable collaboration.',
            true // Mark as collaboration card for specific padding
          )}
          {renderCard(
            'automated-notifications',
            Bell,
            'Automated Notifications',
            'Stay on top of tasks with AI-driven reminders and alerts—no manual effort needed.'
          )}
          {renderCard(
            'high-performance-solutions',
            Zap,
            'High-Performance Solutions',
            'Fast, reliable AI systems built for efficient data processing and integration.'
          )}
          {renderCard(
            'global-customisation',
            Settings,
            'Global Customisation',
            'Fully customize AI workflows to fit your specific business needs.'
          )}
          {renderCard(
            'data-integration',
            Database,
            'Data Integration',
            'Unify data sources for real-time insights and smarter decisions with AI integration.'
          )}
        </div>
      </div>

      {/* SVG for the bottom curve - Adjusted to create a downward dip */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,100 C30,20 70,20 100,100 L100,0 Z"
            fill="#0A0A1F" // Matches the background color of FutureSection
          />
        </svg>
      </div>
    </section>
  );
};

export default FutureSection;
