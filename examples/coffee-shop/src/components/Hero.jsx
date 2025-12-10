import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-coffee-espresso to-coffee-dark text-coffee-cream min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-8xl mb-6">
          ☕
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-serif">
          The Cozy Cup
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-coffee-latte">
          Artisan Coffee & Fresh Pastries
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-accent-warm hover:bg-accent-gold text-coffee-dark px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl">
            View Menu
          </a>
          <a
            href="#hours"
            className="border-2 border-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark text-coffee-cream px-8 py-3 rounded-lg font-bold transition-all">
            Hours & Location
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-coffee-latte">
          <p className="text-sm">Open Daily • 7AM - 7PM</p>
        </motion.div>
      </div>
    </section>
  );
}
