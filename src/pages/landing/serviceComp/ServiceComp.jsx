import './serviceComp.scss';
import digitalBig from '../../../assets/landing/digitalBig.jpg';
import digitalSmall from '../../../assets/landing/digitalSmall.jpg';
import designBig from '../../../assets/landing/designBig.jpg';
import designSmall from '../../../assets/landing/designSmall.jpg';
import developmentBig from '../../../assets/landing/developmentBig.jpg';
import developmentSmall from '../../../assets/landing/developmentSmall.jpg';
import videoBig from '../../../assets/landing/videoBig.jpg';
import videoSmall from '../../../assets/landing/videoSmall.jpg';
import leftarrow from '../../../assets/landing/leftarrow.png';

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
      title: `Design`,
      big: designBig,
      small: designSmall,
      head: `Designs That Speak, Sell & Scale`,
      desc: `We craft beautiful, functional, and conversion-ready designs for your brand across every touchpoint.`,
      points: [
        'Logo Design',
        'Website UI Design',
        'UX Research',
        'Wireframing & Advanced Prototyping',
        'Interactive Mockups',
        'Custom Illustrations',
        'Branding & Identity Design',
        'Product Packaging',
        'Poster & Banner Design',
        'Business Proposals, Catalogues, Brochures',
        'Office Stationery (Letterheads, ID Cards, Signatures)',
        'Social Media Creative Design',
        'Pitch Decks & Presentations',
      ],
      proof: `Brand-Focused | User-Driven | Built for Impact`,
      button: `Upgrade My Brand’s Design`,
    },
    {
      title: `Development`,
      big: developmentBig,
      small: developmentSmall,
      head: `Web & App Development That Performs`,
      desc: `From websites to scalable platforms, we build with performance, speed, and security in mind.`,
      points: [
        'Informational Website Development',
        'Chatbot Integration',
        'Custom Software Development',
        'AI-Powered Tools & Automation',
        'Dynamic Website Development',
        'Web App Development',
        'E-commerce Platforms (Shopify, WooCommerce, Custom)',
        'Native & Cross-Platform Mobile Apps',
        'DevOps Implementation',
        'Cloud & Infrastructure Setup',
        'Data Analytics & Backend Engineering',
      ],
      proof: `ReactJS, Next.js, Node.js, MongoDB, AWS, Firebase, Tailwind, Flutter, Kubernetes`,
      button: `Build My Digital Product`,
    },
    {
      title: ` Video Production`,
      big: videoBig,
      small: videoSmall,
      head: `Cinematic Visuals That Drive Emotion & Action`,
      desc: `We produce branded content that captivates, converts, and communicates with power.`,
      points: [
        'Brand Films & Commercial Shoots',
        'Product Photography & Reels',
        'Industrial & Corporate Video Production',
        'Testimonial Videos & Case Studies',
        'Influencer & YouTube Video Production',
        'Music & Fashion Shoots',
        'Commercial Advertisements',
        'Voiceovers, Editing & Color Grading',
        'Motion Graphics & Animation',
      ],
      proof: `End-to-End Video Services | Engagement Focused`,
      button: `Create Impactful Videos`,
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
