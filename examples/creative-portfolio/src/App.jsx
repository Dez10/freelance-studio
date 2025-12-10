import React from "react";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-dark-900 text-white">
      <Hero />
      <ProjectGrid />
      <About />
      <Testimonials />
      <Contact />

      <footer className="bg-dark-900 border-t border-dark-700 py-8 text-center text-gray-400">
        <p className="text-sm">
          © 2025 Alex Morgan Photography — Capturing Moments, Creating Art
        </p>
      </footer>
    </div>
  );
}
