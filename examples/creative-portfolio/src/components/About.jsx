import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent-coral via-accent-teal to-accent-purple flex items-center justify-center text-9xl shadow-2xl">
              🎭
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Hey! I'm Alex, a photographer with 8+ years of experience
              capturing life's most beautiful moments. My style blends candid
              storytelling with artistic composition.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              From intimate portraits to large-scale events, I bring passion and
              professionalism to every shoot. My work has been featured in
              Vogue, Elle, and numerous editorial publications.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-dark-800 p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-coral mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-dark-800 p-4 rounded-xl">
                <div className="text-3xl font-bold text-accent-teal mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-accent-coral hover:bg-accent-coral/80 text-white px-6 py-3 rounded-full font-semibold transition-all">
              Let's Work Together
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
