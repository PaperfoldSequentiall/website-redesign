import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import HeroSection from "./sections/heroSection/HeroSection";
import Technologies from "./sections/technologies/Technologies";
import Expertise from "./sections/expertise/Expertise";
import Legacy from "./sections/legacy/Legacy";
import Client from "./sections/client/Client";
import Highlights from "./sections/highlights/Highlights";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Technologies />
      <Expertise />
      <Legacy />
      <Client />
      <Highlights />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
