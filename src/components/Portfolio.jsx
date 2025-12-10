import React from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "../data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-700">
          Sample Projects
        </h2>
        <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
          See what I can build for you. Click to view live examples.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {portfolioProjects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
              {project.image}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary-700 group-hover:text-accent-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-slate mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-neutral-light text-neutral-slate text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-accent-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Live Site
                <span className="text-lg">→</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
