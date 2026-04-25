import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Effet pour le bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = {
    navigation: [
      { name: 'Portfolio', id: 'portfolio' },
      { name: 'Services', id: 'services' },
      { name: 'À Propos', id: 'about' },
      { name: 'Contact', id: 'contact' }
    ],
    services: [
      { name: 'Identité Visuelle', id: 'services' },
      { name: 'Design Print', id: 'services' },
      { name: 'Illustration', id: 'services' },
      { name: 'Consulting', id: 'services' }
    ],
    resources: [
      { name: 'Blog (à venir)', href: '#blog' },
      { name: 'Tutoriels', href: '#tutorials' },
      { name: 'Ressources Gratuites', href: '#resources' },
      { name: 'Outils Recommandés', href: '#tools' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* Wave separator */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-main">
          {/* Logo & Description */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => scrollToSection('hero')}>
              {/* Logo */}
        <div className="logo" onClick={() => scrollToSection('hero')} role="button" tabIndex={0}>
          <img src="./logo.jpeg" alt="Bryan Design Logo" 
                className="logo-image"
                loading="lazy" />
        </div>
              <div className="logo-dot"></div>
            </div>
            <p className="footer-description">
              Je transforme vos idées en expériences visuelles mémorables.
              Graphiste designer spécialisé en identité visuelle et UI/UX.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links">
            <div className="link-column">
              <h4 className="column-title">Navigation</h4>
              <ul className="link-list">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="footer-link"
                      onClick={() => scrollToSection(link.id)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Services</h4>
              <ul className="link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="footer-link"
                      onClick={() => scrollToSection(link.id)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



        {/* Divider */}

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} <span className="highlight-name">Bryan Léo DAN</span>. Tous droits réservés.
          </div>
          
          
        </div>

        {/* Back to top */}
        <button 
          className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={() => scrollToSection('hero')}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;