'use client';

import { useState } from 'react';
import './HomeHeroSection.css';
import BookingModal from  '../BookingModal'; // adjust path if needed

export default function HomeHeroSection() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`overlay ${showBooking ? 'active' : ''}`}></div>

      <div className="hero-content">
        <h1 className="hero-heading">
          Turn Your Website Into a High-Converting Lead Magnet
        </h1>
        <p className="hero-subheading">
          Are you struggling to convert visitors into clients? Let us help you
          build a professional, lead-generating website that grows your business.
        </p>
        <div className="cta-container">
          <button className="cta-button" onClick={() => setShowBooking(true)}>
            Get Started
          </button>
        </div>
      </div>

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </section>
  );
}
