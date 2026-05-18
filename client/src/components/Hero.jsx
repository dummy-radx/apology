import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl handwritten text-pink-500 mb-4 drop-shadow-sm">
          For Sreeparna
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-lg mx-auto font-medium">
          The most precious girl in the whole wide world 🥺
        </p>
      </motion.div>

      {/* Floating Hearts Background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-50"
          initial={{
            y: "110vh",
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: "-10vh",
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <Heart size={32} fill="currentColor" />
        </motion.div>
      ))}
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 text-pink-400"
      >
        <p className="text-sm uppercase tracking-widest font-bold opacity-70">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
