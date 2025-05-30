'use client';
import Link from 'next/link';

import './HomeHeroSection.css';


export default function HomeHeroSection({content}) {

console.log(content);
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=''></div>

      <div className="hero-content">
        <h1 className="hero-heading">
          Turn Your Website Into a High-Converting Lead Magnet
        </h1>
        <p className="hero-subheading">
          Are you struggling to convert visitors into clients? Let us help you
          build a professional, lead-generating website that grows your business.
        </p>
        <div className="cta-container">
        {/* <Link href="/Login"> */}
          <button className="cta-button" >
            Get Started
          </button>
        {/* </Link> */}

        </div>
      </div>


    </section>
  );
}
