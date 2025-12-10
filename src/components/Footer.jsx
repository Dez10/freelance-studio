import React from "react";
import logo from "../assets/personal_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Destin Strong" className="h-12 mb-3" />
            <p className="text-sm opacity-90 mb-3">
              Fast, affordable, AI-enhanced websites that help small businesses
              stand out online. From concept to launch in 24–48 hours—no code,
              no stress, just results.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:destinastrong@gmail.com"
                className="text-sm text-accent-300 hover:text-accent-200 transition-colors flex items-center gap-2">
                <span>✉️</span>
                <span>destinastrong@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/destinstrong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-300 hover:text-accent-200 transition-colors flex items-center gap-2">
                <span>💼</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="#services"
                  className="hover:text-accent-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-accent-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-accent-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Why Choose Me?</h4>
            <ul className="text-sm opacity-90 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent-400">⚡</span>
                <span>Lightning-fast delivery (24–48 hours)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400">💰</span>
                <span>Affordable pricing for small businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400">🤖</span>
                <span>AI-powered design & content creation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400">📱</span>
                <span>Mobile-first, modern & SEO-ready</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 pt-6 text-center text-sm opacity-75">
          <p>
            © {currentYear} Destin Strong — Built with ❤️ using React + Vite +
            Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
