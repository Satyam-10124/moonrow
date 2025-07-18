import React from 'react'; // Removed useState as it's no longer needed
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Feedback.css';

// Replace this placeholder with the actual path to your logo
import ClientLogo from '../assets/johnson-controls-logo.png';

// The tabData constant has been removed as it's no longer used

const Feedback = () => {
  // The activeTab state has been removed

  return (
    <section className="feedback-section">
      <div className="feedback-container">

        {/* The entire "main-content-wrapper" div containing the top section has been removed */}

        <div className="testimonials-section-wrapper">
          <div className="top-gradient-background"></div> 
          <span className="testimonials-badge">Testimonials</span>
          <h2 className="main-title-testimonials">Real Feedback, Real Results</h2>
          <div className="testimonial-card-outer">
            <div className="testimonial-card-inner-split">
              <div className="testimonial-left-column-split">
                <div>
                  <img src={ClientLogo} alt="Client Logo" className="company-logo-split" />
                </div>
                <div>
                  <div className="designation-group">
                    <p className="designation-split">Head of Customer Success</p>
                    <div className="tags-container-split">
                      <span className="tag-split">Customer Experience</span>
                      <span className="tag-split">Retail</span>
                    </div>
                  </div>
                  <div className="navigation-arrows-split">
                    <button className="arrow-button-split" aria-label="Previous">
                      <FaChevronLeft />
                    </button>
                    <button className="arrow-button-split" aria-label="Next">
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="testimonial-right-column-split">
                <h3 className="quote-headline-split">Elevating Customer Experience with Intelligent AI</h3>
                <blockquote className="quote-body-split">
                  After trying multiple AI vendors, <span className="highlight">MoonRow stood out with its AI for Service offering.</span> Their platform empowered our team to resolve issues faster and more intuitively. We’ve seen a <span className="highlight">35% drop in service resolution time</span>—a game changer for our CX strategy.
                </blockquote>
                <a href="#" className="read-review-link-split">
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