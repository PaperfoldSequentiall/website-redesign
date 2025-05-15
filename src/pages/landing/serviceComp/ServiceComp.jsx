import './serviceComp.scss';
import digitalBig from '../../../assets/landing/digitalBig.jpg';
import digitalSmall from '../../../assets/landing/digitalSmall.jpg';
import leftarrow from '../../../assets/landing/leftarrow.png';
import rightarrow from '../../../assets/landing/rightarrow.png';

const ServiceComp = () => {
  const services = [
    {
      title: `Digital Marketing`,
      big: digitalBig,
      small: digitalSmall,
      head: `Results-Driven Digital Marketing for Brands That Want More`,
      desc: `From awareness to acquisition, our team drives performance and ROI through full-funnel marketing.`,
      points: [
        'Social Media Marketing',
        'Social Media Optimization',
        'Google Ads (Search, Display, Shopping, Video)',
        'Google My Business Setup',
        'Performance Marketing',
        'Influencer Marketing',
        'SEO (On-page, Off-page, Technical)',
        'Keyword Research & Strategy',
        'Lead Generation Campaigns',
        'Content Marketing & Copywriting',
        'CRM Integration (Salesforce, Zoho, HubSpot)',
      ],
      proof: `50L+ Ad Spend | 200+ Campaigns | 100+ Brands`,
      button: `Let's Scale with Digital Marketing`,
    },
    {
      title: `Digital Marketing`,
      big: digitalBig,
      small: digitalSmall,
      head: `Results-Driven Digital Marketing for Brands That Want More`,
      desc: `From awareness to acquisition, our team drives performance and ROI through full-funnel marketing.`,
      points: [
        'Social Media Marketing',
        'Social Media Optimization',
        'Google Ads (Search, Display, Shopping, Video)',
        'Google My Business Setup',
        'Performance Marketing',
        'Influencer Marketing',
        'SEO (On-page, Off-page, Technical)',
        'Keyword Research & Strategy',
        'Lead Generation Campaigns',
        'Content Marketing & Copywriting',
        'CRM Integration (Salesforce, Zoho, HubSpot)',
      ],
      proof: `50L+ Ad Spend | 200+ Campaigns | 100+ Brands`,
      button: `Let's Scale with Digital Marketing`,
    },
  ];
  return (
    <section className='ServiceComp'>
      <div className='mainHeader'>
        <span>OUR</span> SERVICES
      </div>
      <div className='services'>
        {services.map((service, index) => (
          <div
            className={`service ${index % 2 !== 0 ? 'reverse' : ''}`}
            key={index}
          >
            <div className='left'>
              <div className='title'>{service.title}</div>
              <div className='bigImage'>
                <img src={service.big} alt='' />
              </div>
              <div className='smallImage'>
                <img src={service.small} alt='' />
              </div>
              <div className='arrow'>
                <img src={leftarrow} alt='' />
              </div>
            </div>
            <div className='right'>
              <div className='head'>{service.head}</div>
              <div className='desc'>{service.desc}</div>
              <div className='offer'>
                <div className='what'>What We Offer:</div>
                <div className='points'>
                  <div className='column_left'>
                    {service.points
                      .filter((_, i) => i % 2 === 0)
                      .map((point, index) => (
                        <li key={`left-${index}`}>{point}</li>
                      ))}
                  </div>
                  <div className='column_right'>
                    {service.points
                      .filter((_, i) => i % 2 !== 0)
                      .map((point, index) => (
                        <li key={`right-${index}`}>{point}</li>
                      ))}
                  </div>
                </div>
              </div>
              <div className='mini'>
                <span>Mini Proof:</span>
                <div className='proof'>{service.proof}</div>
                <div className='button'>
                  <span className='btn-background'></span>
                  <span className='btn-text' data-text='Get in Touch'>
                    {service.button}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceComp;
