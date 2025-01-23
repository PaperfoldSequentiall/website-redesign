import "./client.scss";
import logo1 from "../../../../assets/logo1.png";
import logo2 from "../../../../assets/logo1.png";
import logo3 from "../../../../assets/logo1.png";
import logo4 from "../../../../assets/logo1.png";
import logo5 from "../../../../assets/logo1.png";

const Client = () => {

  const logos = [logo1, logo2, logo3, logo4, logo5];

  const duplicatedLogos = [...logos, ...logos, ...logos];
  return (
    <section className="client">
      <div className="heading">
        <h1>
          Client <span>Spotlights</span>
        </h1>
        <p>
          Highlighting our trusted partnerships that fuel innovation and success
        </p>
      </div>
      <div className="logo-scroller">
          <div className="scroll-row left-to-right">
            {duplicatedLogos.map((logo, index) => (
              <div className="logo-box" key={index}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="scroll-row right-to-left">
            {duplicatedLogos.map((logo, index) => (
              <div className="logo-box" key={index}>
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Client;
