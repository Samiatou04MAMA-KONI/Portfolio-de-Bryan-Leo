import React, { useState, useEffect } from 'react';
import { projects, categories } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filtrer les projets
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  // Animation d'entrée
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-in');
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        {/* Header avec titre créatif */}
        <div className="portfolio-header">
          <div className="section-subtitle">MON TRAVAIL</div>
          <h2 className="section-title">
            <span className="title-line">Portfolio</span>
            <span className="title-line">
              <span className="highlight">Créatif</span>
            </span>
          </h2>
          <p className="portfolio-description">
            Une sélection de mes projets les plus significatifs. 
            Chaque création raconte une histoire unique et reflète mon approche du design.
          </p>
        </div>

        {/* Filtres */}
        <div className="portfolio-filters">
          <div className="filters-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
                data-count={category.count}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image du projet avec overlay */}
              <div className="project-image">
                <div 
                  className="image-container"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundColor: project.color
                  }}
                >
                  
                </div>
                
                {/* Badge catégorie */}
                <div className="category-badge" style={{ background: project.color }}>
                  {project.category}
                </div>
                
                {/* Badge featured */}
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐</span> Projet phare
                  </div>
                )}
              </div>

              {/* Infos du projet */}
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-client">{project.client}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Effet hover avancé */}
              <div className={`project-hover-effect ${hoveredProject === project.id ? 'active' : ''}`}>
                <div className="hover-border" style={{ borderColor: project.color }}></div>
              </div>
            </div>
          ))}
        </div>

       

        {/* CTA */}
        <div className="portfolio-cta">
          <p>Vous avez un projet en tête ? Discutons-en !</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Débutons un projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;