import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    id: 'sunflower',
    name: 'Sunflowers',
    image: '/sunflower.png',
    message: 'Because you bring sunshine into my life every single day.',
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'chocolate',
    name: 'Oreo Silk',
    image: '/oreo_silk.png',
    message: 'Something sweet, but still not as sweet as you.',
    color: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'unicorn',
    name: 'Unicorn Plushie',
    image: '/unicorn.png',
    message: 'A magical fluffy friend for the most magical girl.',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
];

const Favorites = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="py-24 px-4 min-h-screen flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl handwritten text-pink-500 mb-12 text-center"
      >
        I brought you some things...
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl w-full">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                className={`w-40 h-40 md:w-56 md:h-56 rounded-full ${item.color} border-4 ${item.borderColor} shadow-lg flex items-center justify-center p-4 cursor-pointer relative z-20`}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-md" />
              </motion.div>
              
              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 10 }}
                    exit={{ opacity: 0, scale: 0.9, y: 0 }}
                    className="absolute top-[90%] mt-2 bg-white p-4 rounded-xl shadow-xl border-2 border-pink-100 w-64 md:w-72 text-center z-50 origin-top pointer-events-none"
                  >
                    <h3 className="font-bold text-chocolate mb-1">{item.name}</h3>
                    <p className="text-gray-600 handwritten text-2xl">{item.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Show simple text - kept in flow to prevent layout shift */}
            <motion.p
              animate={{ opacity: activeItem === item.id ? 0 : 1 }}
              className="mt-4 text-chocolate font-medium handwritten text-3xl transition-opacity duration-300 pointer-events-none"
            >
              {item.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <p className="mt-16 text-gray-500 text-sm italic">Tap on the items!</p>
    </section>
  );
};

export default Favorites;
