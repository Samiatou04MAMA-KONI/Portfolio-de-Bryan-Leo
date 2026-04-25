import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Texte principal */}
        <div className="hero-content">
          <div className="hero-badge">DESIGNER CRÉATIF</div>
          
          <h1 className="hero-title">
            <span className="title-line">Je transforme</span>
            <span className="title-line">
              <span className="title-line">vos idées</span> en
            </span>
            <span className="title-line">expériences visuelles</span>
          </h1>
          
          
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mon travail
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Discutons
            </button>
          </div>
        </div>

        {/* Visual créatif */}
        <div className="hero-visual">
          <div className="visual-container">
            {/* Formes géométriques animées */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            
            {/* Placeholder pour image/œuvre */}
            <div className="hero-image-placeholder">
      <img 
        src="./hero.jpg" 
        alt="Création visuelle"
        className="hero-image"
      />
    </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;