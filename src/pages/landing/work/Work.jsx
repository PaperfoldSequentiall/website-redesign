import './work.scss';
import MAAC from '../../../assets/landing/MAAC.jpg';

const Work = () => {
  const Cards = [
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
  ];
  return (
    <section className='Work'>
      <div className='heading'>See Our <span>Work</span></div>
      <div className='desc'>Our Portfolio - Results You Can See</div>
      <div className='workCards'>
        {Cards.map((Card) => (
          <div className='Card'>
            <div className='image'>
              <img src={Card.image} alt='' />
            </div>
            <div className='clientName'>{Card.client}</div>
            <div className='cardDesc'>{Card.cardDesc}</div>
          </div>
        ))}
          </div>
          <div className="button">
              <span className='btn-background'></span>
                  <span className='btn-text' data-text='Get in Touch'>
                    See Full Portfolio
                  </span>
          </div>
    </section>
  );
};

export default Work;
