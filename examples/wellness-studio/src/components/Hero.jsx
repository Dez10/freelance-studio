import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sage-100 via-lavender-100 to-sage-50 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-8xl mb-6">
          🌿
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-sage-800 font-serif">
          Harmony Wellness
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 text-sage-600">
          Holistic Healing Through Herbalism & Energy Work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
            Book a Session
          </a>
          <a
            href="#services"
            className="border-2 border-sage-600 hover:bg-sage-600 hover:text-white text-sage-700 px-8 py-4 rounded-full font-bold transition-all">
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center gap-8 text-sage-600">
          <div className="text-center">
            <div className="text-3xl mb-1">🧘</div>
            <p className="text-sm">Reiki</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">🌱</div>
            <p className="text-sm">Herbalism</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-1">✨</div>
            <p className="text-sm">Energy Healing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
