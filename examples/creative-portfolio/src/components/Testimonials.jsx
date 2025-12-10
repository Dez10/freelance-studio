import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jessica Chen",
    role: "Bride",
    text: "Alex captured our wedding day perfectly. Every emotion, every moment—absolutely stunning work!",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Brand Manager",
    text: "Professional, creative, and delivered beyond expectations. Our campaign photos were incredible.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Magazine Editor",
    text: "Alex has an eye for detail that's unmatched. A true artist with the camera.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">
            Client Love
          </h2>
          <p className="text-xl text-gray-400">
            What people are saying about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-dark-900 p-8 rounded-2xl shadow-xl border border-dark-700 hover:border-accent-teal transition-all">
              <div className="flex gap-1 mb-4 text-2xl">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent-yellow">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-dark-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
