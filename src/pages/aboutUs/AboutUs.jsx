import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './aboutUs.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import hero from '../../assets/about-hero.png';
import design from '../../assets/design-icon.png';
import develop from '../../assets/develop-icon.png';
import deploy from '../../assets/deploy-icon.png';
import maintain from '../../assets/maintain-icon.png';
import avatar2 from '../../assets/avatar2.png';
import visionImage from '../../assets/visionImage.png';

const accordionItems = [
    { 
        title: 'Vision', 
        content: 'At Paperfold, our vision is to revolutionize content creation through innovation and technology. We strive to empower brands with impactful digital experiences, driving growth and creativity in a rapidly changing world. With a passion for excellence, we aim to shape the future of storytelling, where possibilities are endless.' 
    },
    { 
        title: 'Mission', 
        content: 'At Paperfold, our mission is to transform the digital landscape by delivering innovative content solutions that inspire and engage. We are dedicated to helping our clients tell their unique stories through creative strategies, building lasting relationships, and driving impactful results. Our commitment to excellence ensures we provide exceptional value in every project we undertake.' 
    },
    { 
        title: 'Milestone', 
        content: `2021: We took our first steps towards global recognition, expanding our reach to new markets and forming strategic collaborations to enhance our content solutions.  
2022: We broadened our service offerings and received industry accolades for our dedication to exceptional storytelling and digital experiences.  
2023: We continued to grow, establishing new offices and digital hubs that fostered innovation and creative breakthroughs. Our focus on sustainability and social responsibility shaped our approach, helping us build stronger relationships with clients and communities.  
2024: As we move forward, we are achieving new milestones in content innovation and design. Our commitment to sustainability and client-centered solutions remains unwavering, as we continue to drive impact and deliver transformative digital experiences.` 
    },
];

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false); 
  const [count, setCount] = useState({
      design: 0,
      development: 0,
      digitalMarketing: 0,
      ppcManagement: 0,
      videoProduction: 0,
  });

  const visionSectionRef = useRef(null);
  const imageRef = useRef(null);
  const counterSectionRef = useRef(null);

  const counterValues = {
      design: 95,
      development: 85,
      digitalMarketing: 80,
      ppcManagement: 65,
      videoProduction: 55,
  };

  const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer to trigger animation when the Empowered Team section is in view
  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true); 
              }
          },
          { threshold: 0.5 } 
      );

      const section = document.querySelector('.empowered-team');
      if (section) {
          observer.observe(section);
      }

      return () => {
          if (section) {
              observer.unobserve(section);
          }
      };
  }, []);

  // Counting animation logic
  useEffect(() => {
      if (isVisible) {
          const interval = setInterval(() => {
              setCount((prevCount) => {
                  let updated = { ...prevCount };
                  Object.keys(counterValues).forEach((key) => {
                      if (updated[key] < counterValues[key]) {
                          updated[key] += 1;
                      }
                  });
                  return updated;
              });
          }, 50);

          return () => clearInterval(interval);
      }
  }, [isVisible]);

  useEffect(() => {
    const adjustImagePosition = () => {
        if (visionSectionRef.current && imageRef.current) {
            const sectionHeight = visionSectionRef.current.offsetHeight;
            const accordionHeight = visionSectionRef.current.querySelector('.accordion').offsetHeight;
            const imageHeight = imageRef.current.offsetHeight;
            const position = (Math.max(sectionHeight, accordionHeight) - imageHeight) / 2;
            imageRef.current.style.transform = `translateY(${Math.max(position, 0)}px)`;
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
        <div className='aboutUs'>
            <Header />
            {/* HERO SECTION */}
            <section className="hero-section">
                <img src={hero} alt="About Hero" className="hero-image" />
                <div className="hero-text">
                    <h1>About Us</h1>
                    <p>Paperfold is a dynamic IT company offering design, development, and digital marketing services. We transform ideas into impactful solutions, empowering businesses to grow in the digital era.</p>
                </div>
            </section>

            {/* ABOUT COMPANY CONTENT */}

            <section className="about-content">
                <div className="intro-text">
                    <h2>Driving Your Business <span className="highlight">Forward</span> with Technology</h2>
                    <p className="main-paragraph">
                        We are a premier IT company focused on offering customized solutions and services that enable your business to achieve its goals. With seamless integration, scalable growth, and exceptional support, we guide you at every step towards success.
                    </p>
                    <p className="sub-paragraph">Curious to learn more?</p>
                    <p className="sub-paragraph">Join us for a quick overview of what we can do for you.</p>
                </div>

                <div className="avatars">
                    <img src={avatar2} alt="Avatar 2" className="avatar" />
                </div>
            </section>

            {/* VISION MISSION ACCORDION */}
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
                            className={`accordion-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <div
                                className="accordion-title"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{item.title}</h3>
                                <span className="plus-icon">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            <div className="accordion-content">
                                {item.title === 'Milestone' ? (
                                    item.content.split('\n').map((line, idx) => {
                                        const [year, ...description] = line.split(':');
                                        return (
                                            <div key={idx} className="milestone-entry">
                                                <span className="milestone-year">{year.trim()}:</span>
                                                <p className="milestone-description">{description.join(':').trim()}</p>
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


{/* ABOUT US / SERVICES SECTION */}
            <section className="about-us">
  <h1 className="section-title">
    Comprehensive <span className="highlight">IT Solutions</span>, All in One Place
  </h1>
  <div className="services">
    <div className="service">
      
      <img src={design} alt="Design Icon" />
      <h2>DESIGN</h2>
      <p>
        We collaborate with you to understand your challenges and explore tailored solutions in one-on-one discussions, ensuring the perfect design for your needs.
      </p>
    </div>
    <div className="service">
      <img src={develop} alt="Develop Icon" />
      <h2>DEVELOP</h2>
      <p>
        This is where the magic happens. We craft and strategize the most effective solutions to help your business thrive.
      </p>
    </div>
    <div className="service">
      <img src={deploy} alt="Deploy Icon" />
      <h2>DEPLOY</h2>
      <p>
        Our work doesn’t end at delivery. We engage with you to align on future goals and ensure your project’s ongoing success.
      </p>
    </div>
    <div className="service">
      <img src={maintain} alt="Maintain Icon" />
      <h2>MAINTAIN</h2>
      <p>
        Count on us to nurture and protect your solutions, ensuring long-term excellence and reliability.
      </p>
    </div>
  </div>
</section>

{/* EMPOWERED TEAM SECTION */}
<section className="empowered-team">
                <div className="content">
                    <h1>
                        Empowered Team – <br />
                        Turning <span className="highlight">Ideas</span> into <br />
                        Reality
                    </h1>
                    <p>
                        Our skilled professionals bring together innovation, technical expertise,
                        and strategic thinking to craft solutions that drive success for our
                        clients.
                    </p>
                </div>
                <div className="skills">
                    <div className="skill">
                        <div className="skill-header">
                            <span>Design</span>
                            <span className="percentage">80%</span>
                        </div>
                        <div className="bar design">
                            {isVisible && (
                                <motion.div 
                                    className="progress" 
                                    style={{ width: "80%" }}
                                    initial={{ width: 0 }} 
                                    animate={{ width: "80%" }} 
                                    transition={{ duration: 2, ease: "linear" }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-header">
                            <span>Development</span>
                            <span className="percentage">65%</span>
                        </div>
                        <div className="bar development">
                            {isVisible && (
                                <motion.div 
                                    className="progress" 
                                    style={{ width: "65%" }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "65%" }}
                                    transition={{ duration: 2, ease: "linear" }} 
                                />
                            )}
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-header">
                            <span>Digital Marketing</span>
                            <span className="percentage">80%</span>
                        </div>
                        <div className="bar digital-marketing">
                            {isVisible && (
                                <motion.div 
                                    className="progress" 
                                    style={{ width: "80%" }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "80%" }}
                                    transition={{ duration: 2, ease: "linear" }} 
                                />
                            )}
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-header">
                            <span>PPC Management</span>
                            <span className="percentage">58%</span>
                        </div>
                        <div className="bar ppc-management">
                            {isVisible && (
                                <motion.div 
                                    className="progress" 
                                    style={{ width: "58%" }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "58%" }}
                                    transition={{ duration: 2, ease: "linear" }} 
                                />
                            )}
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-header">
                            <span>Video Production</span>
                            <span className="percentage">70%</span>
                        </div>
                        <div className="bar video-production">
                            {isVisible && (
                                <motion.div 
                                    className="progress" 
                                    style={{ width: "70%" }}
                                    initial={{ width: 0 }}
                                    animate={{ width: "70%" }}
                                    transition={{ duration: 2, ease: "linear" }} 
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* COUNTER SECTION */}
            <section className="counter-section" ref={counterSectionRef}>
                <div className="counter-row">
                    <div className="counter-item">
                        <motion.div 
                            className="number"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {count.design}
                        </motion.div>
                        <p className="label">Design</p>
                    </div>
                    <div className="counter-item">
                        <motion.div 
                            className="number"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {count.development}
                        </motion.div>
                        <p className="label">Development</p>
                    </div>
                    <div className="counter-item">
                        <motion.div 
                            className="number"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {count.digitalMarketing}
                        </motion.div>
                        <p className="label">Digital Marketing</p>
                    </div>
                    <div className="counter-item">
                        <motion.div 
                            className="number"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {count.ppcManagement}
                        </motion.div>
                        <p className="label">PPC Management</p>
                    </div>
                    <div className="counter-item">
                        <motion.div 
                            className="number"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {count.videoProduction}
                        </motion.div>
                        <p className="label">Video Production</p>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default AboutUs;
