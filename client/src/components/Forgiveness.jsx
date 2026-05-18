import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Forgiveness = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [forgiven, setForgiven] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNoInteraction = () => {
    if (forgiven) return;
    
    // Move the "No" button randomly
    const newX = (Math.random() - 0.5) * (isMobile ? 150 : 300);
    const newY = (Math.random() - 0.5) * (isMobile ? 150 : 300);
    setNoPosition({ x: newX, y: newY });
    
    // Increase "Yes" button size
    setYesScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleYesClick = () => {
    setForgiven(true);
    
    // Confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 relative overflow-hidden px-4">
      {!forgiven ? (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center z-10 flex flex-col items-center"
        >
          <img src="/unicorn.png" alt="Pleading Unicorn" className="w-48 h-48 mb-8 object-contain drop-shadow-xl" />
          <h2 className="text-5xl md:text-7xl handwritten text-chocolate mb-12">
            Will you forgive me?
          </h2>
          
          <div className="flex items-center justify-center gap-8 md:gap-16 w-full max-w-md h-40">
            <motion.button
              animate={{ scale: yesScale }}
              whileHover={{ scale: yesScale * 1.05 }}
              whileTap={{ scale: yesScale * 0.95 }}
              onClick={handleYesClick}
              className="bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl md:text-2xl z-20 whitespace-nowrap border-2 border-white"
            >
              YES! 💖
            </motion.button>
            
            <motion.button
              animate={{ x: noPosition.x, y: noPosition.y }}
              onHoverStart={!isMobile ? handleNoInteraction : undefined}
              onClick={isMobile ? handleNoInteraction : undefined}
              className="bg-red-400 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl md:text-2xl whitespace-nowrap border-2 border-white"
            >
              No 😤
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-center z-10 bg-white p-8 md:p-16 rounded-3xl shadow-2xl border-4 border-pink-200"
        >
          <div className="text-6xl mb-6">🎉🥳🥰</div>
          <h2 className="text-5xl md:text-7xl handwritten text-pink-500 mb-6">
            YAYYY! I love you!
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-md mx-auto">
            Thank you for forgiving me, my cutu pie. I promise to shower you with all the attention, love, and Oreo Silk you deserve!
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Forgiveness;
