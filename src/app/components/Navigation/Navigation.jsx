'use client';

import { useState } from 'react';
import Link from 'next/link';
import "./Navigation.css"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <span className="brand">SiteMagnet</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#our-work">Our Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li>
            <Link href="/dashboard">
              <button className="get-started-btn">Get Started</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleMenuToggle}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}
