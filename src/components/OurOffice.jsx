import React from 'react';

const OurOffice = () => {
  return (
    <section id="office" className="py-16 text-white relative">
      {/* Full-width black translucent blur */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0" aria-hidden="true"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR OFFICES</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* UP Office */}
          <div className="w-full md:w-1/2 rounded-xl p-6 flex items-center justify-center">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-3xl font-semibold text-green-400">Uttar Pradesh</h3>
              <p className="text-base md:text-lg">
                📍 D-268, 1st Floor,<br />
                Block D, Rajajipuram,<br />
                Lucknow, Uttar Pradesh – 226017
              </p>
            </div>
          </div>

          {/* MP Office */}
          <div className="w-full md:w-1/2 rounded-xl p-6 flex items-center justify-center">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-3xl font-semibold text-green-400">Madhya Pradesh</h3>
              <p className="text-base md:text-lg">
                📍 A2, Vrindavan Yojana,<br />
                Pipliyahana,<br />
                Indore, Madhya Pradesh – 452016
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
