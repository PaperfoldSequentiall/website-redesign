import "./highlights.scss";
import { motion } from "framer-motion";
import design from "../../../../assets/home/design.png";
import deploy from "../../../../assets/home/deploy.png";
import develop from "../../../../assets/home/develop.png";
import maintain from "../../../../assets/home/maintain.png";

const Highlights = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="highlights">
      <motion.div
        className="left-section"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.2,
              ease: "easeInOut",
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Why Choose Paperfold?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          At Paperfold, we specialize in delivering tailored IT solutions that
          empower businesses. Whether it’s sleek website design, efficient
          development, or impactful marketing, we ensure your goals are met with
          precision and creativity.
        </motion.p>
        <motion.button
          className="getInTouch__submit"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
         <span className="btn-background"></span>
                  <span className="btn-text" data-text="Submit">
                    Learn More About Us
                  </span>
        </motion.button>
      </motion.div>

      <motion.div
        className="right-section"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.4,
              duration: 1.2,
              ease: "easeOut",
            },
          },
        }}
      >
        <motion.div
          className="card"
          style={{ backgroundImage: `url(${design})` }}
          variants={cardVariants}
        >
          <motion.h3 variants={cardContentVariants}>DESIGN</motion.h3>
          <motion.p variants={cardContentVariants}>
            We collaborate with you to understand your challenges and explore
            tailored solutions in one-on-one discussions, ensuring the perfect
            design for your needs.
          </motion.p>
          <motion.div
            className="line"
            variants={cardContentVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="card"
          style={{ backgroundImage: `url(${deploy})` }}
          variants={cardVariants}
        >
          <motion.h3 variants={cardContentVariants}>DEPLOY</motion.h3>
          <motion.p variants={cardContentVariants}>
            Our work doesn’t end at delivery. We engage with you to align on
            future goals and ensure your project’s ongoing success.
          </motion.p>
          <motion.div
            className="line"
            variants={cardContentVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="card"
          style={{ backgroundImage: `url(${develop})` }}
          variants={cardVariants}
        >
          <motion.h3 variants={cardContentVariants}>DEVELOP</motion.h3>
          <motion.p variants={cardContentVariants}>
            This is where the magic happens. We craft and strategize the most
            effective solutions to help your business thrive.
          </motion.p>
          <motion.div
            className="line"
            variants={cardContentVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="card"
          style={{ backgroundImage: `url(${maintain})` }}
          variants={cardVariants}
        >
          <motion.h3 variants={cardContentVariants}>MAINTAIN</motion.h3>
          <motion.p variants={cardContentVariants}>
            Count on us to nurture and protect your solutions, ensuring
            long-term excellence and reliability.
          </motion.p>
          <motion.div
            className="line"
            variants={cardContentVariants}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Highlights;
