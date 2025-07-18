import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      // Increased blur from backdrop-blur-md to backdrop-blur-lg
      isScrolled ? "bg-gray-900/50 backdrop-blur-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-white">
              Moonflow
            </span>
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
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          // Increased blur from backdrop-blur-md to backdrop-blur-lg for mobile menu as well
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-gray-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-300 font-medium transform origin-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
