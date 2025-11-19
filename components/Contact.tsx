import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white relative">
       <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
              <h2 className="font-script text-7xl mb-6">Save the Date</h2>
              <p className="font-serif text-xl text-gray-300 font-light">
                  Ready to bring a taste of the South to your next event?
              </p>
          </div>

          <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group">
                      <label className="block font-serif uppercase text-xs tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-serif focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Your name"
                      />
                  </div>
                  <div className="group">
                      <label className="block font-serif uppercase text-xs tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-serif focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="email@address.com"
                      />
                  </div>
              </div>

              <div className="group">
                  <label className="block font-serif uppercase text-xs tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-400 transition-colors">Event Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-700 py-4 text-xl font-serif focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    placeholder="Tell us about your event (Date, Guests, Location)..."
                  ></textarea>
              </div>

              <div className="text-center pt-8">
                  <button 
                    type="button"
                    className="px-12 py-5 border border-white text-white font-serif uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 text-sm"
                  >
                      Inquire Now
                  </button>
              </div>
          </form>

          <div className="mt-24 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-12 text-gray-500 font-serif text-sm">
              <p>&copy; {new Date().getFullYear()} With Love, Twin. All rights reserved.</p>
              <div className="mt-4 md:mt-0 space-x-6">
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
          </div>
       </div>
    </section>
  );
};

export default Contact;
