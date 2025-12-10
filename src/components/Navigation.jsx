import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/personal_logo.png";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", to: "services" },
    { name: "Pricing", to: "pricing" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary-500 shadow-lg py-3" : "bg-primary-500 py-4"
      }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center">
          <img
            src={logo}
            alt="Destin Strong"
            className="h-10 hover:opacity-80 transition-opacity"
          />
        </Link>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:text-accent-400 cursor-pointer transition-colors font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <a
            href="https://calendly.com/destinastrong/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-white hover:text-accent-400 transition-colors font-medium">
            📅 Book Call
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-accent-400 hover:bg-accent-500 text-primary-900 px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer shadow-md hover:shadow-lg">
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
