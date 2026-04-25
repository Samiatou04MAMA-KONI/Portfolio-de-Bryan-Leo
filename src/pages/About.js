import React, { useState } from 'react';
import { 
  aboutData, 
  experiences, 
  educations, 
  //passions, 
} from '../data/about';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

 
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header avec titre créatif */}
        <div className="about-header">
          <div className="section-subtitle">MON PARCOURS</div>
          <h2 className="section-title">
            <span className="title-line">À Propos</span>
            <span className="title-line">
              <span className="highlight">de Moi</span>
            </span>
          </h2>
          <p className="about-intro">
            Plus qu'un designer, je suis un storyteller visuel passionné par la création 
            d'expériences mémorables.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="about-content">
          {/* Colonne gauche - Photo et stats */}
          <div className="about-left">
            {/* Photo avec effet créatif */}
            <div className="photo-container">
              <div 
                className="profile-photo"
                style={{ backgroundImage: `url(${aboutData.image})` }}
              >
                <div className="photo-frame"></div>
                <div className="photo-dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                </div>
              </div>
              
              {/* Stats en overlay */}
              <div className="stats-overlay">
                <div className="stats-grid">
                  {aboutData.stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Citations */}
            <div className="philosophy-card">
              <div className="quote-icon">"</div>
              <p className="philosophy-text">{aboutData.philosophy}</p>
              <div className="signature">— Bryan</div>
            </div>
          </div>

          {/* Colonne droite - Contenu texte */}
          <div className="about-right">
            {/* Bio */}
            <div className="bio-section">
              <h3 className="bio-title">Bonjour, je suis {aboutData.name} 👋</h3>
              <p className="bio-text">{aboutData.bio}</p>
              <div className="bio-tags">
                <span className="bio-tag">Créatif</span>
                <span className="bio-tag">Passionné</span>
                <span className="bio-tag">Minutieux</span>
                <span className="bio-tag">Innovant</span>
              </div>
            </div>

            {/* Tabs pour expérience/formation */}
            <div className="tabs-section">
              <div className="tabs-header">
                <button 
                  className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Expérience
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Formation
                </button>
              </div>

              <div className="tabs-content">
                {activeTab === 'experience' ? (
                  <div className="timeline">
                    {experiences.map((exp) => (
                      <div key={exp.id} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-year">{exp.year}</div>
                          <h4 className="timeline-title">{exp.title}</h4>
                          <div className="timeline-company">{exp.company}</div>
                          <p className="timeline-description">{exp.description}</p>
                          <div className="timeline-skills">
                            {exp.skills.map((skill, idx) => (
                              <span key={idx} className="skill-tag">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="education-list">
                    {educations.map((edu) => (
                      <div key={edu.id} className="education-item">
                        <div className="education-year">{edu.year}</div>
                        <h4 className="education-title">{edu.title}</h4>
                        <div className="education-school">{edu.school}</div>
                        <p className="education-description">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Passions */}
            {/* <div className="passions-section">
              <h3 className="passions-title">Mes Passions</h3>
              <div className="passions-grid">
                {passions.map((passion) => (
                  <div key={passion.id} className="passion-card">
                    <div className="passion-icon">{passion.icon}</div>
                    <h4 className="passion-title">{passion.title}</h4>
                    <p className="passion-description">{passion.description}</p>
                  </div>
                ))}
              </div>
            </div>
             */}
          </div>
        </div>


        {/* CTA */}
        <div className="about-cta">
          <p>Envie de découvrir comment je peux transformer votre projet ?</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;