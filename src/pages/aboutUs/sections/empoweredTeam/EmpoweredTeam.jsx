import { useEffect, useState } from "react";
import "./empoweredTeam.scss"
import { motion } from 'framer-motion';

const EmpoweredTeam = () => {
    const [isVisible, setIsVisible] = useState(false);
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
  return (
    <section className='empowered-team'>
    <div className='content'>
      <h1>
        Empowered Team – <br />
        Turning <span className='highlight'>Ideas</span> into <br />
        Reality
      </h1>
      <p>
        Our skilled professionals bring together innovation, technical
        expertise, and strategic thinking to craft solutions that drive
        success for our clients.
      </p>
    </div>
    <div className='skills'>
      <div className='skill'>
        <div className='skill-header'>
          <span>Design</span>
          <span className='percentage'>80%</span>
        </div>
        <div className='bar design'>
          {isVisible && (
            <motion.div
              className='progress'
              style={{ width: '80%' }}
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          )}
        </div>
      </div>
      <div className='skill'>
        <div className='skill-header'>
          <span>Development</span>
          <span className='percentage'>65%</span>
        </div>
        <div className='bar development'>
          {isVisible && (
            <motion.div
              className='progress'
              style={{ width: '65%' }}
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          )}
        </div>
      </div>
      <div className='skill'>
        <div className='skill-header'>
          <span>Digital Marketing</span>
          <span className='percentage'>80%</span>
        </div>
        <div className='bar digital-marketing'>
          {isVisible && (
            <motion.div
              className='progress'
              style={{ width: '80%' }}
              initial={{ width: 0 }}
              animate={{ width: '80%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          )}
        </div>
      </div>
      <div className='skill'>
        <div className='skill-header'>
          <span>PPC Management</span>
          <span className='percentage'>58%</span>
        </div>
        <div className='bar ppc-management'>
          {isVisible && (
            <motion.div
              className='progress'
              style={{ width: '58%' }}
              initial={{ width: 0 }}
              animate={{ width: '58%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          )}
        </div>
      </div>
      <div className='skill'>
        <div className='skill-header'>
          <span>Video Production</span>
          <span className='percentage'>70%</span>
        </div>
        <div className='bar video-production'>
          {isVisible && (
            <motion.div
              className='progress'
              style={{ width: '70%' }}
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          )}
        </div>
      </div>
    </div>
  </section>
  )
}

export default EmpoweredTeam