import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import About from './pages/About';

import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;