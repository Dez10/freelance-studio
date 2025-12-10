import React from "react";
import { motion } from "framer-motion";

export default function PricingCard({ plan, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl p-8 bg-white transition-all hover:scale-105 ${
        plan.recommended
          ? "border-4 border-accent-400 shadow-2xl relative"
          : "border-2 border-primary-300 shadow-lg"
      }`}>
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent-400 text-primary-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2 text-primary-700">{plan.name}</h3>
      <p className="text-4xl font-bold mb-4 text-accent-600">{plan.price}</p>

      {plan.bestFor && (
        <div className="mb-6 p-3 bg-neutral-light rounded-lg">
          <p className="text-xs font-semibold text-neutral-slate uppercase mb-1">
            Perfect for:
          </p>
          <p className="text-sm text-neutral-slate">{plan.bestFor}</p>
        </div>
      )}

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary-500 font-bold text-xl flex-shrink-0">
              ✓
            </span>
            <span className="text-neutral-slate">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block text-center py-3 px-6 rounded-lg font-bold transition-all ${
          plan.recommended
            ? "bg-accent-400 hover:bg-accent-500 text-primary-900 shadow-lg hover:shadow-xl"
            : "bg-primary-500 hover:bg-primary-600 text-white"
        }`}>
        Get Started
      </a>
    </motion.div>
  );
}
