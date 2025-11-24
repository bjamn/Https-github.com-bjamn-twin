import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/content.json');
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return <section id="testimonials" className="py-24 bg-zinc-950 text-white">Loading testimonials...</section>;
  }

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
            <span className="font-serif text-gold-400 uppercase tracking-[0.2em] text-sm">Wall of Love</span>
            <h2 className="font-script text-6xl md:text-8xl mt-4">Word on the Street</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {testimonials.map((testimonial) => (
                <div 
                    key={testimonial.id} 
                    className="w-full md:w-[350px] flex flex-col group"
                    onMouseEnter={() => testimonial.videoUrl && setActiveVideo(testimonial.id)}
                    onMouseLeave={() => setActiveVideo(null)}
                >
                    <div className="relative aspect-[3/4] w-full bg-zinc-900 overflow-hidden mb-6 shadow-2xl shadow-black">
                        {activeVideo === testimonial.id && testimonial.videoUrl ? (
                            <video 
                                src={testimonial.videoUrl} 
                                className="w-full h-full object-cover"
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                            />
                        ) : (
                            <img 
                                src={testimonial.videoThumbnail} 
                                alt={`Video testimonial from ${testimonial.celebrityName}`}
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                            />
                        )}
                        
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          {!activeVideo && testimonial.videoUrl && (
                            <div className="w-16 h-16 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-xs font-serif uppercase tracking-widest text-gold-400 mb-1">
                                {testimonial.role}
                            </div>
                            <div className="font-serif text-2xl leading-none">
                                {testimonial.celebrityName}
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center px-4">
                        <p className="font-serif italic text-gray-400 text-lg leading-relaxed">
                            "{testimonial.quote}"
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center">
            <p className="font-script text-3xl text-gray-500">Trusted by the icons you love.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
