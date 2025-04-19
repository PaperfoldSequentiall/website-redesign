import "./steps.scss"
import { motion } from 'framer-motion';
import research from  "../../../../assets/aboutUs/research.webp"
import solution from  "../../../../assets/aboutUs/solution.webp"
import optimize from  "../../../../assets/aboutUs/optimize.webp"

const Steps = () => {
  return (
    <section className='steps-section'>
        <div className='steps-header'>
          <h2>
            Let us guide you through our{' '}
            <span className='highlight'>process</span>
          </h2>
          <p>
            Discover how we turn ideas into impactful solutions, step by step
          </p>
        </div>
        <div className='steps-content'>
          <div className='step'>
            <motion.div
              className='step-image'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={research} alt='Research' />
              <div className='overlay-text'>RESEARCH</div>
            </motion.div>
            <motion.div
              className='step-description'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className='step-number'>1</span>
              <div>
                <h3>First things,</h3>
                <p>
                  We dive deep into understanding your business needs and
                  objectives through thorough research.
                </p>
                <p>
                  Using this insight, we craft tailored IT solutions that align
                  perfectly with your unique goals.
                </p>
              </div>
            </motion.div>
          </div>

          <div className='step'>
            <motion.div
              className='step-image'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={solution} alt='Solution' />
              <div className='overlay-text'>SOLUTION</div>
            </motion.div>
            <motion.div
              className='step-description'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className='step-number'>2</span>
              <div>
                <h3>Next up,</h3>
                <p>
                  We provide a suite of IT solutions designed to simplify your
                  processes and boost efficiency.
                </p>
                <p>
                  From consulting and design to development and support, our
                  solutions are customized to meet your specific requirements.
                </p>
              </div>
            </motion.div>
          </div>

          <div className='step'>
            <motion.div
              className='step-image'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={optimize} alt='Optimize' />
              <div className='overlay-text'>OPTIMIZE</div>
            </motion.div>
            <motion.div
              className='step-description'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className='step-number'>3</span>
              <div>
                <h3>And it doesn’t stop there.</h3>
                <p>
                  We continuously enhance and refine your IT solutions to ensure
                  peak performance.
                </p>
                <p>
                  Our dedicated team works tirelessly to improve efficiency and
                  effectiveness, helping your business achieve sustained
                  success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default Steps