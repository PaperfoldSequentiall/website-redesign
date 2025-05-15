import './landingHeader.scss';
import logo from '../../../assets/landing/logo.png';

const LandingHeader = () => {
  return (
    <section className='LandingHeader'>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='button'>
          <span className='btn-background'></span>
          <span className='btn-text' data-text='Get in Touch'>
            Get in Touch
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;
