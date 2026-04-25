import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Utilisation de useMemo pour éviter la recréation à chaque rendu
  const navItems = useMemo(() => [
    { name: 'Accueil', id: 'hero' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'À Propos', id: 'about' },
    //{ name: 'Compétences', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ], []); // Tableau de dépendances vide = créé une seule fois

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      // Detection de la section active
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
      
      // Navbar scrolled
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Déclencher une première fois pour l'état initial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]); // navItems dans les dépendances (maintenant stable grâce à useMemo)

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo" onClick={() => scrollToSection('hero')} role="button" tabIndex={0}>
            <img src="./logo.jpeg" alt="Bryan Design Logo" 
                  className="logo-image"
                  loading="lazy" />
          </div>

          {/* Menu Desktop */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Aller à la section ${item.name}`}
                  type="button"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Bouton Contact Desktop */}
          <button 
            className="nav-contact-btn"
            onClick={() => scrollToSection('contact')}
            aria-label="Aller à la section contact"
            type="button"
          >
            Travaillons ensemble
          </button>

          {/* Menu Mobile Toggle */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Menu Mobile — en dehors de <nav> pour éviter le clipping */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button 
            key={item.id}
            className="mobile-nav-link"
            onClick={() => scrollToSection(item.id)}
            type="button"
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;