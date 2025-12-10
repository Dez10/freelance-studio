import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { emoji: "☕", label: "Fresh Espresso" },
  { emoji: "🥐", label: "Buttery Croissants" },
  { emoji: "🍰", label: "Homemade Pastries" },
  { emoji: "🌿", label: "Cozy Atmosphere" },
  { emoji: "📚", label: "Reading Corner" },
  { emoji: "🎨", label: "Local Art" },
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 bg-coffee-latte">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-dark font-serif">
            Gallery
          </h2>
          <p className="text-lg text-coffee-espresso">
            A peek inside our cozy space
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden aspect-square flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-all">
              <div className="text-7xl mb-3">{image.emoji}</div>
              <p className="text-sm font-semibold text-coffee-mocha">
                {image.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
