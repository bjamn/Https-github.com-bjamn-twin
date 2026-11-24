import React, { useEffect } from 'react';

// Full-screen QR view at /qr, made to be pulled up on a phone and scanned.
const QrPage: React.FC = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Scan to visit | With Love, Twin';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Soft red glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(255, 23, 68, 0.35) 0%, rgba(183, 28, 28, 0.15) 35%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <img src="/logo-new.svg" alt="With Love, Twin" className="h-20 w-auto mb-2" />
        <h1 className="font-script text-6xl md:text-7xl mb-8">With Love, Twin</h1>

        <div className="rounded-3xl bg-white p-5 shadow-2xl ring-4 ring-gold-400/60">
          <img
            src="/withlovetwin-qr.svg"
            alt="QR code for withlovetwin.com"
            className="block w-[min(75vw,55vh,22rem)] h-auto"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        <p className="mt-8 font-serif text-sm uppercase tracking-widest text-gray-300">Scan to visit</p>
        <p className="mt-2 font-serif text-2xl text-gold-400">withlovetwin.com</p>

        <a
          href="/"
          className="mt-12 inline-flex min-h-11 items-center px-8 py-3 border border-white font-serif uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
        >
          &larr; Back to site
        </a>
      </div>
    </div>
  );
};

export default QrPage;
