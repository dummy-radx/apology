import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
  { id: 1, image: '/memory_holding_hands.png', realImage: '/photo1-walkingtogether.png', caption: 'Walking together ❤️', rotate: -6 },
  { id: 2, image: '/memory_coffee_date.png', realImage: '/photo2-coffeedats.jpeg', caption: 'Best coffee dates', rotate: 4 },
  { id: 3, image: '/memory_sunset.png', realImage: '/photo3-sunsets.jpeg', caption: 'Sunsets with you', rotate: -3 },
  { id: 4, image: '/memory_first_kiss.png', realImage: '/photo4-kissingyou.jpeg', caption: 'Kissing you 💋', rotate: 5 },
  { id: 5, image: '/memory_first_vacation.png', realImage: '/photo5-firstvacation.jpeg', caption: 'First vacation together 🏖️', rotate: -4 },
  { id: 6, image: '/memory_first_anniversary.png', realImage: '/photo6-firstanniversary.jpg', caption: 'First anniversary 🎂', rotate: 2 },
];

const Memories = () => {
  const [activeMemory, setActiveMemory] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Automatically flip the polaroid to reveal the real photo after a short delay
  useEffect(() => {
    if (activeMemory) {
      setIsFlipped(false);
      const timer = setTimeout(() => setIsFlipped(true), 600);
      return () => clearTimeout(timer);
    }
  }, [activeMemory]);

  return (
    <section className="min-h-screen py-24 px-4 bg-orange-50/30 flex flex-col items-center justify-center relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl handwritten text-pink-500 mb-4 text-center z-10"
      >
        My Favorite Memories...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-gray-500 text-sm md:text-base italic z-10 mb-12 text-center"
      >
        (Tap the photos to see the real memories!)
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mt-8">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.5, y: 50, rotate: memory.rotate }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: memory.rotate }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: "spring", bounce: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveMemory(memory)}
            className="bg-white p-4 pb-12 shadow-xl border border-gray-200 cursor-pointer w-64 md:w-80"
          >
            <img src={memory.image} alt="Memory" className="w-full aspect-square object-cover rounded-sm pointer-events-none" />
            <p className="handwritten text-xl md:text-3xl text-center text-gray-700 mt-4 pointer-events-none">{memory.caption}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative max-w-md md:max-w-xl w-full"
              style={{ perspective: 1000 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveMemory(null)}
                className="absolute -top-4 -right-4 bg-white text-gray-500 hover:text-pink-500 rounded-full w-10 h-10 shadow-md flex items-center justify-center font-bold text-xl z-60"
              >
                ✕
              </button>
              
              <motion.div
                className="w-full relative cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front (Illustration) */}
                <div 
                  className="bg-white p-5 md:p-6 pb-16 md:pb-20 shadow-2xl w-full" 
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <img src={activeMemory.image} alt="Memory Illustration" className="w-full aspect-square object-cover rounded-sm border border-gray-100" />
                  <p className="handwritten text-3xl md:text-5xl text-center text-gray-800 mt-4 md:mt-6">{activeMemory.caption}</p>
                </div>

                {/* Back (Real Photo) */}
                <div 
                  className="absolute top-0 left-0 bg-white p-5 md:p-6 pb-16 md:pb-20 shadow-2xl w-full h-full" 
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img src={activeMemory.realImage} alt="Real Memory" className="w-full aspect-square object-cover rounded-sm border border-gray-100" />
                  <p className="handwritten text-3xl md:text-5xl text-center text-gray-800 mt-4 md:mt-6">{activeMemory.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Memories;
