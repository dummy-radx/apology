import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  { id: 1, color: 'bg-blue-100', text: "Your smile lights up my entire world, even on the darkest days. ☀️" },
  { id: 2, color: 'bg-purple-100', text: "You always know exactly how to make me laugh when I'm stressed. 😂" },
  { id: 3, color: 'bg-yellow-100', text: "The cute little faces you make when you're concentrating. 🥺" },
  { id: 4, color: 'bg-green-100', text: "Just hearing your voice makes everything feel okay. 🎶" },
  { id: 5, color: 'bg-orange-100', text: "You're the only person I'd gladly share my last piece of Oreo Silk with. 🍫" },
  { id: 6, color: 'bg-teal-100', text: "How your hugs instantly melt away all my worries. 🤗" },
  { id: 7, color: 'bg-indigo-100', text: "The way your eyes sparkle when you talk about something you love. ✨" },
  { id: 8, color: 'bg-rose-100', text: "Because simply existing in the same room as you feels like home. 🏡" },
  { id: 9, color: 'bg-cyan-100', text: "You are my absolute favorite notification on my phone. 📱💖" },
  { id: 10, color: 'bg-pink-200', text: "You are my best friend, my soulmate, and my precious cutu pie. 🥰" }
];

const Reasons = () => {
  const [openEnvelope, setOpenEnvelope] = useState(null);

  return (
    <section className="min-h-screen py-24 px-4 bg-pink-100/50 flex flex-col items-center justify-center relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl handwritten text-chocolate mb-24 text-center max-w-2xl leading-relaxed"
      >
        A few reasons why you mean the world to me...
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-12 max-w-5xl">
        {reasons.map((reason, index) => (
          <div key={reason.id} className="relative w-40 h-32 md:w-56 md:h-40 cursor-pointer">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              onClick={() => setOpenEnvelope(openEnvelope === reason.id ? null : reason.id)}
              className={`absolute inset-0 rounded-lg shadow-md flex items-center justify-center border-2 border-white ${reason.color} z-20 overflow-hidden`}
              style={{ willChange: "transform" }}
            >
              <div className="text-4xl relative z-10">💌</div>
              {/* Envelope styling via CSS borders */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-60 md:border-t-80 border-t-white/40 border-l-80 md:border-l-110 border-l-transparent border-r-80 md:border-r-110 border-r-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        ))}
      </div>
      <p className="mt-32 text-gray-500 text-sm italic">Tap the envelopes to open them!</p>

      {/* Render modal in portal to avoid CSS containment issues */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {openEnvelope && (
            <div className="fixed inset-0 z-100 flex items-center justify-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/30 pointer-events-auto"
                onClick={(e) => { e.stopPropagation(); setOpenEnvelope(null); }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="relative w-[85vw] max-w-sm md:max-w-md bg-white p-6 md:p-8 rounded-sm shadow-2xl z-110 pointer-events-auto"
                style={{ backgroundImage: 'linear-gradient(transparent 95%, #fce4ec 5%)', backgroundSize: '100% 2.5rem' }}
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); setOpenEnvelope(null); }}
                  className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl font-sans cursor-pointer"
                >
                  ✕
                </button>
                <p className="handwritten text-2xl md:text-3xl text-gray-800 text-center leading-10 pt-2">
                  {reasons.find(r => r.id === openEnvelope)?.text}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Reasons;
