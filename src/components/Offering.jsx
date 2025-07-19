import React from 'react';
import { Lightbulb, Star, Moon } from 'lucide-react'; // Using Lucide React for feature icons
import ChatSupportCard from './ChatSupportCard'; // Assuming ChatSupportCard is in the same components folder

const AIOfferingsSection = () => {
  return (
    <section className="relative py-16 pt-0 px-4 lg:px-6 text-white overflow-hidden">
      {/* Background Gradients/Blobs (similar to image) - Adjusted colors and opacities for better match */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-green-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* NEW OUTER WRAPPER DIV - This will now contain ONLY the main content, not the CTA */}
      <div className="relative z-20 p-8 pt-0 rounded-2xl bg-gradient-to-br from-[#1A2536]/80 to-[#0D1117]/80 backdrop-blur-sm">
        <div className="bg-[#0D1117]/70 rounded-2xl p-6">
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col h-full">
            {/* Top Navigation/Labels (AI for Service, AI for Process, etc.) */}
            <div className="flex justify-center space-x-40 mb-16 text-gray-500 text-sm font-medium">
              <span className="text-gray-400 hover:text-white hover:font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer">AI for Service</span>
              <span className="text-gray-400 hover:text-white hover:font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer">AI for Process</span>
              <span className="text-gray-400 hover:text-white hover:font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer">AI for Work</span>
              <span className="text-gray-400 hover:text-white hover:font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer">AI for Growth</span>
            </div>

            {/* Main Content Grid: Heading and Left Content in first column, ChatCard in second */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start flex-grow">
              {/* Left Column: Main Heading, Features, and Description */}
              <div className="flex flex-col">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-12 leading-tight max-w-lg">
                  Always On, <br /> Always Helpful
                </h2>

                {/* Left Content Area: Feature Cards */}
                <div className="flex flex-col space-y-10">
                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-start text-left group">
                      <div className="p-2 rounded-full bg-[#1A2536] mb-3 border border-[#2F3440]">
                        <Lightbulb size={20} className="text-[#B0E0FF] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Instant, Helpful Replies</h4>
                      <p className="text-gray-400 text-xs">
                        {/* Removed custom description to match image */}
                      </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col items-start text-left group">
                      <div className="p-2 rounded-full bg-[#1A2536] mb-3 border border-[#2F3440]">
                        <Star size={20} className="text-[#B0E0FF] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <h4 className="text-lg font-semibold mb-1">Personalized Experiences</h4>
                      <p className="text-gray-400 text-xs">
                        {/* Removed custom description to match image */}
                      </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-start text-left group">
                      <div className="p-2 rounded-full bg-[#1A2536] mb-3 border border-[#2F3440]">
                        <Moon size={20} className="text-[#B0E0FF] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <h4 className="text-xl font-semibold mb-1">Support That Never Sleeps</h4>
                      <p className="text-gray-400 text-xs">
                        {/* Removed custom description to match image */}
                      </p>
                    </div>
                  </div>

                  {/* Description text */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    Our AI for Service makes it easy to boost customer satisfaction, reduce wait times,
                    and free your team to focus on high-impact interactions.
                  </p>
                </div>
              </div>

              {/* Right Column: Chat Support Card */}
              <div className="flex justify-center lg:justify-end">
                <ChatSupportCard />
              </div>
            </div>

            {/* Proof Point - Remains at the bottom of the main div */}
            <div className="mt-10 space-y-4">
              <div className="bg-[#0D1117] p-3 rounded-lg border border-[#2F3440]">
                <p className="text-gray-300 text-xs font-medium">
                  <span className="text-[#B0E0FF] font-bold">Proof Point:</span> Businesses using our AI have seen up to a 40% drop in first response time and a
                  25% increase in customer happiness scores — all while saving support costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call-to-Action Section - OUT of the main translucent div */}
      {/* Changed mt-20 to mt-10 (or adjust as needed) */}
      <div className="max-w-6xl mx-auto relative z-10 mt-2">
        <div className="rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 backdrop-filter backdrop-blur-md">
          {/* Text content of CTA - now in a flex row for md screens */}
          <div className="flex flex-col md:flex-row md:items-center flex-grow text-center md:text-left md:space-x-4">
            <h3 className="text-2xl font-bold mb-3 md:mb-0 md:flex-shrink-0">
              Optimise Your Business <br /> With AI-Powered
            </h3>
            {/* Paragraph now acts as the central text */}
            <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0 md:flex-grow">
              Take your business to the next level MoonRow built-in AI solutions for risk and
              profit management automate decision-making and optimise growth strategies.
            </p>
          </div>
          {/* Get Started Button */}
          <div className="relative">
            <div className="absolute -inset-4">
              <div
                className="w-full h-full max-w-xs mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600 rounded-xl"
              ></div>
            </div>
            <a href="#" title="Get Started"
              className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-base font-bold text-black transition-all duration-300 bg-white rounded-full sm:w-auto hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              role="button">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOfferingsSection;