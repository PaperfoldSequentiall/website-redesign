import './landingForm.scss';
import quote1 from '../../../assets/landing/quote1.png';
import quote2 from '../../../assets/landing/quote2.png';
import form from '../../../assets/landing/form.jpg';

const LandingForm = () => {
  return (
    <section className='LandingForm'>
      <div className='quote1'>
        <img src={quote1} alt='' />
      </div>
      <div className='content'>
        <div className='left'>
          <img src={form} alt='' />
        </div>

        <div className='right'>
          <div className='heading'>
            Unlock Growth with Experts in{' '}
            <p>Marketing, Design, Development & Production</p>
          </div>
          <div className='subHead'>
            Paperfold Sequential is your full-stack creative and performance
            agency — ready to scale your brand.
          </div>
          <div className='form'>
            <input type='text' name='' id='' placeholder='Name' />
            <input type='text' name='' id='' placeholder='Email' />
            <input type='text' name='' id='' placeholder='Phone Number' />
            <select name='Services' id=''>
              <option value=''>Select a Service</option>
              <option value='web-development'>Web Development</option>
              <option value='mobile-app-development'>
                Mobile App Development
              </option>
              <option value='social-media-marketing'>
                Social Media Marketing
              </option>
              <option value='performance-management'>
                Performance Management
              </option>
              <option value='ui-ux-design'>UI/UX Design</option>
              <option value='graphic-design'>Graphic Design</option>
              <option value='logo-branding'>Logo & Branding</option>
              <option value='product-packaging'>Product Packaging</option>
              <option value='video-production'>Video Production</option>
            </select>
            <textarea
              name=''
              id=''
              placeholder='Type your message here'
            ></textarea>
            <div className='privacy-policy'>
              <input type='checkbox' id='privacy-policy' />
              <label htmlFor='privacy-policy'>
                I agree to the privacy policy
              </label>
            </div>
            <button className='getInTouch__submit' type='submit'>
              <span className='btn-background'></span>
              <span className='btn-text' data-text='Submit'>
                Submit
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='quote2'>
        <img src={quote2} alt='' />
      </div>
    </section>
  );
};

export default LandingForm;
