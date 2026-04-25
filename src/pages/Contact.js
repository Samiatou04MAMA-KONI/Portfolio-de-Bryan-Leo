import React, { useState } from 'react';
import { contactInfo, socialLinks, faqs } from '../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

const Contact = () => {
  
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFaqToggle = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copié dans le presse-papier:', text);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="section-subtitle">PRÊT À CRÉER</div>
          <h2 className="section-title">
            <span className="title-line">Contact</span>
            <span className="title-line">
              <span className="highlight">& Collaborons</span>
            </span>
          </h2>
          <p className="contact-intro">
            Discutons de votre projet et créons ensemble quelque chose d'extraordinaire.
          </p>
        </div>

        <div className="contact-content">
          {/* Carte contact */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-avatar">
                <div className="avatar-placeholder"><img src="logo.jpeg" alt="Logo" /></div>
                <div className="avatar-status"></div>
              </div>
              <div className="contact-identity">
                <h3>Bryan</h3>
                <p>Graphiste Designer</p>
                <div className="availability-badge">
                  <span className="status-dot"></span>
                  {contactInfo.availability}
                </div>
              </div>
            </div>

            {/* Infos de contact */}
            <div className="contact-details">
              <a
                href={`mailto:${contactInfo.email}`}
                className="contact-item"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-icon">✉️</div>
                <div className="contact-item-content">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{contactInfo.email}</div>
                </div>
                <button className="copy-btn" title="Copier l'email" onClick={(e) => { e.preventDefault(); copyToClipboard(contactInfo.email); }}>📋</button>
              </a>

              <a
                href={`https://wa.me/${contactInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
    "Bonjour, je suis intéressé(e) par vos services de graphisme. Pourrions-nous discuter ?"
  )}`}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-icon">📱</div>
                <div className="contact-item-content">
                  <div className="contact-label">Whatsapp</div>
                  <div className="contact-value">{contactInfo.phone}</div>
                </div>
                <button className="copy-btn" title="Copier le numéro" onClick={(e) => { e.preventDefault(); copyToClipboard(contactInfo.phone); }}>📋</button>
              </a>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-item-content">
                  <div className="contact-label">Localisation</div>
                  <div className="contact-value">{contactInfo.address}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏱️</div>
                <div className="contact-item-content">
                  <div className="contact-label">Temps de réponse</div>
                  <div className="contact-value">{contactInfo.responseTime}</div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="social-section">
              <h4>Suivez-moi</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon"><FontAwesomeIcon icon={social.icon} /></span>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-handle">{social.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-section">
            <h3>Questions fréquentes</h3>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                  onClick={() => handleFaqToggle(faq.id)}
                >
                  <div className="faq-question">
                    {faq.question}
                    <span className="faq-toggle">{activeFaq === faq.id ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;