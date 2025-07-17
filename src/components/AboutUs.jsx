import React from 'react';
 
const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-black/70 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">About Us</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold">
            Founder - <span className="text-green-400">Anand Mishra</span>
          </h3>
          <p className="mt-2 text-gray-300">
            Anand Mishra, the visionary behind our company, laid the foundation with a mission to revolutionize organic agricultural solutions. His leadership continues to inspire innovation and sustainability.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold">
            Marketing Head - <span className="text-green-400">Ajay Agnihotri</span>
          </h3>
          <p className="mt-2 text-gray-300">
            Ajay Agnihotri brings operational excellence to the team. His strategic mindset and dedication to growth have driven the company’s expansion and customer trust.
          </p>
        </div>
 <div>
          <h3 className="text-2xl font-semibold">
            Admin - <span className="text-green-400">Gokul Sonwani</span>
          </h3>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Gokul Sonwani ensures smooth execution of day-to-day operations. His expertise in team management and resource coordination keeps our vision moving forward efficiently.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold">Our Team</h3>
          <p className="mt-2 text-gray-300">
            Our passionate and skilled team collaborates to deliver high-quality agricultural solutions and ensure a sustainable future for farming communities.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default AboutUs;
