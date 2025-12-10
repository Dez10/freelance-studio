import React from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Hours from "./components/Hours";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-coffee-cream text-coffee-dark">
      <Hero />
      <Menu />
      <Gallery />
      <Hours />
      <Contact />

      <footer className="bg-coffee-dark text-coffee-cream py-6 text-center">
        <p className="text-sm">© 2025 The Cozy Cup — Made with ❤️ and ☕</p>
      </footer>
    </div>
  );
}
