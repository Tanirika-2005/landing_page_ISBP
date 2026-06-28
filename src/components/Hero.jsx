import React, { useState, useEffect } from 'react';
import DecisionTree from './DecisionTree';
import './Hero.css';

const words = [
  "product launch.",
  "campaign.",
  "pricing strategy."
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Simulating India
          </h1>
          
          <p className="hero-subtitle fade-in delay-100" style={{ minHeight: '4.5em' }}>
            A predictive human simulation platform that maps how the Indian consumer mind actually decides through peer networks and deep cultural context, before your next <span className="typewriter-text font-semibold highlight-yellow">{words[index].substring(0, subIndex)}</span>
            <span className={`typewriter-cursor ${blink ? 'blink' : ''}`}>|</span>
          </p>
          
          <div className="hero-actions fade-in delay-200">
            <a href="#demo" className="btn-primary hero-btn">Book demo</a>
          </div>
        </div>
        
        <div className="hero-visual fade-in delay-300">
          <DecisionTree />
        </div>
      </div>
    </section>
  );
};

export default Hero;
