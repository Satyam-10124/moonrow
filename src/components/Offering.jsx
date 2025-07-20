import React, { useState, useEffect } from 'react';
import { Lightbulb, Star, Puzzle, Brain } from 'lucide-react';
import ChatSupportCard from './ChatSupportCard';

const AIOfferingsSection = () => {
  const [activeTab, setActiveTab] = useState('web3');
  const [activeIconIndex, setActiveIconIndex] = useState(null);
  const [randomHeadline, setRandomHeadline] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first feature

  const headlines = [
    'ICP Work: Decentralizing the Future of Work.',
    'Your Talent. Your Terms. On the Internet Computer.',
    'Build. Collaborate. Earn. Decentralized.',
    'The Global Freelance Marketplace, Reimagined on ICP.',
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * headlines.length);
    setRandomHeadline(headlines[randomIndex]);
  }, []);

  useEffect(() => {
    let timeouts = [];
    let interval;

    const features = tabFeatures[activeTab];

    const startAnimation = () => {
      features.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setActiveIconIndex(index);
        }, index * 500);
        timeouts.push(timeout);
      });

      const resetTimeout = setTimeout(() => {
        setActiveIconIndex(null);
      }, features.length * 500 + 500);
      timeouts.push(resetTimeout);

      interval = setInterval(() => {
        features.forEach((_, index) => {
          const timeout = setTimeout(() => {
            setActiveIconIndex(index);
          }, index * 500);
          timeouts.push(timeout);
        });

        const reset = setTimeout(() => {
          setActiveIconIndex(null);
        }, features.length * 500 + 500);
        timeouts.push(reset);
      }, features.length * 500 + 3500);
    };

    startAnimation();

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [activeTab]);

  const tabFeatures = {
    web3: [
      {
        icon: Lightbulb,
        title: 'Build Without Limits',
        description:
          "Leverage the Internet Computer's infinite scalability and reverse gas model to deploy dApps with web speed and no user-facing transaction fees. Focus on innovation, not infrastructure.",
      },
      {
        icon: Star,
        title: 'True Decentralization',
        description:
          'Smart contracts run entirely on-chain with no centralized cloud. Users interact directly with canisters for unmatched transparency and resilience.',
      },
      {
        icon: Puzzle,
        title: 'Seamless Integration',
        description:
          'Easily connect your existing Web2 and Web3 tools. The Internet Computer supports HTTP outcalls, EVM integrations, and asset canisters for full-stack dApp experiences.',
      },
      {
        icon: Brain,
        title: 'Developer-Friendly Environment',
        description:
          'Build with familiar languages like Rust and Motoko. Get robust docs, starter templates, and community support to bring ideas to life quickly.',
      },
    ],
    enterprise: [
      {
        icon: Lightbulb,
        title: 'Unlock Global Talent',
        description:
          'Access a borderless pool of skilled developers and service providers, all operating on the decentralized Internet Computer.',
      },
      {
        icon: Star,
        title: 'Cost-Effective & Transparent',
        description:
          'No middlemen or platform fees. Transparent pricing and direct smart contract interaction reduce overhead and boost trust.',
      },
      {
        icon: Puzzle,
        title: 'Secure & Trustless Operations',
        description:
          'Blockchain-grade security ensures your workflows and data are protected from manipulation or third-party interference.',
      },
      {
        icon: Brain,
        title: 'Future-Proof Your Workforce',
        description:
          'Adapt to a rapidly changing work landscape by integrating with cutting-edge decentralized technologies and AI automations.',
      },
    ],
  };

  const currentFeatures = tabFeatures[activeTab];

  return (
    <section id="offering-section" className="relative py-16 pt-0 px-4 lg:px-6 text-white overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-green-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-4000"></div>

      <div className="relative z-20 p-8 pt-0 rounded-2xl bg-gradient-to-br from-[#1A2536]/40 to-[#0D1117]/40 backdrop-blur-sm">
        <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-md">
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col h-full">
            {/* Responsive adjustment for tab navigation spacing */}
            <div className="flex justify-center space-x-8 md:space-x-16 lg:space-x-64 mb-16 text-gray-500 text-sm font-medium">
              <span
                className={`cursor-pointer transition-all duration-300 transform ${
                  activeTab === 'web3'
                    ? 'text-white font-bold scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => {
                  setActiveTab('web3');
                  setHoveredIndex(0);
                }}
              >
                For Web3 Developers
              </span>
              <span
                className={`cursor-pointer transition-all duration-300 transform ${
                  activeTab === 'enterprise'
                    ? 'text-white font-bold scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => {
                  setActiveTab('enterprise');
                  setHoveredIndex(0);
                }}
              >
                For Enterprises
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start flex-grow">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-left mb-12 leading-tight max-w-lg">
                  {randomHeadline === 'Build. Collaborate. Earn. Decentralized.' ? (
                    randomHeadline
                  ) : (
                    randomHeadline
                      .split(/(?<=\.)\s*/)
                      .filter(Boolean)
                      .map((line, index, arr) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < arr.length - 1 && <br />}
                        </React.Fragment>
                      ))
                  )}
                </h2>

                <div className="flex flex-col space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {currentFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start text-left group cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(index)}
                      >
                        <div className="p-2 rounded-full bg-[#1A2536] mb-3 border border-[#2F3440]">
                          <feature.icon
                            size={20}
                            className={`transition-all duration-500 ${
                              activeIconIndex === index
                                ? 'text-white'
                                : 'text-[#B0E0FF]'
                            } group-hover:text-white`}
                          />
                        </div>
                        <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-base leading-relaxed">
                    {currentFeatures[hoveredIndex]?.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ChatSupportCard type={activeTab} />

              </div>
            </div>

            <div className="mt-10 space-y-4">
              <div className="bg-[#0D1117] p-3 rounded-lg border border-[#2F3440]">
                <p className="text-gray-300 text-xs font-medium">
                  <span className="text-[#B0E0FF] font-bold">Proof Point:</span> Developers deploying on the Internet Computer reduced infrastructure costs by 70% and launched dApps 2x faster — with zero user-facing gas fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOfferingsSection;