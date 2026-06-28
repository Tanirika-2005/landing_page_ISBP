import React, { useState } from 'react';
import './HowItWorks.css';

const steps = [
  {
    id: '01',
    title: 'Build your persona',
    desc: 'Model the exact traits, psychographics, and conditions of your ideal customer profile. No recruiting required—our engine generates mathematically sound representations of your market instantly.',
    img: '/audience_ss.png'
  },
  {
    id: '02',
    title: 'Construct the simulation',
    desc: 'Select your simulation objective and define your scenario prompt. Upload brand guidelines or product context to the Knowledge Base, and instruct the agents exactly what to test.',
    img: '/construct_ss.png'
  },
  {
    id: '03',
    title: 'Run the engine',
    desc: 'Deploy the model in one click. Watch in real-time as the engine synthesizes live context, generates target personas, and simulates peer deliberations before compiling a final audit.',
    img: '/run_engine_ss.png'
  },
  {
    id: '04',
    title: 'Analyze the signals',
    desc: 'Review the Cohort Shift Analysis to uncover hidden gaps between stated intent and actual behavior. Dive deep into market realities, predictive purchase intent, and behavioral dissonance to finalize your strategy.',
    img: '/analyze_ss.png'
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(steps[0].id);

  const activeContent = steps.find(s => s.id === activeStep);

  return (
    <section className="hiw-section">
      <div className="hiw-container hiw-layout">
        
        {/* Left Column */}
        <div className="hiw-left">
          <div><p className="hiw-eyebrow highlight-yellow" style={{ display: 'inline-block', marginBottom: '1rem' }}>HOW IT WORKS</p></div>
          <h2 className="hiw-main-title">A market simulation engine.<br/>Not a chat interface.</h2>
          
          <div className="hiw-steps-list">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button 
                  key={step.id} 
                  className={`hiw-step-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <span className="hiw-step-num">{step.id}</span>
                  <div className="hiw-step-text">
                    <span className="hiw-step-title">{step.title}</span>
                    {isActive && (
                      <p className="hiw-step-desc fade-in-step">{step.desc}</p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="hiw-right">
          <div className="hiw-mockup-panel fade-in-step" key={activeStep}>
            <img src={activeContent.img} alt={activeContent.title} className="hiw-mockup-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
