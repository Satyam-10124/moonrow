import React from 'react';
import { FaGithub, FaLinkedin, FaGitlab, FaReddit } from 'react-icons/fa';
import { SiX } from "react-icons/si";

const Footer = () => {
  const locations = [
    'Yogyakarta, Indonesia', 'Madrid, Spain', 'London, UK', 'Paris, France', 'Sydney, Australia',
    'Shanghai, China', 'Orlando, USA', 'Dubai, UAE', 'Seoul, South Korea', 'Tokyo, Japan'
  ];

  const linkSections = [
    { title: 'Use Cases', links: ['Remote Work & Global Teams', 'Smart Contract Development', 'Task Bounties', 'Treasury Management'] },
    { title: 'Advantages of ICP', links: ['Infinite Scalability', 'Web Speed Performance', 'Reverse Gas Model', 'Direct Web Serving'] },
    { title: 'Developers', links: ['Community', 'Docs', 'ICP Work', 'Status'] },
    { title: 'Resources', links: ['Blog', 'Webinars', 'Case Studies', 'Research Analysis'] }
  ];

  return (
    <footer className="bg-transparent text-gray-300 font-sans">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-12">ICP Work</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-lg font-semibold text-white">Let's work together</h3>
            <p className="mt-2 text-gray-400 text-sm">Get answers and a customized quote for you projects.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {locations.map((location) => (
                <span key={location} className="bg-[#161B22] border border-gray-700 text-gray-400 text-xs px-2.5 py-1.5 rounded-md">
                  {location}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-6 mt-8 text-gray-400">
              <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><FaGithub size={22} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin size={22} /></a>
              <a href="#" aria-label="GitLab" className="hover:text-white transition-colors"><FaGitlab size={22} /></a>
              <a href="#" aria-label="Reddit" className="hover:text-white transition-colors"><FaReddit size={22} /></a>
              <a href="#" aria-label="X (formerly Twitter)" className="hover:text-white transition-colors"><SiX size={18} /></a>
            </div>
            
            {/* The FAQ button has been removed from here */}

          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {linkSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 p-[1px] rounded-2xl bg-gradient-to-b from-gray-800 via-gray-900 to-transparent">
              <div
                className="bg-[#0B132B] rounded-[15px] p-6 flex flex-col md:flex-row items-center justify-between gap-6"
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at bottom right, rgba(20, 184, 166, 0.45) 0%, transparent 60%),
                    radial-gradient(ellipse at bottom left, rgba(37, 99, 235, 0.45) 0%, transparent 60%)
                  `,
                }}
              >
                <div className="flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <h4 className="font-semibold text-white">Get Latest Newsletter</h4>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Stay informed with our latest updates, insights, and innovations delivered straight to your inbox.</p>
                </div>
                <button className="bg-gray-200 text-gray-800 font-bold px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-white transition-colors w-full md:w-auto">
                  Connect to Me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; 2025 ICP Work Inc. All trademarks are property of their respective owners.</p>
          <div className="order-1 sm:order-2 flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Intellectual Property Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;