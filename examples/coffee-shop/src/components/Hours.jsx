import React from "react";
import { motion } from "framer-motion";

const schedule = [
  { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM - 6:00 PM" },
];

export default function Hours() {
  return (
    <section id="hours" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-espresso font-serif">
            Hours & Location
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-coffee-cream p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-accent-warm font-serif flex items-center gap-2">
              <span>🕐</span> Hours
            </h3>
            <div className="space-y-4">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b border-coffee-latte last:border-0">
                  <span className="font-semibold text-coffee-dark">
                    {item.day}
                  </span>
                  <span className="text-coffee-mocha">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-coffee-cream p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-accent-warm font-serif flex items-center gap-2">
              <span>📍</span> Location
            </h3>
            <div className="space-y-4 text-coffee-dark">
              <p className="text-lg">
                <strong>The Cozy Cup</strong>
              </p>
              <p>
                123 Main Street
                <br />
                Downtown District
                <br />
                Your City, ST 12345
              </p>
              <p className="text-coffee-mocha">
                📞 (555) 123-4567
                <br />
                ✉️ hello@cozycup.com
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-warm hover:bg-accent-gold text-coffee-dark px-6 py-3 rounded-lg font-bold transition-all mt-4">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
