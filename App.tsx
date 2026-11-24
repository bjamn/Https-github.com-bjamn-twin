import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
// import ChatWidget from './components/ChatWidget';
import OwnerBio from './components/OwnerBio';
import QrPage from './components/QrPage';

const isQrPage = () => window.location.pathname.replace(/\/+$/, '') === '/qr';

const App: React.FC = () => {
  if (isQrPage()) {
    return <QrPage />;
  }

  return (
    <div className="min-h-screen bg-black selection:bg-gold-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <Testimonials />
        <OwnerBio />
        <Contact />
      </main>
      {/* <ChatWidget /> */}
    </div>
  );
};

export default App;
