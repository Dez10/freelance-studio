import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "$3.00", desc: "Rich, bold, perfect" },
      {
        name: "Cappuccino",
        price: "$4.50",
        desc: "Espresso with steamed milk foam",
      },
      {
        name: "Latte",
        price: "$4.75",
        desc: "Smooth espresso with steamed milk",
      },
      {
        name: "Cold Brew",
        price: "$4.00",
        desc: "Steeped 12 hours for smoothness",
      },
      {
        name: "Pour Over",
        price: "$5.00",
        desc: "Single-origin, made to order",
      },
    ],
  },
  {
    category: "Pastries",
    items: [
      {
        name: "Croissant",
        price: "$3.50",
        desc: "Buttery, flaky, baked daily",
      },
      {
        name: "Blueberry Muffin",
        price: "$3.75",
        desc: "Fresh blueberries, house recipe",
      },
      {
        name: "Cinnamon Roll",
        price: "$4.50",
        desc: "Warm, gooey, irresistible",
      },
      {
        name: "Almond Scone",
        price: "$3.25",
        desc: "Crispy outside, soft inside",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-coffee-espresso font-serif">
            Our Menu
          </h2>
          <p className="text-lg text-coffee-mocha">
            Quality ingredients, crafted with care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((section, sectionIdx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, x: sectionIdx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}>
              <h3 className="text-3xl font-bold mb-6 text-accent-warm font-serif border-b-2 border-accent-warm pb-2">
                {section.category}
              </h3>
              <div className="space-y-5">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="pb-4 border-b border-coffee-latte last:border-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-xl font-semibold text-coffee-dark">
                        {item.name}
                      </h4>
                      <span className="text-lg font-bold text-accent-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-coffee-mocha">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
