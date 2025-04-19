import { useEffect, useRef, useState } from "react";
import "./counter.scss";
import { motion } from "framer-motion";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState({
    design: 0,
    development: 0,
    digitalMarketing: 0,
    ppcManagement: 0,
    videoProduction: 0,
  });

  const counterSectionRef = useRef(null);

  const counterValues = {
    design: 95,
    development: 85,
    digitalMarketing: 80,
    ppcManagement: 65,
    videoProduction: 55,
  };

  // Observe visibility of the counter section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let interval = setInterval(() => {
        setCount((prevCount) => {
          let updated = { ...prevCount };
          let isComplete = true;

          Object.keys(counterValues).forEach((key) => {
            if (updated[key] < counterValues[key]) {
              updated[key] += 1;
              isComplete = false;
            }
          });

          if (isComplete) clearInterval(interval);

          return updated;
        });
      }, 30); // Faster animation

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="counter-section" ref={counterSectionRef}>
      <div className="counter-row">
        {Object.keys(counterValues).map((key, index) => (
          <div className="counter-item" key={index}>
            <motion.div
              className="number"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {count[key]}
            </motion.div>
            <p className="label">{key.replace(/([A-Z])/g, " $1")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
