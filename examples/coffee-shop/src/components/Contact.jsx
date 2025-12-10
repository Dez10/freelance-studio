import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-coffee-espresso text-coffee-cream">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Visit Us Today
          </h2>
          <p className="text-lg mb-8 text-coffee-latte">
            Whether you need your morning espresso or a quiet place to work,
            we're here to serve you the perfect cup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:5551234567"
              className="bg-accent-warm hover:bg-accent-gold text-coffee-dark px-8 py-3 rounded-lg font-bold transition-all shadow-lg">
              📞 Call Us
            </a>
            <a
              href="mailto:hello@cozycup.com"
              className="border-2 border-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark text-coffee-cream px-8 py-3 rounded-lg font-bold transition-all">
              ✉️ Email Us
            </a>
          </div>

          <div className="mt-12 text-coffee-latte">
            <p className="text-sm italic">
              "Where every cup feels like home" ☕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
