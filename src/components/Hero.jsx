import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-32 px-6 text-center mt-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
        Web Design Studio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-xl md:text-2xl opacity-95 mb-8 max-w-2xl mx-auto">
        Modern, affordable business websites delivered in 24–48 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://calendly.com/destinastrong/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent-400 hover:bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105">
          📅 Book Discovery Call
        </a>

        <Link
          to="pricing"
          smooth={true}
          duration={500}
          offset={-80}
          className="bg-white hover:bg-neutral-light text-primary-700 px-8 py-4 rounded-lg font-bold text-lg transition-all cursor-pointer shadow-lg">
          View Packages
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80}
          className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all cursor-pointer">
          See Examples
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-90">
        <div className="flex items-center gap-2">
          <span className="text-accent-400 text-2xl">✓</span>
          <span>Fast Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-400 text-2xl">✓</span>
          <span>Mobile Optimized</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-400 text-2xl">✓</span>
          <span>SEO Ready</span>
        </div>
      </motion.div>
    </section>
  );
}
