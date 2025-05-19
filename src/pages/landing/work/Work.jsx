import './work.scss';
import MAAC from '../../../assets/landing/MAAC.jpg';
import ARENA from '../../../assets/landing/ARENA.jpg';
import WAND from '../../../assets/landing/WAND.png';
import WSF from '../../../assets/landing/WSF.png';
import scoobies from '../../../assets/landing/scoobies.png';

const Work = () => {
  const Cards = [
    {
      image: MAAC,
      client: `MAAC`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: ARENA,
      client: `ARENA`,
      cardDesc: `Designed and developed a virtual classroom platform`,
    },
    {
      image: WSF,
      client: `WSF`,
      cardDesc: `Designed and developed a Mediation platform`,
    },
    {
      image: WAND,
      client: `WAND`,
      cardDesc: `Designed and developed a perfume brand platform`,
    },
    {
      image: scoobies,
      client: `scoobies burgers and boba`,
      cardDesc: `Designed and developed a Mediation platform`,
    },
  ];
  return (
    <section className='Work'>
      <div className='heading'>
        See Our <span>Work</span>
      </div>
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
      <div className='button'>
        <span className='btn-background'></span>
        <span className='btn-text' data-text='Get in Touch'>
          See Full Portfolio
        </span>
      </div>
    </section>
  );
};

export default Work;
