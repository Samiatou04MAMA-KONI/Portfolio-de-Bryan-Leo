// Import des icônes FontAwesome
import { 
  faLinkedin, 
  faInstagram,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

export const contactInfo = {
  email: "danboomleo@gmail.com",
  phone: "+229 01 58 57 72 31",
  address: "Cotonou, Bénin",
  availability: "Disponible pour de nouveaux projets",
  responseTime: "Sous 24h"
};

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: faLinkedin, // Icône FontAwesome au lieu d'émoji
    url: "https://www.linkedin.com/in/bryan-l%C3%A9o-dan-711071377",
    color: "#0077B5",
    handle: "@bryan"
  },

  {
    id: 4,
    name: "Facebook",
    icon: faFacebook, // Icône FontAwesome au lieu d'émoji
    url: "https://www.facebook.com/profile.php?id=61583027137781&mibextid=wwXIfr&mibextid=wwXIfr",
    color: "blue",
    handle: "@bryan"
  },
  
  {
    id: 4,
    name: "Instagram",
    icon: faInstagram, // Icône FontAwesome au lieu d'émoji
    url: "https://www.instagram.com/bryan__d_b_l",
    color: "#E4405F",
    handle: "@bryan"
  }
];

export const faqs = [
  {
    id: 1,
    question: "Quel est votre délai de réponse ?",
    answer: "Je réponds généralement dans les 24 heures ouvrables. Pour les urgences, vous pouvez me joindre par téléphone."
  },
  {
    id: 2,
    question: "Proposez-vous des consultations gratuites ?",
    answer: "Oui, je propose un premier appel découverte de 30 minutes gratuit pour discuter de votre projet et voir comment je peux vous aider."
  },
  {
    id: 3,
    question: "Quels sont vos tarifs ?",
    answer: "Mes tarifs varient selon la complexité du projet. Je propose des forfaits sur mesure ainsi que des tarifs horaires. Contactez-moi pour un devis personnalisé."
  },
  {
    id: 4,
    question: "Travaillez-vous à distance ?",
    answer: "Oui, je travaille principalement à distance avec des clients du monde entier. Je suis flexible pour les visioconférences dans différents fuseaux horaires."
  }
];

export const formFields = [
  {
    id: "name",
    type: "text",
    label: "Votre nom complet",
    placeholder: "Jean Dupont",
    required: true
  },
  {
    id: "email",
    type: "email",
    label: "Votre adresse email",
    placeholder: "jean@exemple.com",
    required: true
  },
  {
    id: "phone",
    type: "tel",
    label: "Votre numéro de téléphone (optionnel)",
    placeholder: "+33 1 23 45 67 89",
    required: false
  },
  {
    id: "service",
    type: "select",
    label: "Type de service souhaité",
    options: [
      { value: "", label: "Sélectionnez un service" },
      { value: "branding", label: "Identité visuelle" },
      { value: "uiux", label: "UI/UX Design" },
      { value: "print", label: "Design Print" },
      { value: "illustration", label: "Illustration" },
      { value: "other", label: "Autre" }
    ],
    required: true
  },
  {
    id: "budget",
    type: "select",
    label: "Budget estimé",
    options: [
      { value: "", label: "Sélectionnez une fourchette" },
      { value: "1000-3000", label: "1 000€ - 3 000€" },
      { value: "3000-5000", label: "3 000€ - 5 000€" },
      { value: "5000-10000", label: "5 000€ - 10 000€" },
      { value: "10000+", label: "+10 000€" },
      { value: "unsure", label: "Je ne sais pas encore" }
    ],
    required: true
  },
  {
    id: "message",
    type: "textarea",
    label: "Votre message",
    placeholder: "Décrivez votre projet, vos objectifs, vos contraintes...",
    required: true,
    rows: 5
  }
];