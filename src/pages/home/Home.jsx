import "./home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import HeroSection from "./HeroSection";
import Technologies from "./Technologies";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Technologies />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
