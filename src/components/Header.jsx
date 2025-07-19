import React, { useState, useEffect } from "react";
// ✨ 1. REMOVED: import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// The CSS for the button is still included here
const headerStyles = `
  .glow-button-wrapper { /* ...styles... */ }
  .glow-button-wrapper:hover { /* ...styles... */ }
  .inner-button-content { /* ...styles... */ }
  .glow-button-wrapper:hover .inner-button-content { /* ...styles... */ }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "AI Offering", href: "#" },
    { label: "Agent Platform", href: "#" },
    { label: "AI Solutions", href: "#" },
    { label: "Showcase", href: "#" },
    { label: "Company", href: "#" },
    { label: "Academy", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-gray-900/50 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <style>{headerStyles}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ✨ 2. CHANGED Link to a simple <a> tag */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Moonflow</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-gray-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300 text-sm font-medium transform origin-center"
              >
                {link.label}
              </a>
            ))}
            {/* ✨ 3. CHANGED Link to a simple <a> tag */}
            <a href="/signup" className="glow-button-wrapper ml-4">
              <span className="inner-button-content">Get Started</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-gray-300 transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a href="/signup" className="glow-button-wrapper">
                  <span className="inner-button-content">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;