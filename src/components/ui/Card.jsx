import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, text, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      {children}
      {title && <strong className="block mb-2 text-lg">{title}</strong>}
      {text && <p>{text}</p>}
    </motion.div>
  );
}
