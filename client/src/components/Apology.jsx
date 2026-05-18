import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Apology = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-50/50 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-pink-200 text-6xl opacity-50 rotate-12">💌</div>
      <div className="absolute bottom-20 right-10 text-pink-200 text-6xl opacity-50 -rotate-12">✏️</div>
      
      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="cursor-pointer bg-white p-8 rounded-lg shadow-xl border-4 border-dashed border-pink-200 flex flex-col items-center justify-center relative z-20 w-64 h-48"
        >
          <div className="text-4xl mb-4">✉️</div>
          <p className="handwritten text-2xl text-chocolate text-center">A note for you...</p>
          <p className="text-xs text-gray-400 mt-2">(Tap to open)</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-2xl bg-[#fdfbf7] p-8 md:p-12 rounded-sm shadow-2xl relative z-20"
          style={{ backgroundImage: 'linear-gradient(transparent 95%, #fce4ec 5%)', backgroundSize: '100% 2rem' }}
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl font-bold font-sans"
          >
            ✕
          </button>
          
          <h2 className="text-3xl md:text-5xl handwritten text-chocolate mb-8 pl-4" style={{ lineHeight: '2rem' }}>
            My dearest Sreeparna, my babyy my puchuu,
          </h2>
          
          <div className="space-y-6 text-xl md:text-3xl text-gray-700 handwritten px-4" style={{ lineHeight: '2rem' }}>
            <p>
              I am so, so incredibly sorry for this morning. 
              <span className="line-through opacity-50 ml-2">I was sleeping</span> 
              <span> No, there are no excuses. I was distracted and I didn't pay attention to you when you needed me the most.</span>
            </p>
            <p>
              Seeing you upset completely breaks my heart. Your smile is literally the best part of my day, and knowing I was the reason it faded this morning makes me feel terrible. 
            </p>
            <p>
              You mean the entire world to me. I promise to be better, to listen closer, and to always prioritize you. You deserve all the love, all the attention, and a boyfriend who is always there for you.
            </p>
            <p className="pt-4 text-right">
              Yours forever, <br/>
              <span className="text-4xl text-pink-500">Ishan</span> ❤️
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Apology;
