import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ClientLogo from "../assets/johnson-controls-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // To track if scrolled past threshold

  const navLinks = [
    { label: "Features", href: "/#offering-section" },
    { label: "How It Works", href: "/#future-section-id" },
    { label: "Use Cases", href: "/#stats-section" },
    { label: "Roadmap", href: "/#feedback-section" },
    { label: "FAQ", href: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50; // Threshold for scrolling
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Helper function to get header classes based on scroll state
  const getHeaderClasses = () => {
    let classes = `fixed z-50 transition-all ease-[cubic-bezier(.22,1,.36,1)] duration-300`;

    if (isScrolled) {
      // When scrolled, apply "pill" appearance, top-4, width, and centering
      classes += ` top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full shadow-lg bg-gray-900/80 backdrop-blur-lg`;
      // Explicitly set left and transform for centering when scrolled
      classes += ` left-1/2 -translate-x-1/2`;
    } else {
      // When not scrolled (initial state), full width, no background, top-0, left-0
      classes += ` top-0 left-0 w-full rounded-none bg-transparent`;
    }
    return classes;
  };

  // Helper function to get inner div classes
  const getInnerDivClasses = () => {
    let classes = `flex items-center justify-between mx-auto w-full transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]`;
    if (isScrolled) {
      classes += ` h-14 px-6 md:px-8`; // Shorter height and adjusted padding when scrolled
    } else {
      classes += ` h-16 px-6 lg:px-8 max-w-7xl`; // Initial height and padding
    }
    return classes;
  };

  // Helper function to get logo classes
  const getLogoClasses = () => {
    let classes = `transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] shrink-0`;
    if (isScrolled) {
      classes += ` h-8 md:h-9`; // Smaller logo when scrolled
    } else {
      classes += ` h-10 md:h-12`; // Initial larger logo
    }
    return classes;
  };

  // Helper function to get nav link spacing classes
  const getNavSpacingClasses = () => {
    let classes = `hidden md:flex items-center transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)]`;
    if (isScrolled) {
      classes += ` space-x-4 md:space-x-6`; // Tighter spacing when scrolled
    } else {
      classes += ` space-x-8`; // Original spacing
    }
    return classes;
  };

  return (
    <>
      <style>{`
        /* Your existing glow button styles */
        .glow-button-wrapper {
          position: relative;
          display: inline-block;
          border-radius: 99999px;
          padding: 0.1px;
          background: transparent;
          transition: box-shadow 0.3s ease, background 0.3s ease;
          border: none !important;
        }
        .glow-button-wrapper:hover {
          background: linear-gradient(90deg,#ff00cc 0%,#00ffe0 100%);
          box-shadow:0 0 10px 3px rgba(255,255,255,.2),-8px 8px 18px 6px rgba(255,0,180,.25),-10px -10px 18px 6px rgba(255,0,180,.2),6px -12px 22px 6px rgba(0,255,190,.22),12px -16px 18px 6px rgba(0,255,128,.2);
        }
        .header-inner-button {
          background-color: white;
          color: black;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
          font-size: 0.875rem;
        }
        .header-inner-button:hover {
          background-color: #f0f0f0;
        }
      `}</style>

      <header className={getHeaderClasses()}>
        <div className={getInnerDivClasses()}>
          <a href="/" className="flex items-center shrink-0">
            <img
              src={ClientLogo}
              alt="ICP Work Logo"
              className={getLogoClasses()}
            />
          </a>

          <nav className={getNavSpacingClasses()}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-white transition-all duration-300 ease-out text-sm font-medium transform origin-center hover:text-gray-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]
                  ${isScrolled ? "text-xs md:text-sm" : "text-sm md:text-base"}
                  delay-[${i * 50}ms]
                `}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4 md:ml-8">
              <button className="glow-button-wrapper">
                <span className="header-inner-button">Join ICP WORK</span>
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-b-2xl mt-2">
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
                <button className="glow-button-wrapper w-full">
                  <span className="header-inner-button w-full">
                    Join ICP WORK
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;