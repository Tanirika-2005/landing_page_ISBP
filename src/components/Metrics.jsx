import React from 'react';
import './Metrics.css';

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="container">

        
        <div className="metrics-grid fade-in delay-300">
          <div className="metric-card">
            <h3 className="metric-number">85 — 92%</h3>
            <p className="metric-title">Synthetic-organic parity</p>
            <p className="metric-desc">in independent comparison studies. Measured across thematic overlap, depth & qualitative alignment.</p>
          </div>
          
          <div className="metric-card">
            <h3 className="metric-number">21+</h3>
            <p className="metric-title">Peer-reviewed papers</p>
            <p className="metric-desc">supporting the synthetic research thesis. Incl. Science Magazine, The Atlantic, SAGE Journals.</p>
          </div>
          
          <div className="metric-card">
            <h3 className="metric-number">40x</h3>
            <p className="metric-title">Faster turnarounds</p>
            <p className="metric-desc">Insights delivered in minutes instead of weeks. Bypassing traditional human recruitment delays.</p>
          </div>
          
          <div className="metric-card">
            <h3 className="metric-number">98%</h3>
            <p className="metric-title">Persona Adherence</p>
            <p className="metric-desc">Consistent replication of deep cultural context, localized buying habits, and psychological traits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
