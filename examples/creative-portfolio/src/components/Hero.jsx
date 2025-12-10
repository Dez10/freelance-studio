import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
      <div className="text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-coral to-accent-teal flex items-center justify-center text-5xl">
            📸
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 font-display bg-gradient-to-r from-white via-accent-purple to-accent-teal bg-clip-text text-transparent">
          Alex Morgan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-4 text-gray-300">
          Photographer & Visual Artist
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
          Specializing in portraits, events, and editorial photography. Based in
          NYC, available worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent-coral hover:bg-accent-coral/80 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl">
            View Portfolio
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-dark-900 text-white px-8 py-4 rounded-full font-semibold transition-all">
            Book a Session
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20">
          <a
            href="#projects"
            className="text-gray-500 hover:text-white transition-colors">
            <div className="animate-bounce">↓</div>
            <p className="text-sm mt-2">Scroll to explore</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
