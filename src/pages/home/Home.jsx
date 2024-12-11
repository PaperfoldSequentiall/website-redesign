import "./home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import HeroSection from "./HeroSection";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
