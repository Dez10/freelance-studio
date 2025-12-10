import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 bg-sage-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-lavender-100 to-sage-100 rounded-3xl p-12 flex items-center justify-center">
            <div className="text-9xl">🌸</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6 text-sage-800 font-serif">
              Meet Your Practitioner
            </h2>
            <p className="text-lg text-sage-700 mb-4 leading-relaxed">
              Hi, I'm Sarah — a certified herbalist and reiki master with over
              10 years of experience in holistic wellness.
            </p>
            <p className="text-sage-600 mb-6 leading-relaxed">
              My journey began with my own healing, and now I'm passionate about
              helping others find balance, peace, and vitality through natural
              remedies and energy work. Every session is tailored to your unique
              needs.
            </p>
            <div className="space-y-2 text-sage-700">
              <p className="flex items-center gap-2">
                <span className="text-lavender-600">✓</span>
                <span>Certified Reiki Master (2015)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lavender-600">✓</span>
                <span>Clinical Herbalist Diploma</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lavender-600">✓</span>
                <span>500+ Hours Yoga Teacher Training</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
