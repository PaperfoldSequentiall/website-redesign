import "./aboutContent.scss"
import avatar2 from '../../../../assets/aboutUs/avatar2.webp';

const AboutContent = () => {
  return (
    <section className='about-content'>
        <div className='intro-text'>
          <h2>
            Driving Your Business <span className='highlight'>Forward</span>{' '}
            with Technology
          </h2>
          <p className='main-paragraph'>
            We are a premier IT company focused on offering customized solutions
            and services that enable your business to achieve its goals. With
            seamless integration, scalable growth, and exceptional support, we
            guide you at every step towards success.
          </p>
          <p className='sub-paragraph'>Curious to learn more?</p>
          <p className='sub-paragraph'>
            Join us for a quick overview of what we can do for you.
          </p>
        </div>

        <div className='avatars'>
          <img src={avatar2} alt='Avatar 2' className='avatar' />
        </div>
      </section>
  )
}

export default AboutContent