import React from "react";
import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-20 px-6 bg-gradient-to-br from-sage-100 to-lavender-100">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sage-800 font-serif">
            Begin Your Healing Journey
          </h2>
          <p className="text-lg text-sage-700 mb-8">
            Ready to restore balance and find peace? Book your first session
            today.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-xl mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h3 className="font-bold text-sage-800">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-sage-600">
                    Available Tuesday - Saturday, 9AM - 6PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏡</span>
                <div>
                  <h3 className="font-bold text-sage-800">Peaceful Studio</h3>
                  <p className="text-sm text-sage-600">
                    Located in the heart of downtown
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💚</span>
                <div>
                  <h3 className="font-bold text-sage-800">
                    First Session Special
                  </h3>
                  <p className="text-sm text-sage-600">
                    20% off your first visit - mention this offer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5559876543"
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
              📞 Call to Book
            </a>
            <a
              href="mailto:sarah@harmonywellness.com"
              className="border-2 border-sage-600 hover:bg-sage-600 hover:text-white text-sage-700 px-8 py-4 rounded-full font-bold transition-all">
              ✉️ Email Inquiry
            </a>
          </div>

          <p className="mt-8 text-sm text-sage-600 italic">
            "The greatest wealth is health" - Virgil
          </p>
        </motion.div>
      </div>
    </section>
  );
}
