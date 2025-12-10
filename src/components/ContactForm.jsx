import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    // Let the form submit naturally to FormSubmit
    // The form will redirect after submission
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-neutral-light py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-gray">
            Request a free homepage mockup and let's bring your vision to life!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/d10ccc35a4fe9999a5d7966457b778da"
          method="POST"
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
          {/* FormSubmit Configuration */}
          <input
            type="hidden"
            name="_subject"
            value="New Client Inquiry - Web Studio"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.href} />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-neutral-slate mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full p-4 border-2 border-neutral-light rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-slate mb-2">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-neutral-light rounded-lg focus:border-primary-400 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-neutral-slate mb-2">
              Tell me about your project *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formState.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-4 border-2 border-neutral-light rounded-lg focus:border-primary-400 focus:outline-none transition-colors resize-none"
              placeholder="I need a website for my..."></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg w-full transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

          <p className="text-sm text-neutral-gray text-center">
            I typically respond within 24 hours. Let's build something amazing
            together! 🚀
          </p>
        </motion.form>
      </div>
    </section>
  );
}
