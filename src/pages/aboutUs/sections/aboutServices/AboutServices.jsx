import "./aboutServices.scss"
import design from "../../../../assets/aboutUs/design-icon.webp"
import develop from "../../../../assets/aboutUs/develop-icon.webp"
import deploy from "../../../../assets/aboutUs/deploy-icon.webp"
import maintain from "../../../../assets/aboutUs/maintain-icon.webp"

const AboutServices = () => {
  return (
    <section className='about-us'>
        <h1 className='section-title'>
          Comprehensive <span className='highlight'>IT Solutions</span>, All in
          One Place
        </h1>
        <div className='services'>
          <div className='service'>
            <img src={design} alt='Design Icon' />
            <h2>DESIGN</h2>
            <p>
              We collaborate with you to understand your challenges and explore
              tailored solutions in one-on-one discussions, ensuring the perfect
              design for your needs.
            </p>
          </div>
          <div className='service'>
            <img src={develop} alt='Develop Icon' />
            <h2>DEVELOP</h2>
            <p>
              This is where the magic happens. We craft and strategize the most
              effective solutions to help your business thrive.
            </p>
          </div>
          <div className='service'>
            <img src={deploy} alt='Deploy Icon' />
            <h2>DEPLOY</h2>
            <p>
              Our work doesn’t end at delivery. We engage with you to align on
              future goals and ensure your project’s ongoing success.
            </p>
          </div>
          <div className='service'>
            <img src={maintain} alt='Maintain Icon' />
            <h2>MAINTAIN</h2>
            <p>
              Count on us to nurture and protect your solutions, ensuring
              long-term excellence and reliability.
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutServices