import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";

export default function App() {
  return (
    <div className="bg-earth-cream text-sage-900">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Booking />

      <footer className="bg-sage-800 text-sage-50 py-8 text-center">
        <p className="text-sm mb-2">© 2025 Harmony Wellness</p>
        <p className="text-xs opacity-75">
          Healing naturally, one soul at a time 🌿
        </p>
      </footer>
    </div>
  );
}
