import "./hero.scss"
import hero from '../../../../assets/aboutUs/about-hero.webp';

const Hero = () => {
  return (
    <section className='hero-section'>
        <img src={hero} alt='About Hero' className='hero-image' />
        <div className='hero-text'>
          <h1>About Us</h1>
          <p>
            Paperfold is a dynamic IT company offering design, development, and
            digital marketing services. We transform ideas into impactful
            solutions, empowering businesses to grow in the digital era.
          </p>
        </div>
      </section>
  )
}

export default Hero