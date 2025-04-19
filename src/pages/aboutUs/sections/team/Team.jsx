import "./team.scss";
import sanjivani from "../../../../assets/aboutUs/sanjivani.webp";
import sherin from "../../../../assets/aboutUs/sherin.webp";
import aniket from "../../../../assets/aboutUs/aniket.webp";
import kalpesh from "../../../../assets/aboutUs/kalpesh.webp";

const teamMembers = [
  {
    name: "Sanjivani Divekar",
    role: "UI/UX Designer",
    image: sanjivani,

    linkedin: "#",
  },
  {
    name: "Aniket Khese",
    role: "Marketing Manager",
    image: aniket,

    linkedin: "#",
  },
  {
    name: "Sherin Paul",
    role: "Full Stack Developer",
    image: sherin,

    linkedin: "https://www.linkedin.com/in/sherinann",
  },
  {
    name: "Kalpesh Parab",
    role: "Full Stack Developer",
    image: kalpesh,

    linkedin: "https://www.linkedin.com/in/kalpesh-parab-a53369202",
  },
];

const Team = () => {
  return (
    <section className="our-team-section">
      <div className="team-header">
        <h2>
          Meet Our <span className="highlight">Team</span>
        </h2>
        <p>The Creative Minds Powering Paperfold’s Success</p>
      </div>
      <div className="team-content">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="profile-pic">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="social-links">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
