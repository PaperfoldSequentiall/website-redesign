import React, { useEffect, useRef, useState } from 'react';
import './legacy.scss';
import part1 from '../../../../assets/home/part1.png';
import part2 from '../../../../assets/home/part2.png';

const Legacy = () => {
  const legacyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (legacyRef.current) {
        const rect = legacyRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.25 && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <section
      className={`legacy ${isVisible ? 'animate-semicircle' : ''}`}
      ref={legacyRef}
    >
      <div className={`legacy-row ${isVisible ? 'animate' : ''}`}>
        <div className='legacy-content'>
          <h2 className='legacy-title'>
            Milestones That <span>Matter</span>
          </h2>
          <p className='legacy-description'>
            The numbers don’t lie—our focus on delivering results is reflected
            in every metric, from growth rates to client satisfaction, all
            showing the impact of our work.
          </p>
        </div>

        <div className='legacy-line'>
          <img src={part1} alt='Part 1' className='legacy-line-image1' />
          <img src={part2} alt='Part 2' className='legacy-line-image2' />
        </div>

        <ul className='stats-list'>
          <li>
            <span>156 +</span> Websites
          </li>
          <li>
            <span>377 +</span> Branding & Content Handling
          </li>
          <li>
            <span>58 +</span> Mobile Applications
          </li>
          <li>
            <span>1,254 +</span> Digital Marketing
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Legacy;