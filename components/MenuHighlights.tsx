import React, { useState, useEffect } from 'react';
import { MenuItem } from '../types';

const MenuHighlights: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/content.json');
        const data = await response.json();
        setMenuItems(data.menuItems);
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const signatureDish = menuItems.find(item => item.category === 'Signature');

  if (menuItems.length === 0) {
    return <section id="menu" className="py-24 bg-black text-white">Loading menu...</section>;
  }

  return (
    <section id="menu" className="py-24 bg-black text-white relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Signature Dish Spotlight */}
        <div id="signature">
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

      </div>
    </section>
  );
};

export default MenuHighlights;