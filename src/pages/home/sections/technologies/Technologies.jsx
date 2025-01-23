import React, { useEffect, useRef } from "react";
import "./technologies.scss";
import figmalogo from "../../../../assets/figma-logo.png";
import adobelogo from "../../../../assets/adobe-logo.png";
import wordpresslogo from "../../../../assets/wordpress-logo.png";
import gsuitelogo from "../../../../assets/gsuite-logo.png";
import shopifylogo from "../../../../assets/shopify-logo.png";
import nodelogo from "../../../../assets/node-logo.png";
import awslogo from "../../../../assets/aws-logo.png";
import reactlogo from "../../../../assets/react-logo.png";
import woologo from "../../../../assets/woo-logo.png";

const Technologies = () => {
  const techLogosRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-logos");
          }
        });
      },
      { threshold: 0.5 }
    );

    const logos = techLogosRef.current.querySelectorAll(".logos-grid img");
    logos.forEach((logo) => observer.observe(logo));

    return () => {
      logos.forEach((logo) => observer.unobserve(logo));
    };
  }, []);

  return (
    <section className="technologies-container">
      <div className="text-content">
        <h2>Technologies That <span>Drive</span> Us</h2>
        <p>
          At Paperfold, we rely on proven technologies and tools to deliver
          excellence. From design to development and beyond, our expertise is
          backed by industry-leading platforms.
        </p>
        <button className="learnMore__button" type="button">
          <span className="btn-background"></span>
          <span className="btn-text" data-text="Learn More">
            Learn More
          </span>
        </button>
      </div>
      <div className="tech-logos" ref={techLogosRef}>
        <div className="logos-grid">
          <img src={figmalogo} alt="Figma" />
          <img src={adobelogo} alt="Adobe Creative Cloud" />
          <img src={wordpresslogo} alt="WordPress" />
          <img src={gsuitelogo} alt="G Suite" />
          <img src={shopifylogo} alt="Shopify" />
          <img src={nodelogo} alt="Node.js" />
          <img src={awslogo} alt="AWS" />
          <img src={reactlogo} alt="React.js" />
          <img src={woologo} alt="WooCommerce" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
