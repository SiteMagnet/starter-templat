"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import BookingModal from "../BookingModal";
import "./Packages.css";

const Packages = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleComparison = () => setShowComparison(!showComparison);
  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);

  return (
    <section className="packages">
      <h2 className="packages-heading">Our Packages</h2>
      <p className="packages-description">
        Whether you're launching your business or ready to scale, we’ve got a solution for you.
      </p>

      <div className="packages-grid">
        {/* Starter Website Package */}
        <div className="package-card">
          <span className="package-number">Starter</span>
          <span className="package-price">$750 (One-Time)</span>
          <h3 className="package-heading">Starter Website Package</h3>
          <p className="package-tagline">
            Build your foundation. Launch strong. Grow on your terms.
          </p>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> Clean, custom-built website</li>
            <li><FaCheck className="feature-icon" /> High-converting lead forms</li>
            <li><FaCheck className="feature-icon" /> Responsive design</li>
            <li><FaCheck className="feature-icon" /> Dashboard access to track performance</li>
            <li><FaCheck className="feature-icon" /> Marketing optional – DIY-friendly</li>
          </ul>
          {/* <Link href="/Login"> */}
            <button className="cta-button">Get Started</button>
          {/* </Link> */}
          {/* <button className="book-call-link" onClick={toggleBookingModal}>Book a Call</button> */}
        </div>

        {/* Lead Generation Website Package */}
        <div className="package-card middle-card">
          <span className="package-number">Lead Gen</span>
          <span className="package-price">$950 + Retainer</span>
          <h3 className="package-heading">Lead Generation Website</h3>
          <p className="package-tagline">
            We build it. We drive the traffic. You close the leads.
          </p>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> Built to convert AND drive traffic</li>
            <li><FaCheck className="feature-icon" /> Done-for-you ad campaigns</li>
            <li><FaCheck className="feature-icon" /> Integrated CRM & lead tracking</li>
            <li><FaCheck className="feature-icon" /> Performance dashboard with conversion metrics</li>
            <li><FaCheck className="feature-icon" /> Ongoing support & growth partnership</li>
          </ul>
          {/* <Link href="/Login"> */}
            <button className="cta-button">Get Started</button>
          {/* </Link> */}
          {/* <button className="book-call-link" onClick={toggleBookingModal} >Book a Call</button> */}
        </div>
      </div>

      {/* Compare Button */}
      <div className="compare-button-wrapper">
        <button onClick={toggleComparison} className="compare-button">
          Compare Packages
        </button>
      </div>

      {/* Package Comparison Modal */}
      {showComparison && (
        <div className="modal-overlay" onClick={toggleComparison}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleComparison}>×</button>
            <h3>Compare Packages</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter Website</th>
                  <th>Lead Generation Website</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Custom Website</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Mobile Responsive</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>SEO-Optimized</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Lead Capture Forms</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Insights Dashboard</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Monthly Maintenance</td><td>Optional ($100/mo)</td><td>Included ($100/mo)</td></tr>
                <tr><td>Done-for-You Marketing</td><td>No</td><td>Yes (via retainer)</td></tr>
                <tr><td>Ad Spend Guidance</td><td>No</td><td>Yes</td></tr>
                <tr><td>Lead Gen Strategy</td><td>No</td><td>Yes</td></tr>
                <tr><td>Ideal For</td><td>DIYers / Low budget</td><td>Business owners ready to scale</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay" onClick={toggleBookingModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <BookingModal onClose={toggleBookingModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
