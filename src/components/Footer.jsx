import React from 'react';

const Footer = () => {
  return (
    <footer
      className="flex justify-center relative"
      style={{
        background:
          'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)',
      }}
    >
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a
              className="text-[#a4d6a4] text-base font-medium leading-normal min-w-40 hover:text-[#c6f0c6] transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-[#a4d6a4] text-base font-medium leading-normal min-w-40 hover:text-[#c6f0c6] transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-[#a4d6a4] text-base font-medium leading-normal">
            © 2025 Alvis Agrochem. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
