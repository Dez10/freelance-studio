import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma L.",
    text: "Sarah's reiki sessions have transformed my anxiety. I feel centered and peaceful for the first time in years.",
    stars: 5,
  },
  {
    name: "Michael T.",
    text: "The herbal consultation was incredibly thorough. My sleep has improved dramatically with the custom blend.",
    stars: 5,
  },
  {
    name: "Rachel K.",
    text: "A truly healing experience. The energy work here is authentic and deeply restorative.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sage-800 font-serif">
            Client Stories
          </h2>
          <p className="text-lg text-sage-600">
            Hear from those who've experienced healing
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
              className="bg-gradient-to-br from-sage-50 to-lavender-50 p-6 rounded-xl shadow-md">
              <div className="flex gap-1 mb-4 text-xl">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-lavender-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sage-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-sage-800 font-semibold">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
