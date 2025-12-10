import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display text-white">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? I'd love to hear about it.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:alex@alexmorganphoto.com"
                className="text-accent-teal hover:text-accent-teal/80">
                alex@alexmorganphoto.com
              </a>
            </div>

            <div className="bg-dark-800 p-8 rounded-2xl border border-dark-700">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a
                href="tel:5551234567"
                className="text-accent-teal hover:text-accent-teal/80">
                (555) 123-4567
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent-coral to-accent-teal p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Book?
            </h3>
            <p className="text-white/90 mb-6">
              Available for portraits, events, editorial work, and commercial
              projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alex@alexmorganphoto.com"
                className="bg-white hover:bg-gray-100 text-dark-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg">
                Send Inquiry
              </a>
              <a
                href="tel:5551234567"
                className="border-2 border-white hover:bg-white hover:text-dark-900 text-white px-8 py-4 rounded-full font-bold transition-all">
                Call Now
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-3xl">
            <a
              href="#"
              className="text-gray-600 hover:text-accent-coral transition-colors">
              📷
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-accent-teal transition-colors">
              💼
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-accent-purple transition-colors">
              🎨
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
