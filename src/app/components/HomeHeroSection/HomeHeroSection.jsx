'use client';

import { useState, useEffect, useRef } from 'react';
import './HomeHeroSection.css'; // adjust path based on your folder structure

export default function HomeHeroSection() {
  const [showBooking, setShowBooking] = useState(false);
  const bookingContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bookingContainerRef.current &&
        !bookingContainerRef.current.contains(event.target)
      ) {
        setShowBooking(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

      {showBooking && (
        <div className="booking-container" ref={bookingContainerRef}>
          <button className="close-booking" onClick={() => setShowBooking(false)}>
            Close
          </button>

          <div className="iframe-wrapper">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/jcILtSg9gF3jD9wnKohK"
              className="booking-iframe"
              scrolling="yes"
              title="Booking Calendar"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
