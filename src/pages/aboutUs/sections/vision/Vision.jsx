import "./vision.scss";
import React, { useState, useEffect, useRef } from "react";
import visionImage from "../../../../assets/aboutUs/visionImage.webp";

const accordionItems = [
  {
    title: "Vision",
    content:
      "At Paperfold, our vision is to revolutionize content creation through innovation and technology. We strive to empower brands with impactful digital experiences, driving growth and creativity in a rapidly changing world. With a passion for excellence, we aim to shape the future of storytelling, where possibilities are endless.",
  },
  {
    title: "Mission",
    content:
      "At Paperfold, our mission is to transform the digital landscape by delivering innovative content solutions that inspire and engage. We are dedicated to helping our clients tell their unique stories through creative strategies, building lasting relationships, and driving impactful results. Our commitment to excellence ensures we provide exceptional value in every project we undertake.",
  },
  {
    title: "Milestone",
    content: `2021: We took our first steps towards global recognition, expanding our reach to new markets and forming strategic collaborations to enhance our content solutions.  
  2022: We broadened our service offerings and received industry accolades for our dedication to exceptional storytelling and digital experiences.  
  2023: We continued to grow, establishing new offices and digital hubs that fostered innovation and creative breakthroughs. Our focus on sustainability and social responsibility shaped our approach, helping us build stronger relationships with clients and communities.  
  2024: As we move forward, we are achieving new milestones in content innovation and design. Our commitment to sustainability and client-centered solutions remains unwavering, as we continue to drive impact and deliver transformative digital experiences.`,
  },
];

const Vision = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const visionSectionRef = useRef(null);
  const imageRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const adjustImagePosition = () => {
      if (visionSectionRef.current && imageRef.current) {
        const sectionHeight = visionSectionRef.current.offsetHeight;
        const accordionHeight =
          visionSectionRef.current.querySelector('.accordion').offsetHeight;
        const imageHeight = imageRef.current.offsetHeight;
        const position =
          (Math.max(sectionHeight, accordionHeight) - imageHeight) / 2;
        imageRef.current.style.transform = `translateY(${Math.max(
          position,
          0
        )}px)`;
      }
    };

    const resizeObserver = new ResizeObserver(adjustImagePosition);
    resizeObserver.observe(visionSectionRef.current);

    adjustImagePosition();
    return () => {
      resizeObserver.disconnect();
    };
  }, [openIndex]);
  return (
    <section className="vision-section" ref={visionSectionRef}>
      <img
        src={visionImage}
        alt="Vision Image"
        className="vision-image"
        ref={imageRef}
      />
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.title}</h3>
              <span className="plus-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div className="accordion-content">
              {item.title === "Milestone" ? (
                item.content.split("\n").map((line, idx) => {
                  const [year, ...description] = line.split(":");
                  return (
                    <div key={idx} className="milestone-entry">
                      <span className="milestone-year">{year.trim()}:</span>
                      <p className="milestone-description">
                        {description.join(":").trim()}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p>{item.content}</p>
              )}
            </div>
            {index < accordionItems.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
