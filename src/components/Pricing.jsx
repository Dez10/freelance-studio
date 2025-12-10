import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "../data/pricing";
import PricingCard from "./ui/PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-light py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">
            Packages
          </h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Transparent pricing for every budget. No hidden fees, just quality
            work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} delay={index * 0.15} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-neutral-gray">
          All packages include responsive design, basic SEO, and fast delivery.
          Custom solutions available upon request.
        </motion.p>
      </div>
    </section>
  );
}
