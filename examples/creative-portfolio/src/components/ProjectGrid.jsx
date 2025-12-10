import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Urban Portraits",
    category: "Portrait",
    emoji: "👤",
    color: "from-accent-coral to-red-500",
  },
  {
    id: 2,
    title: "Wedding Bliss",
    category: "Event",
    emoji: "💒",
    color: "from-accent-purple to-blue-500",
  },
  {
    id: 3,
    title: "Fashion Editorial",
    category: "Editorial",
    emoji: "👗",
    color: "from-accent-teal to-green-500",
  },
  {
    id: 4,
    title: "Nature Escapes",
    category: "Landscape",
    emoji: "🏔️",
    color: "from-accent-yellow to-orange-500",
  },
  {
    id: 5,
    title: "Product Shots",
    category: "Commercial",
    emoji: "📦",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "Street Stories",
    category: "Documentary",
    emoji: "🏙️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 7,
    title: "Family Moments",
    category: "Portrait",
    emoji: "👨‍👩‍👧",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 8,
    title: "Concert Energy",
    category: "Event",
    emoji: "🎸",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 9,
    title: "Food & Drink",
    category: "Commercial",
    emoji: "🍽️",
    color: "from-yellow-500 to-red-500",
  },
];

const categories = [
  "All",
  "Portrait",
  "Event",
  "Editorial",
  "Landscape",
  "Commercial",
  "Documentary",
];

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display text-white">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            A collection of my favorite projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-accent-coral text-white shadow-lg"
                    : "bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setLightboxImage(project)}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform">
                      {project.emoji}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="text-sm opacity-90 bg-black/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 cursor-pointer">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className={`relative max-w-4xl w-full aspect-video rounded-3xl bg-gradient-to-br ${lightboxImage.color} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-9xl mb-6">{lightboxImage.emoji}</div>
                  <h3 className="text-4xl font-bold mb-3">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xl opacity-90">{lightboxImage.category}</p>
                </div>
                <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl">
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
