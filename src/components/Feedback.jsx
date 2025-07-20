import React from 'react';
import './Feedback.css';

const phasesData = [
  {
    status: 'Current',
    title: 'Phase 1: Core Platform Launch',
    details: 'Full deployment of core canister smart contracts, intuitive frontend interface, and initial community building'
  },
  {
    status: 'Upcoming',
    title: 'Phase 2: Feature Expansion',
    details: 'AI-powered matching algorithms, expanded payment options, specialized industry tools, and cross-chain integration'
  },
  {
    status: 'Future',
    title: 'Phase 3: DAO Evolution',
    details: 'Progressive decentralization, advanced reputation systems, educational initiatives, and strategic partnerships'
  }
];

const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <div className="testimonials-section-wrapper">
          <div className="top-gradient-background"></div> 
          <span className="testimonials-badge">Roadmap</span>
          <h2 className="main-title-testimonials">Roadmap & Milestones</h2>
          <p className="roadmap-subheading">
            Our journey towards a fully decentralized future of work.
          </p>

          <div className="timeline-container">
            {phasesData.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className={`status-tag status-${phase.status.toLowerCase()}`}>
                    {phase.status}
                  </span>
                  {/* Each phase's content is now in its own box */}
                  <div className="phase-box">
                    <h3 className="phase-title">{phase.title}</h3>
                    <p className="phase-details">
                      {phase.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;