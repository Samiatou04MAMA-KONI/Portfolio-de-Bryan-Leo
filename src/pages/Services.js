import React, { useState, useEffect } from 'react'; 
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  // Ajoutez ce useEffect pour l'effet de suivi de souris
useEffect(() => {
  const cards = document.querySelectorAll('.service-card');
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };
  
  cards.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
  });
  
  return () => {
    cards.forEach(card => {
      card.removeEventListener('mousemove', handleMouseMove);
    });
  };
}, []);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="section-subtitle">MES EXPERTISES</div>
          <h2 className="section-title">
            <span className="title-line">Services</span>
            <span className="title-line">
              <span className="highlight">Créatifs</span>
            </span>
          </h2>
          <p className="services-description">
            Je propose une gamme complète de services de design pour transformer 
            vos idées en réalités visuelles impactantes.
          </p>
        </div>

        {/* Grille des services */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''} ${activeService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id)}
              style={{ '--service-color': service.color }}
            >
              {/* Badge populaire */}
              {service.popular && (
                <div className="popular-badge" style={{ background: service.color }}>
                  <span>⭐</span> Populaire
                </div>
              )}

              {/* Header de la carte */}
              <div className="service-header">
                <div 
                  className="service-icon"
                  style={{ 
                    background: service.gradient,
                    boxShadow: `0 10px 30px ${service.color}40`
                  }}
                >
                  <span className="icon-emoji">{service.icon}</span>
                </div>
                <div className="service-title-wrapper">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-price">{service.price}</div>
                </div>
              </div>

              {/* Description */}
              <p className="service-description">{service.description}</p>

              {/* Features (apparaît quand actif) */}
              <div className={`service-features ${activeService === service.id ? 'show' : ''}`}>
                <h4 className="features-title">Ce qui est inclus :</h4>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check" style={{ color: service.color }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton action */}
              <div className="service-actions">
                <button 
                  className="service-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                  style={{ 
                    background: service.gradient,
                    color: 'white'
                  }}
                >
                  Discuter du projet
                </button>
              </div>

              {/* Effet hover */}
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Prêt à donner vie à votre projet ?</h3>
            <p>
              Discutons de vos besoins et créons ensemble quelque chose d'extraordinaire.
              <br />
              <span className="highlight-text">Premier appel découverte offert !</span>
            </p>
            
            <div className="cta-buttons">
              <button 
                className="cta-button primary"
                onClick={handleContactClick}
              >
                Commencer un projet
              </button>
              <button 
                className="cta-button secondary"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;