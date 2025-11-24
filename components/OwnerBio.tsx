import React from 'react';

const OwnerBio: React.FC = () => {
    return (
        <section id="bio" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            {/* Decorative Ring mimicking the card */}
                            <div className="absolute -inset-4 rounded-full border border-silver-400/30 scale-105 animate-pulse-slow"></div>
                            <div className="relative rounded-full overflow-hidden border-4 border-silver-400 shadow-2xl shadow-silver-900/50 aspect-square max-w-md mx-auto flex justify-center items-center bg-zinc-900">
                                <img
                                    src="/cheryl-bio.jpg"
                                    alt="Cheryl Jones, Owner"
                                    className="w-full h-full object-cover object-top scale-90"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="font-serif text-silver-200 tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                            CEO / Owner
                        </h2>
                        <h1 className="font-serif text-5xl md:text-7xl mb-8 text-white">
                            Cheryl Jones
                        </h1>

                        <div className="h-px w-32 bg-silver-400 mx-auto md:mx-0 mb-8"></div>

                        <blockquote className="font-script text-3xl md:text-4xl text-silver-300 leading-relaxed mb-8">
                            "With each ingredient, with each stir, it all ends with love."
                        </blockquote>

                        <p className="font-serif text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
                            Cheryl Jones, Dallas native and a proud country girl by way of Avalon, Tx is actually a twin, singer, designer, actress, make-up artist, esthetician, stylist, home cook etc who service a coke and a smile living her dream as a proud flight attendant.
                        </p>
                        <p className="font-serif text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
                            Cheryl is taking her love of people to the kitchen with what is now her signature dish “Grits and Shrimp”. Most have enjoyed “Shrimp and grits, but C, and Cheryl has put her special touch on this dish and is making her mark with love. With rave reviews from family, friends, and some celebrity friends, Cheryl is taking the leap of faith trusting God that the net will appear, quoted by Alvin “Vinnie” Chea of Take 6.
                        </p>
                        <p className="font-serif text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                            These words of encouragement and faith buried the procrastinator in Cheryl and pushed ships in special ingredients along with local products to make her “Grits and Shrimp” an experience to remember. Kenny Chism “This is one of the best things I’ve ever put in my mouth”, Freda Blake, “Cheryl, this is something to write home about”, Rodney D. Boyden “This is best best “Grits in shrimp in the entire world”. Actress and Comedian Kym Whitley “Hot damn” “You have something here”! Experience “With love, Twin” and fall in love with the love from Cheryl Jones.
                        </p>

                        <div className="mt-10">
                            <img src="/logo-full.jpg" alt="With Love, Twin Logo" className="h-24 md:h-32 mx-auto md:mx-0 opacity-80 mix-blend-screen" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OwnerBio;
