import React from "react";
import "./PersonalStory.css"; // Keep your global import

function PersonalStory() {
  return (
    <section className="personal-story">
      <div className="left-side">
        <h2 className="main-heading">
          I’ve Helped Over 2 Clients This Month Achieve Success
        </h2>
      </div>
      <div className="right-side">
        <p className="sub-heading">
          I started my design business to escape the 9-5 grind. But soon, I found myself working harder than ever—struggling to find clients and wondering what I was doing wrong while watching others succeed.
        </p>
        <p className="sub-heading">
          It wasn’t until I got crystal clear on my messaging and learned how to align it with my marketing and website that everything changed. Within weeks,
          <span className="highlight">
            I went from chasing clients to attracting my first $3,000 client.
          </span>
        </p>
        <p className="sub-heading" id="faqs">
          With my background in sales and experience helping businesses thrive, I know how to create websites that don’t just look good—they convert. Anybody can build a website, but I want to create a money-making machine that has clients excited to throw their money at you.
        </p>
      </div>
    </section>
  );
}

export default PersonalStory;
