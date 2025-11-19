import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/southernfooddark/1920/1080" 
          alt="Dark aesthetic food background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="font-serif text-gold-400 tracking-[0.3em] uppercase text-sm md:text-lg mb-4 animate-fade-in-up">
          Caterer to the Stars
        </p>
        <h1 className="font-script text-7xl md:text-9xl lg:text-[10rem] leading-tight mb-6 text-white drop-shadow-2xl animate-fade-in">
          With Love, Twin
        </h1>
        <p className="font-serif text-xl md:text-3xl font-light text-gray-200 mb-12 max-w-2xl mx-auto italic">
          "Where Southern elegance meets homemade soul."
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="#signature" 
              className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-serif uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Experience the Taste
            </a>
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
