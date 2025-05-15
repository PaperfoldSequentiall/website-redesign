import './people.scss';
import p1 from '../../../assets/landing/p1.png';
import qopen from '../../../assets/landing/qopen.png';
import qclose from '../../../assets/landing/qclose.png';

const People = () => {
  const quotes = [
    {
      text: `We Appreciate the amount of efforts Paperfold put to develop out technical infra. It's been 3 years and we are up and running smoothly.`,
      hero: p1,
      name: `Abhinav, Nanoswab Solutions.`,
    },
    {
      text: `We Appreciate the amount of efforts Paperfold put to develop out technical infra. It's been 3 years and we are up and running smoothly.`,
      hero: p1,
      name: `Abhinav, Nanoswab Solutions.`,
    },
    {
      text: `We Appreciate the amount of efforts Paperfold put to develop out technical infra. It's been 3 years and we are up and running smoothly.`,
      hero: p1,
      name: `Abhinav, Nanoswab Solutions.`,
    },
  ];
  return (
    <section className='People'>
      <div className='heading'>
        What do people say <span>about us</span>?
      </div>
      <div className='desc'>
        See why businesses choose us—and keep coming back.
      </div>
      <div className='quotes'>
        {quotes.map((quote) => (
          <div className='quote'>
            <div className='box'>
              <div className='qopen'>
                <img src={qopen} alt='' />
              </div>
              <div className='text'>{quote.text}</div>
              <div className='qclose'>
                <img src={qclose} alt='' />
              </div>
            </div>
            <div className='triangle'></div>
            <div className='hero'>
              <div className='image'>
                <img src={quote.hero} alt='' />
              </div>
            <div className='name'>{quote.name}</div>
          </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default People;
