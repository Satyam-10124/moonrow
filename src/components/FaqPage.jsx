import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './Header';

const faqData = [
  {
    question: "What is ICP Work?",
    answer: "ICP Work is a decentralized freelancing platform built on the Internet Computer Protocol (ICP). It aims to revolutionize the global freelancing industry by providing a trustless, secure, and efficient marketplace where clients and freelancers can connect directly, free from the high fees and centralized control of traditional platforms."
  },
  {
    question: "How is ICP Work different from traditional freelancing platforms like Upwork or Fiverr?",
    answer: "Unlike traditional platforms, ICP Work operates on a decentralized blockchain, eliminating intermediaries. This means significantly lower fees (0-5%), immutable reputation systems, secure smart contract-powered escrow, and user ownership of data. It offers a truly censorship-resistant and transparent environment."
  },
  {
    question: "What is the Internet Computer Protocol (ICP)?",
    answer: "The Internet Computer Protocol is a revolutionary blockchain network designed to host decentralized applications (dApps) at web speed and scale. It offers unique features like a reverse gas model (no user-facing transaction fees), chain-key cryptography for interoperability, and direct web serving, allowing entire applications to run on-chain."
  },
  {
    question: "Do I need to pay gas fees to use ICP Work?",
    answer: "No. ICP Work leverages ICP's reverse gas model, meaning developers pre-pay for computation. This ensures that end-users experience a gas-free interaction with the platform, making it accessible and attractive to a broader audience."
  },
  {
    question: "How does the immutable reputation system work?",
    answer: "All completed projects, reviews, and performance metrics are recorded on the ICP blockchain. This creates an unalterable and verifiable reputation for both freelancers and clients. This on-chain reputation cannot be manipulated or censored by any central authority, providing a transparent and reliable basis for trust within the community."
  },
  {
    question: "What is a DAO and how does it relate to ICP Work?",
    answer: "DAO stands for Decentralized Autonomous Organization. ICP Work's governance model is built upon a DAO, empowering the community to participate in key decisions, including platform upgrades, feature development, and dispute resolution. This ensures fairness, transparency, and responsiveness to user needs."
  },
  {
    question: "Is my data secure on ICP Work?",
    answer: "Yes. ICP Work prioritizes user data ownership and security. Your profiles, portfolios, and communications are securely stored on-chain, leveraging the cryptographic security of the Internet Computer. You retain full control over your digital identity and data."
  },
  {
    question: "What kind of work can I find or offer on ICP Work?",
    answer: "ICP Work is designed to support a wide range of decentralized work scenarios. This includes remote work for global teams, smart contract development and auditing, task bounties for open-source contributions, DAO payroll and treasury management, general freelance gigs, Web3 consulting, content creation, and even education and mentorship in Web3."
  },
  {
    question: "How do I get started with ICP Work?",
    answer: "You can get started by registering with Internet Identity, creating your profile, and then either posting a project (if you're a client) or Browse available projects and submitting proposals (if you're a freelancer). Our intuitive platform guides you through each step of the process."
  }
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      className="text-white min-h-screen"
      style={{
        backgroundColor: '#070714',
        backgroundImage: `
          radial-gradient(ellipse at 100% 100%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)
        `
      }}
    >
      <Header />

      <div className="container mx-auto px-6 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-400">
            Find answers to the most common questions about the MoonRow platform and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/30 backdrop-blur-sm 
                         transition-all duration-300 ease-in-out hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-6 text-left group"
              >
                <span className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors duration-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-300 transition-opacity duration-300 ease-in-out"
                       style={{ opacity: openIndex === index ? 1 : 0, transitionDelay: openIndex === index ? '100ms' : '0ms' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;