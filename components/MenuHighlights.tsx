import React from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItemCategory } from '../types';

const MenuHighlights: React.FC = () => {
  const signatureDish = MENU_ITEMS.find(item => item.category === MenuItemCategory.SIGNATURE);
  const otherDishes = MENU_ITEMS.filter(item => item.category !== MenuItemCategory.SIGNATURE);

  return (
    <section id="menu" className="py-24 bg-black text-white relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Signature Dish Spotlight */}
        <div id="signature" className="mb-32">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gold-400/20 blur-lg group-hover:bg-gold-400/30 transition-all duration-500"></div>
                        <img 
                            src={signatureDish?.imageUrl} 
                            alt={signatureDish?.title} 
                            className="relative w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
                        />
                         <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                            <p className="font-script text-4xl text-gold-400">The Signature</p>
                         </div>
                    </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                        {signatureDish?.title}
                    </h2>
                    <div className="h-1 w-24 bg-gold-400 mx-auto lg:mx-0 mb-8"></div>
                    <p className="font-sans text-xl text-gray-300 leading-relaxed mb-8 font-light">
                        {signatureDish?.description}
                    </p>
                    <p className="font-serif italic text-gold-400 text-lg">
                        "We don't call it Shrimp and Grits here. The grits are the star."
                    </p>
                </div>
            </div>
        </div>

        {/* Other Menu Items Grid */}
        <div className="text-center mb-16">
            <h3 className="font-script text-5xl mb-4">Southern Classics</h3>
            <p className="font-serif text-gray-400 uppercase tracking-widest text-sm">Curated with Love</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {otherDishes.map((item) => (
                <div key={item.id} className="group relative h-[400px] overflow-hidden cursor-pointer">
                    <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border border-white/10 m-4 group-hover:border-gold-400/50 transition-colors duration-500">
                        <h4 className="font-serif text-3xl md:text-4xl mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {item.title}
                        </h4>
                        <p className="font-sans text-gray-300 max-w-sm opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;