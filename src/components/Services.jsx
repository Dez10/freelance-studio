import React from "react";
import { motion } from "framer-motion";
import { services, features } from "../data/services";
import Card from "./ui/Card";

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">
          Who I Build For
        </h2>
        <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
          Specializing in fast, professional websites for service-based
          businesses and creative professionals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <Card key={service.id} delay={index * 0.1}>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-primary-600">
              {service.title}
            </h3>
            <p className="text-neutral-slate">{service.description}</p>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-6 text-primary-700">
          What You Get
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-accent-400 flex items-center gap-3">
            <span className="text-accent-500 text-2xl font-bold">✓</span>
            <span className="text-neutral-slate font-medium">{feature}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
