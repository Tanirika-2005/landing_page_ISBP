import React from 'react';
import './UseCases.css';

const UseCases = () => {
  return (
    <section className="usecases" id="usecases">
      <div className="container usecases-layout">
        <div className="usecases-header fade-in">
          <div><p className="usecases-eyebrow highlight-yellow" style={{ display: 'inline-block', marginBottom: '1rem' }}>MARKET SIMULATION</p></div>
          <h2 className="section-title">Simulate entire markets to de-risk your most critical business decisions.</h2>
          <p className="section-subtitle">
            Reach premium audiences. Decode buyer behavior. Unlock strategic insights.
          </p>
        </div>

        <div className="usecases-cards">
          <div className="usecase-card sticky-card card-1">
            <div className="usecase-card-layout">
              <div className="usecase-text-col">
                <div className="usecase-number">01</div>
                <h3 className="usecase-title">Predict the unsaid. Capitalize on the real.</h3>
                <p className="usecase-desc">
                  Traditional surveys fail because people are unreliable narrators of their own actions. We strip away this bias by simulating real-world behavior.<br /><br />
                  Tuned for the Indian market, our platform captures deep regional nuances to deliver authentic insights faster than legacy research.
                </p>
              </div>
              <div className="usecase-img-col">
                <img src="/notion_unreachable.png" alt="Reaching the unreachable" className="usecase-illustration" />
              </div>
            </div>
          </div>

          <div className="usecase-card sticky-card card-2">
            <div className="usecase-card-layout">
              <div className="usecase-text-col">
                <div className="usecase-number">02</div>
                <h3 className="usecase-title">Capture the true market pulse</h3>
                <p className="usecase-desc">
                  The most valuable insights require deep context that traditional surveys miss. We capture the true pulse of the Indian market by simulating the exact pressures your buyers face.<br /><br />
                  From macroeconomic shifts to daily urban friction, our models synthesize complex empirical signals to reason like real consumers making real decisions.
                </p>
              </div>
              <div className="usecase-img-col">
                <img src="/notion_assumption.png" alt="Interrogate assumptions" className="usecase-illustration" />
              </div>
            </div>
          </div>

          <div className="usecase-card sticky-card card-3">
            <div className="usecase-card-layout">
              <div className="usecase-text-col">
                <div className="usecase-number">03</div>
                <h3 className="usecase-title">Model uncharted scenarios</h3>
                <p className="usecase-desc">
                  You cannot survey a market that doesn't yet exist. Traditional research breaks down when evaluating entirely new products, shifting regulations, or bold geographic expansions.<br /><br />
                  We allow you to model these uncharted territories by predicting complex behavioral shifts before a single rupee is spent—helping you navigate high-stakes decisions with absolute confidence.
                </p>
              </div>
              <div className="usecase-img-col">
                <img src="/notion_corner.png" alt="Seeing around corners" className="usecase-illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
