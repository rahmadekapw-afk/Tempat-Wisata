import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
