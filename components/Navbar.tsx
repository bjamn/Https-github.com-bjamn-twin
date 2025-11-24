import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo-new.svg" alt="With Love, Twin" className="h-20 md:h-28 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8">
          {['Signature', 'Bio', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-serif text-sm uppercase tracking-widest hover:text-gold-400 transition-colors border-b border-transparent hover:border-gold-400 pb-1"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="md:hidden font-serif text-xs uppercase border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
