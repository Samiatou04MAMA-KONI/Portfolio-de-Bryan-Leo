import React, { useState, useEffect } from 'react';
import { 
  skillCategories, 
  designSkills, 
  uiuxSkills, 
  softwareSkills, 
  technicalSkills,
  methodologies,
  certifications
} from '../data/skills';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  // Animation des barres de compétences
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(designSkills.map(skill => skill.name));
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let skillsToAnimate = [];
    switch (activeCategory) {
      case 1: skillsToAnimate = designSkills; break;
      case 2: skillsToAnimate = uiuxSkills; break;
      case 3: skillsToAnimate = softwareSkills; break;
      case 4: skillsToAnimate = technicalSkills; break;
      default: skillsToAnimate = designSkills;
    }
    
    const timer = setTimeout(() => {
      setAnimatedSkills(skillsToAnimate.map(skill => skill.name));
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getActiveSkills = () => {
    switch (activeCategory) {
      case 1: return designSkills;
      case 2: return uiuxSkills;
      case 3: return softwareSkills;
      case 4: return technicalSkills;
      default: return designSkills;
    }
  };

  const getCategoryTitle = () => {
    const category = skillCategories.find(cat => cat.id === activeCategory);
    return category ? category.title : "Compétences";
  };

  const getCategoryDescription = () => {
    const category = skillCategories.find(cat => cat.id === activeCategory);
    return category ? category.description : "";
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="section-subtitle">MON EXPERTISE</div>
          <h2 className="section-title">
            <span className="title-line">Compétences</span>
            <span className="title-line">
              <span className="highlight">& Expertises</span>
            </span>
          </h2>
          <p className="skills-description">
            Un mélange équilibré de créativité artistique et de compétences techniques 
            pour créer des designs qui allient esthétique et fonctionnalité.
          </p>
        </div>

        {/* Catégories de compétences */}
        <div className="categories-container">
          <div className="categories-grid">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ 
                  '--category-color': category.color,
                  background: category.gradient
                }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <div className="category-indicator"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Grille des compétences */}
        <div className="skills-content">
          <div className="skills-main">
            <div className="skills-header-row">
              <h3 className="skills-category-title">{getCategoryTitle()}</h3>
              <p className="skills-category-description">{getCategoryDescription()}</p>
            </div>

            {/* Barres de compétences */}
            <div className="skills-bars">
              {getActiveSkills().map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name">
                      {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                      {skill.name}
                    </div>
                    <div className="skill-percentage">{skill.level}%</div>
                  </div>
                  
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar"
                      style={{
                        width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color || '#FF6B6B',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="skill-bar-glow"></div>
                    </div>
                    <div className="skill-bar-background"></div>
                  </div>
                  
                  {/* Points de repère */}
                  <div className="skill-milestones">
                    {[0, 25, 50, 75, 100].map((milestone) => (
                      <div 
                        key={milestone} 
                        className={`skill-milestone ${skill.level >= milestone ? 'reached' : ''}`}
                        style={{ left: `${milestone}%` }}
                      >
                        <div className="milestone-dot"></div>
                        <span className="milestone-label">{milestone}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Légende */}
            <div className="skills-legend">
              <div className="legend-item">
                <div className="legend-color beginner"></div>
                <span>Débutant (0-40%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color intermediate"></div>
                <span>Intermédiaire (40-70%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color advanced"></div>
                <span>Avancé (70-90%)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color expert"></div>
                <span>Expert (90-100%)</span>
              </div>
            </div>
          </div>

          {/* Méthodologies */}
          <div className="skills-sidebar">
            <div className="methodologies-section">
              <h3 className="sidebar-title">Méthodologies</h3>
              <div className="methodologies-list">
                {methodologies.map((method) => (
                  <div key={method.id} className="methodology-card">
                    <h4 className="methodology-title">{method.title}</h4>
                    <p className="methodology-description">{method.description}</p>
                    <div className="methodology-steps">
                      {method.steps.map((step, idx) => (
                        <div key={idx} className="methodology-step">
                          <div className="step-number">{idx + 1}</div>
                          <span className="step-name">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="certifications-section">
              <h3 className="sidebar-title">Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert) => (
                  <div key={cert.id} className="certification-card">
                    <div className="certification-logo">
                      <img src={cert.logo} alt={cert.issuer} />
                    </div>
                    <div className="certification-info">
                      <h4 className="certification-title">{cert.title}</h4>
                      <div className="certification-details">
                        <span className="certification-issuer">{cert.issuer}</span>
                        <span className="certification-year">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats globales */}
        <div className="skills-stats">
          <div className="stats-card">
            <div className="stats-icon">🎨</div>
            <div className="stats-content">
              <div className="stats-number">12+</div>
              <div className="stats-label">Outils maîtrisés</div>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">📚</div>
            <div className="stats-content">
              <div className="stats-number">3</div>
              <div className="stats-label">Méthodologies</div>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">🏆</div>
            <div className="stats-content">
              <div className="stats-number">{certifications.length}</div>
              <div className="stats-label">Certifications</div>
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-icon">⚡</div>
            <div className="stats-content">
              <div className="stats-number">90%</div>
              <div className="stats-label">Moyenne compétences</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="skills-cta">
          <div className="cta-content">
            <h3>Une expertise au service de votre projet</h3>
            <p>
              Chaque projet est l'occasion d'appliquer cette expertise diversifiée 
              pour créer quelque chose d'unique et d'efficace.
            </p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Utiliser mon expertise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;