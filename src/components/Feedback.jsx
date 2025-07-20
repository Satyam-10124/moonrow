import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Feedback.css';

import ClientLogo from '../assets/johnson-controls-logo.png';

const testimonialsData = [
  {
    logo: ClientLogo,
    designation: 'Phase 1',
    tags: ['Core Platform', 'Community'],
    headline: {
      prefix: 'Phase 1:',
      main: 'Core Platform Launch & Community Building (Current/Near-Term)'
    },
    quote: 'The full deployment of core canister smart contracts, including User Management, Project Management, Escrow, and Messaging, will be completed. <span class="highlight">An intuitive frontend interface will be launched to enable seamless interaction between clients and freelancers.</span> The platform will begin onboarding initial community members, early adopters, and key partners. Additionally, an initial DAO governance structure with voting mechanisms will be established, alongside ongoing security audits and performance optimizations to ensure a robust and reliable system.',
    reviewLink: '#'
  },
  {
    logo: ClientLogo,
    designation: 'Phase 2',
    tags: ['Expansion', 'Integration'],
    headline: {
      prefix: 'Phase 2:',
      main: 'Feature Expansion & Ecosystem Integration'
    },
    quote: '<span class="highlight">Advanced AI-powered matching algorithms will be integrated to optimize talent discovery.</span> Global payment options will be expanded, including support for more cryptocurrencies and potential fiat on/off-ramps. Specialized tools tailored to specific industries, such as modules for game development and legal services, will be developed. Collaboration features will be enhanced with integrated video conferencing and advanced project management dashboards. Additionally, cross-chain interoperability will be improved through Chain-Key Cryptography,seamless dApp interactions.',
    reviewLink: '#'
  },
  {
    logo: ClientLogo,
    designation: 'Phase 3',
    tags: ['DAO', 'Adoption'],
    headline: {
      prefix: 'Phase 3:',
      main: 'Decentralized Autonomous Organization (DAO) Evolution & Global Adoption'
    },
    quote: 'A reputation and credentialing system will be introduced to highlight verified skills and completed work. <span class="highlight">Token-based incentive programs will be launched to reward community participation and platform contributions.</span> Strategic partnerships will be formed with educational institutions and industry leaders to boost credibility and growth. Mobile platform development will begin to ensure on-the-go access for both clients and freelancers. Finally, robust analytics and reporting tools will be implemented to support data-driven decision-making across the ecosystem.',
    reviewLink: '#'
  }
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationState, setAnimationState] = useState('is-visible');

  const currentTestimonial = testimonialsData[activeIndex];

  const changeSlide = (direction) => {
    if (animationState !== 'is-visible') return;
    setAnimationState('is-exiting');

    setTimeout(() => {
      if (direction === 'next') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      } else {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
      }
      setAnimationState('is-entering');
      
      setTimeout(() => {
        setAnimationState('is-visible');
      }, 20);

    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide('next');
    }, 7000); 

    return () => clearInterval(timer);
  }, [activeIndex]);


  return (
    <section id="feedback-section" className="feedback-section"> {/* Added id here */}
      <div className="feedback-container">
        <div className="testimonials-section-wrapper">
          <div className="top-gradient-background"></div> 
          <span className="testimonials-badge">Roadmap</span>
          
          <h2 className="main-title-testimonials mb-2">Roadmap & Milestones</h2>
          
          <p className="roadmap-subheading text-slate-400 mt-2 mb-12 text-lg max-w-3xl mx-auto text-center">
            Our strategic vision for building the future of decentralized work.
            <br/>
            Explore our planned developments, delivered in three key phases.
          </p>

          <div className="testimonial-card-outer">
            <div className="testimonial-card-inner-split">
              <div className="testimonial-left-column-split">
                <div className={`testimonial-content ${animationState}`}>
                  <img src={currentTestimonial.logo} alt="Client Logo" className="company-logo-split" />
                </div>
                <div>
                  <div className={`testimonial-content designation-group ${animationState}`}>
                    <p className="designation-split">{currentTestimonial.designation}</p>
                    <div className="tags-container-split">
                      {currentTestimonial.tags.map(tag => <span key={tag} className="tag-split">{tag}</span>)}
                    </div>
                  </div>
                  <div className="navigation-arrows-split">
                    <button onClick={() => changeSlide('prev')} className="arrow-button-split" aria-label="Previous">
                      <FaChevronLeft />
                    </button>
                    <button onClick={() => changeSlide('next')} className="arrow-button-split" aria-label="Next">
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className={`testimonial-content testimonial-right-column-split ${animationState}`}>
                <h3 className="quote-headline-split text-2xl text-slate-100 mb-4">
                  <span className="font-semibold opacity-80">{currentTestimonial.headline.prefix} </span>
                  <span className="font-extrabold">{currentTestimonial.headline.main}</span>
                </h3>
                <blockquote 
                  className="quote-body-split"
                  dangerouslySetInnerHTML={{ __html: currentTestimonial.quote }}
                />
                <a href={currentTestimonial.reviewLink} className="read-review-link-split">
                  Read Review &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;