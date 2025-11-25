import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let hasInteracted = false;

    const handleInteraction = () => {
      hasInteracted = true;
      clearTimeout(timeout);
    };

    // Set up interaction listeners
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      window.addEventListener(event, handleInteraction);
    });

    // Auto-scroll after 10 seconds if no interaction
    timeout = setTimeout(() => {
      if (!hasInteracted) {
        const menuSection = document.querySelector('#menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 10000);

    return () => {
      clearTimeout(timeout);
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/IMG_5534.jpeg"
          alt="A close-up of delicious Grits and Shrimp in a bowl"
          className="w-full h-full object-cover object-center animate-ken-burns opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">

        {/* Logo Graphic - Background Layer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] md:w-[60rem] lg:w-[80rem] opacity-20 pointer-events-none z-0 select-none">
          <img src="/logo-graphic.png" alt="Fork and Spoon Logo" className="w-full h-auto invert" />
        </div>

        {/* Text Content - Foreground Layer */}
        <div className="relative z-10 text-center">
          <p className="font-serif text-gold-400 tracking-[0.3em] uppercase text-sm md:text-lg mb-4 animate-fade-in-up">
            Made from the Heart
          </p>
          <h1 className="font-script text-7xl md:text-9xl lg:text-[11rem] leading-none mb-8 text-white drop-shadow-2xl animate-fade-in">
            With Love, Twin
          </h1>
          <p className="font-serif text-xl md:text-3xl font-light text-gray-200 mb-12 max-w-2xl mx-auto italic relative">
            "Where Southern elegance meets homemade soul."
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative">
            <a
              href="#menu"
              className="px-10 py-4 border border-white/30 bg-black/20 backdrop-blur-sm text-white font-serif uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Experience the Taste
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
