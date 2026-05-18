import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memories = [
  { id: 1, image: '/memory_holding_hands.png', caption: 'Walking together ❤️', rotate: -6 },
  { id: 2, image: '/memory_coffee_date.png', caption: 'Best coffee dates', rotate: 4 },
  { id: 3, image: '/memory_sunset.png', caption: 'Sunsets with you', rotate: -3 },
  { id: 4, image: '/memory_first_kiss.png', caption: 'Our first kiss 💋', rotate: 5 },
  { id: 5, image: '/memory_first_vacation.png', caption: 'First vacation together 🏖️', rotate: -4 },
  { id: 6, image: '/memory_first_anniversary.png', caption: 'First anniversary 🎂', rotate: 2 },
];

const Memories = () => {
  const [activeMemory, setActiveMemory] = useState(null);

  return (
    <section className="min-h-screen py-24 px-4 bg-orange-50/30 flex flex-col items-center justify-center relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl handwritten text-pink-500 mb-16 text-center z-10"
      >
        My Favorite Memories...
      </motion.h2>

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
            <img src={memory.image} alt="Memory" className="w-full h-auto rounded-sm pointer-events-none" />
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
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50, rotate: -10 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.5, y: 50, rotate: 10 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-white p-6 pb-20 shadow-2xl max-w-md md:max-w-xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveMemory(null)}
                className="absolute -top-4 -right-4 bg-white text-gray-500 hover:text-pink-500 rounded-full w-10 h-10 shadow-md flex items-center justify-center font-bold text-xl"
              >
                ✕
              </button>
              <img src={activeMemory.image} alt="Memory Detail" className="w-full h-auto rounded-sm border border-gray-100" />
              <p className="handwritten text-4xl md:text-5xl text-center text-gray-800 mt-6">{activeMemory.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Memories;
