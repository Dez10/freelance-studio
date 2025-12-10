import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🧘",
    title: "Reiki Healing",
    desc: "60-minute energy balancing session",
    price: "$80",
  },
  {
    icon: "🌿",
    title: "Herbal Consultation",
    desc: "Personalized herbal remedy plan",
    price: "$65",
  },
  {
    icon: "💆",
    title: "Therapeutic Massage",
    desc: "90-minute deep relaxation",
    price: "$120",
  },
  {
    icon: "🕉️",
    title: "Chakra Balancing",
    desc: "Align your energy centers",
    price: "$75",
  },
  {
    icon: "🍵",
    title: "Tea Ceremony",
    desc: "Mindful tea meditation experience",
    price: "$45",
  },
  {
    icon: "🔮",
    title: "Wellness Package",
    desc: "3 sessions + herbal kit",
    price: "$200",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sage-800 font-serif">
            Healing Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Restore balance and harmony through natural, time-honored practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-sage-50 to-lavender-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-sage-800">
                {service.title}
              </h3>
              <p className="text-sage-600 mb-4 text-sm">{service.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-lavender-600">
                  {service.price}
                </span>
                <a
                  href="#booking"
                  className="text-sage-700 hover:text-sage-900 font-semibold text-sm hover:underline">
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
