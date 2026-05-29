import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // Rotate every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="bg-gray-50 py-24 border-b border-gray-200 relative overflow-hidden">
      {/* Red ambient circles */}
      <div className="absolute top-0 left-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff2b2b]/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-xs font-black text-[#ff2b2b] uppercase tracking-widest">
            Client Reviews
          </h2>
          <p className="font-display text-3xl sm:text-5xl font-black tracking-tight text-[#111111] leading-none">
            Loved By Global Brands
          </p>
        </div>

        {/* Testimonials Slider Block */}
        <div className="relative bg-white border border-gray-150 rounded-3xl p-8 sm:p-14 card-shadow">
          
          {/* Big Quote Icon background */}
          <div className="absolute top-8 left-8 text-gray-50/70 select-none pointer-events-none hidden sm:block">
            <Quote className="w-40 h-40 transform -scale-x-100" />
          </div>

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 sm:space-y-8 text-left"
              >
                {/* Visual Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Comment quote text */}
                <p className="font-sans text-lg sm:text-2xl text-gray-800 leading-relaxed font-normal italic">
                  "{current.comment}"
                </p>

                {/* Reviewer identity layout */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-250">
                    <img
                      src={current.avatarUrl}
                      alt={current.name}
                      className="w-full h-full object-cover select-none animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-black text-[#111111]">{current.name}</h4>
                    <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest block mt-0.5">{current.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls and Info */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100 font-mono text-xs text-gray-400 font-bold uppercase">
              <div className="flex items-center space-x-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    id={`testimonial-dot-${idx}`}
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'bg-[#ff2b2b] w-7' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>

              {/* Slider Arrow Buttons */}
              <div className="flex items-center space-x-2.5">
                <button
                  id="testimonial-prev-arrow"
                  onClick={handlePrev}
                  className="p-2 sm:p-2.5 bg-gray-50 hover:bg-[#111111] text-gray-450 hover:text-white rounded-lg border border-gray-200 transition-all cursor-pointer"
                  title="Previous Feedback"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="testimonial-next-arrow"
                  onClick={handleNext}
                  className="p-2 sm:p-2.5 bg-gray-50 hover:bg-[#111111] text-gray-450 hover:text-white rounded-lg border border-gray-200 transition-all cursor-pointer"
                  title="Next Feedback"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
