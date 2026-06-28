import React, { useState } from 'react';
import './WhoItsFor.css';

const icons = {
  creative: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  campaign: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  brand: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h3l3-9 5 18 3-9h6"/></svg>,
  competitive: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  market: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
  launch: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.22 2.41l-2.3 2.3a1 1 0 0 0 0 1.42l5.5 5.5a1 1 0 0 0 1.42 0l2.3-2.3a1 1 0 0 0 0-1.42l-5.5-5.5a1 1 0 0 0-1.42 0z"/><path d="M15 9l-9 9a1 1 0 0 0-.29.71L5 22l3.29-.71a1 1 0 0 0 .71-.29l9-9"/><path d="M12.5 11.5l1 1"/></svg>,
  valueProp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  price: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  churn: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5.5"/><path d="M9 22l-4-4 4-4"/><path d="M21 13v-2a4 4 0 0 0-4-4h-7"/><path d="M14 3l-4 4 4 4"/></svg>
};

const tabs = [
  {
    id: 'marketing',
    label: 'Marketing & Brand',
    image: '/marketing_ui.png',
    capabilities: [
      { id: 'creative', title: 'Creative testing', desc: 'Test copy, assets, and messaging before launching expensive ad campaigns.', icon: icons.creative },
      { id: 'campaign', title: 'Campaign strategy', desc: 'Simulate how target audiences will react to broad marketing initiatives.', icon: icons.campaign },
      { id: 'brand', title: 'Brand perception tracking', desc: 'Monitor how your brand resonates in the market over time without lagging surveys.', icon: icons.brand }
    ]
  },
  {
    id: 'agency',
    label: 'Agencies & Consulting',
    image: '/market_nodes.png',
    capabilities: [
      { id: 'competitive', title: 'Competitive positioning', desc: 'Identify white space in the market and position clients to win.', icon: icons.competitive },
      { id: 'market', title: 'Market segmentation', desc: 'Break down complex audiences into actionable, hyper-specific segments.', icon: icons.market }
    ]
  },
  {
    id: 'product',
    label: 'Product & Strategy',
    image: '/product_strategy.png',
    capabilities: [
      { id: 'launch', title: 'Product launches', desc: 'De-risk go-to-market strategies by simulating user adoption.', icon: icons.launch },
      { id: 'valueProp', title: 'Value proposition testing', desc: 'Validate core offerings with synthetic audiences before writing code.', icon: icons.valueProp },
      { id: 'price', title: 'Price optimization', desc: 'Find the absolute ceiling of willingness-to-pay without risking real revenue.', icon: icons.price },
      { id: 'churn', title: 'Churn prediction', desc: 'Understand exactly why users might leave and intervene before they do.', icon: icons.churn }
    ]
  }
];

const WhoItsFor = () => {
  const [activeFilter, setActiveFilter] = useState('marketing');

  // Flatten all capabilities into a single array with category info
  const allCapabilities = tabs.flatMap(tab => 
    tab.capabilities.map(cap => ({
      ...cap,
      category: tab.id,
      categoryLabel: tab.label
    }))
  );

  const filteredCapabilities = allCapabilities.filter(cap => cap.category === activeFilter);

  return (
    <section className="who-filter-section">
      <div className="container">
        <div className="who-header-centered">
          <h2 className="who-title">Built for the decision-maker</h2>
          <p className="who-subtitle">
            Our platform adapts dynamically across any industry—generating analysis, segmentation, and strategic pathways tailored specifically for the leader driving the decisions.
          </p>
        </div>

        <div className="who-filter-container">
          <div className="who-filter-pill">
            <button 
              className={`filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('marketing')}
            >
              Marketing
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'agency' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('agency')}
            >
              Agencies
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'product' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('product')}
            >
              Product
            </button>
          </div>
        </div>

        <div className="who-vectorial-grid">
          {filteredCapabilities.map(cap => (
            <div key={cap.id} className="vectorial-card">
              <span className="vectorial-badge">
                {cap.categoryLabel.split(' ')[0].toUpperCase()}
              </span>
              <h3 className="vectorial-title">{cap.title}</h3>
              <p className="vectorial-desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
