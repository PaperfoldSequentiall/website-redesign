import './expertise.scss';
import image1 from '../../../../assets/web-development.png';
import image2 from '../../../../assets/ui-ux-design.png';
import image3 from '../../../../assets/digital-marketing.png';
import image4 from '../../../../assets/cloud-database.png';
import image5 from '../../../../assets/software-development.png';
import image6 from '../../../../assets/branding.png';
import image7 from '../../../../assets/google-services.png';

const Expertise = () => {
  const expertiseData = [
    {
      image: image1,
      title: 'Web Development',
      subtext:
        'We provide comprehensive web development services, including front-end, back-end, and full-stack development. Using the latest technologies, we craft visually stunning, secure, and functional websites tailored to your needs.',
    },
    {
      image: image2,
      title: 'UI/UX Design',
      subtext:
        "We craft visually stunning and user-friendly designs, ensuring a seamless experience tailored to your audience's needs and your business goals",
    },
    {
      image: image3,
      title: 'Digital Marketing',
      subtext:
        'Our digital marketing services include SEO, PPC, social media marketing, content creation, and email campaigns. We help you connect with your audience, enhance brand visibility, and drive leads and sales to meet your business goals',
    },
    {
      image: image4,
      title: 'Cloud / Database Management',
      subtext:
        'We provide end-to-end cloud database services, including setup, configuration, ongoing management, data migration, backups, and performance optimization, ensuring you get the most from your data.',
    },
    {
      image: image5,
      title: 'Software Development',
      subtext:
        'We provide web and mobile app development, software engineering, data science, and machine learning services, along with managed solutions to handle all your software needs.',
    },
    {
      image: image6,
      title: 'Branding',
      subtext:
        "Branding & Logo Creating a strong positive perception of a company, its products or services in the customer's mind by combining such elements as logo, design, mission statement, and a consistent theme throughout all marketing & Communications.",
    },
    {
      image: image7,
      title: 'Google Services',
      subtext:
        'Google Ads is a PPC platform for displaying ads, Google Merchant Center helps upload product catalogs, Google Analytics tracks website traffic, and Google Maps helps businesses reach customers with location data.',
    },
  ];

  return (
    <section className='expertise'>
      <div className='heading'>
        <h1>
          Explore <span>Our Expertise</span>
        </h1>
        <p>
          Start your IT journey with solutions designed to boost your business
          growth. Experience seamless services tailored to achieve your goals.
        </p>
      </div>
      <div className='expertise-grid'>
        {expertiseData.map((item, index) => (
          <div className='expertise-card-container'>
            <div className='expertise-card' key={index}>
              <img src={item.image} alt={item.title} />
              <span className='before-title'>{item.title}</span>
              <div className='overlay'>
                <h3>{item.title}</h3>
                <span className='after-title'></span>
                <p>{item.subtext}</p>
                <div className='line'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;