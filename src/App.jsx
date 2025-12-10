import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Helmet>
        <title>
          Freelance Web Studio | Modern Business Websites in 24-48 Hours
        </title>
        <meta
          name="description"
          content="Professional, affordable business websites for local service providers, wellness practitioners, and solo entrepreneurs. Fast delivery, AI-enhanced design, mobile-optimized."
        />
        <meta
          name="keywords"
          content="freelance web design, business website, affordable web design, local business website, react developer"
        />
      </Helmet>

      <div className="bg-earth-cream text-earth-soil font-inter">
        <Navigation />
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
