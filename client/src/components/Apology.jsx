import React from 'react';
import { motion } from 'framer-motion';

const Apology = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white/40 py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-pink-100 border-4 border-pink-50 relative"
      >
        <div className="absolute -top-6 -left-6 text-6xl">💌</div>
        <h2 className="text-4xl md:text-6xl handwritten text-chocolate mb-6 text-center">
          I'm So Sorry...
        </h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          <p>
            My dearest Sreeparna, I am so incredibly sorry for not paying attention to you this morning when you needed me. 
          </p>
          <p>
            You are my priority, and I was foolish to let anything else distract me. You deserve all the love, care, and attention in the universe, especially in those moments when you just need your boyfriend to be there for you.
          </p>
          <p>
            I promise to do better, listen better, and love you better. You mean everything to me.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Apology;
