import React from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link"; // Using Next.js Link component for navigation
import "./Packages.css"; // Ensure this CSS is in the 'styles' directory or global styles

const Packages = () => {
  return (
    <section className="packages">
      <h2 className="packages-heading">Our Packages</h2>
      <p className="packages-description">
        We offer tailored solutions to meet your needs. Whether you're looking for a strategy session, a full website, or ongoing support, we have the right package for you.
      </p>
      <div className="packages-grid">
        {/* Package 1: Starter Website Package */}
        <div className="package-card">
          <span className="package-number">Package 1</span>
          <span className="package-price">250 USD/month</span>
          <h3 className="package-heading">Site Maintenance & Support</h3>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Ongoing website updates</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Security monitoring</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Performance optimizations</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Monthly reporting</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Priority support</span></li>
          </ul>
          <Link href="/dashboard">
            <button className="cta-button">Get Started</button>
          </Link>
          <a href="/book-call" className="book-call-link">Book a Call</a>
        </div>

        {/* Package 2: Lead Generation Website Package */}
        <div className="package-card middle-card">
          <span className="package-number">Package 2</span>
          <span className="package-price">750 USD</span>
          <h3 className="package-heading">Starter Website Package</h3>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Custom website design</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Responsive for all devices</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">SEO optimized</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Lead capture forms included</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Easy-to-use CMS</span></li>
          </ul>
          <Link href="/dashboard">
            <button className="cta-button">Get Started</button>
          </Link>
          <a href="/book-call" className="book-call-link">Book a Call</a>
        </div>

        {/* Package 3: Lead Generation Website */}
        <div className="package-card">
          <span className="package-number">Package 3</span>
          <span className="package-price">1100 USD</span>
          <h3 className="package-heading">Lead Generation Website</h3>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Full lead generation system</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Targeted landing pages</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Integrated CRM system</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Conversion rate optimization</span></li>
            <li><FaCheck className="feature-icon" /> <span className="feature-text">Custom analytics dashboard</span></li>
          </ul>
          <Link href="/dashboard">
            <button className="cta-button">Get Started</button>
          </Link>
          <a href="/book-call" className="book-call-link">Book a Call</a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
