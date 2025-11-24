import React, { useState, useEffect } from 'react';
import { OwnerBioData } from '../types';

const OwnerBio: React.FC = () => {
    const [bioData, setBioData] = useState<OwnerBioData | null>(null);

    useEffect(() => {
        const fetchBioData = async () => {
            try {
                const response = await fetch('/content.json');
                const data = await response.json();
                setBioData(data.ownerBio);
            } catch (error) {
                console.error("Failed to fetch bio data:", error);
            }
        };

        fetchBioData();
    }, []);

    if (!bioData) {
        return <section id="bio" className="py-24 bg-zinc-950 text-white">Loading bio...</section>;
    }

    return (
        <section id="bio" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-20">
                    {/* Image Side */}
                    <div className="w-full md:w-5/12 relative min-h-[500px] md:min-h-auto">
                        {/* Stylistic Effects */}
                        <div className="absolute inset-0 border-2 border-silver-400/50 transform translate-x-4 translate-y-4"></div>
                        <div className="absolute inset-0 border-2 border-silver-400/20 transform -translate-x-4 -translate-y-4"></div>

                        <div className="relative h-full w-full shadow-2xl shadow-black/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                                src="/cheryl-full.jpg"
                                alt={bioData.name}
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-7/12 flex flex-col justify-center py-8">
                        <h2 className="font-serif text-silver-200 tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                            {bioData.title}
                        </h2>
                        <h1 className="font-serif text-5xl md:text-7xl mb-8 text-white">
                            {bioData.name}
                        </h1>

                        <div className="h-px w-32 bg-silver-400 mb-8"></div>

                        <blockquote className="font-script text-3xl md:text-4xl text-silver-300 leading-relaxed mb-8">
                            "{bioData.quote}"
                        </blockquote>

                        {bioData.paragraphs.map((paragraph, index) => (
                            <p key={index} className={`font-serif text-gray-400 text-lg leading-relaxed ${index === bioData.paragraphs.length - 1 ? '' : 'mb-6'}`}>
                                {paragraph}
                            </p>
                        ))}

                        <div className="mt-10">
                            <img src="/logo-full.jpg" alt="With Love, Twin Logo" className="w-full h-auto opacity-90" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnerBio;
